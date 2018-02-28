import types from './actionTypes';
import Geopackage from '@ngageoint/geopackage'

export function resetFile() {
    return {
        type: types.FILE_RESET,
    };
}

export const processFile = file => (dispatch) => {
    dispatch({
        type: types.FILE_PROCESSING,
        filename: file.name,
    });

    var gpkgPromise = new Promise((resolve, reject) => {
        var r = new FileReader();
        r.onload = resolve.bind(this, r);
        r.readAsArrayBuffer(file);
    }).then((r) => {
        var array = new Uint8Array(r.result);
        return new Promise((resolve, reject) => {
            Geopackage.openGeoPackageByteArray(array, function(err, gpkg) {
                if (err) return reject(err);
                resolve(gpkg);
            });
        });
    });
    var namesPromise = gpkgPromise.then((gpkg) => {
        return new Promise((resolve, reject) => {
            gpkg.getFeatureTables(function(err, featureTableNames) {
                if (err) return reject(err);
                resolve(featureTableNames);
            });
        });
    });
    return Promise.all([gpkgPromise, namesPromise]).then(([gpkg, featureTableNames]) => {
        return Promise.all(featureTableNames.map(
            (name) => new Promise((resolve, reject) => {
                gpkg.getFeatureDaoWithTableName(name, function(err, featureDao) {
                    if (err) return reject(err);
                    resolve(featureDao);
                });
            }).then((featureDao) => {
                return new Promise((resolve, reject) => {
                    var features = [];
                    featureDao.queryForEach(function(err, row, rowDone) {
                        var feature = featureDao.getFeatureRow(row);
                        var geometry = feature.getGeometry();
                        if (geometry == null) return;

                        var geojson = geometry.geometry.toGeoJSON();
                        geojson.properties = {};
                        for (var key in feature.values) {
                            if (feature.values.hasOwnProperty(key) && key != feature.getGeometryColumn().name) {
                                // var column = info.columnMap[key];
                                geojson.properties[key] = feature.values[key];
                            }
                        }
                        features.push(geojson);
                        rowDone();
                    }, function() { // table finished
                        var layer = {name: name, features: features};
                        dispatch({ type: types.TABLE_PROCESSED, layer: layer });
                        resolve(layer);
                    });
                });
            })
        ));
    }).catch((err) => {
        dispatch({ type: types.FILE_ERROR, err: err });
    });
    return promise;
}
