import types from './actionTypes';
import Geopackage from '@ngageoint/geopackage'
import fetch from 'isomorphic-fetch';

import { Config } from '../config.js'

const checkRules = (rules, props) => {
    const ret = rules.every((rule) => {
        if (!props.hasOwnProperty(rule.prop))
            return false;

        const prop = props[rule.prop];
        switch(rule.relation) {
            case "=":
                return rule.hasOwnProperty("value") && prop === rule.value;
            case "!=":
                return rule.hasOwnProperty("value") && prop !== rule.value;
            case "is null":
                return prop === null;
            case "is not null":
                return prop !== null;
            case "in":
                return rule.hasOwnProperty("values") &&
                    rule.values.map((s) => s.toLowerCase()).includes(prop.toLowerCase());
            case "not in":
                return rule.hasOwnProperty("values") &&
                    !rule.values.map((s) => s.toLowerCase()).includes(prop.toLowerCase());
        }
    });
    return ret;
}

export const loadLayer = (layer, url) => (dispatch) => {

    if (layer.features !== null) {
        // Layer was already loaded; use existing data
        return new Promise((resolve, reject) => resolve(layer.features));
    }

    var gpkgPromise = fetch(
        Config.GPKG_URL
    ).then(response => {
        var array = new Uint8Array(response.arrayBuffer());
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

        const name = layer.table;

        if (!featureTableNames.includes(name))
            throw "Table not found in gpkg: '"+name+"'";

        var featureDaoPromise = new Promise((resolve, reject) => {
            gpkg.getFeatureDaoWithTableName(name, function(err, featureDao) {
                if (err) return reject(err);
                resolve(featureDao);
            });
        });
        var tableInfoPromise = featureDaoPromise.then((featureDao) => new Promise((resolve, reject) => {
            gpkg.getInfoForTable(featureDao, (err, info) => {
                if (err) return reject(err);
                resolve(info);
            });
        }));
        return Promise.all([featureDaoPromise, tableInfoPromise]);

    }).then(([featureDao, tableInfo]) => {
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
                        var column = tableInfo.columnMap[key];
                        geojson.properties[column.displayName] = feature.values[key];
                    }
                }
                if (checkRules(layer.rules, geojson.properties)) {
                    features.push(geojson);
                }
                rowDone();
            }, function() { // table finished
                var geomType = tableInfo.geometryColumns ?
                    tableInfo.geometryColumns.geometryTypeName :
                    "POINT";
                var layer = { id: layer.id, features: features };
                dispatch({ type: types.LAYER_LOADED, ...layer });
                resolve(layer);
            });
        });
    }).catch((err) => {
        // TODO: error action?
    });
    return promise;
}
