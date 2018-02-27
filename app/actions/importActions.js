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

    return new Promise((resolve) => {
        var r = new FileReader();
        r.onload = function() {
            var array = new Uint8Array(r.result);
            Geopackage.openGeoPackageByteArray(array, function(err, gpkg) {
                if (err) {
                    dispatch({ type: types.FILE_ERROR, err });
                }
                gpkg.getFeatureTables(function(err, featureTableNames) {
                    var tablesProcessed = 0;
                    featureTableNames.forEach(function(name) {
                        gpkg.getFeatureDaoWithTableName(name, function(err, featureDao) {
                            var features = [];
                            featureDao.queryForEach(function(err, row, rowDone) { // row callback
                                var feature = featureDao.getFeatureRow(row);
                                var geometry = feature.getGeometry();
                                if (geometry) {
                                    var geom = geometry.geometry;
                                    var geojson = geom.toGeoJSON();

                                    geojson.properties = {};
                                    for (var key in feature.values) {
                                        if (feature.values.hasOwnProperty(key) && key != feature.getGeometryColumn().name) {
                                            // var column = info.columnMap[key];
                                            geojson.properties[key] = feature.values[key];
                                        }
                                    }
                                }
                                features.push(geojson);
                                rowDone();
                            }, function() { // final callback
                                var layer = {name: name, features: features};
                                dispatch({ type: types.TABLE_PROCESSED, layer: layer });
                                tablesProcessed++;
                                if (tablesProcessed === featureTableNames.length) {
                                    dispatch({ type: types.FILE_PROCESSED });
                                    resolve();
                                }
                            });
                        });
                    });
                });
            });
        }
        r.readAsArrayBuffer(file);
    });
}
