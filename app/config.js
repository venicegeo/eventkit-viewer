export const Config = {
    BASEMAP_URL : '/',
    FEATURES : [{'name1': '/path'}],
    SOURCE_DATA: {
        "dataPackName": "DataPack Sample",
        "fileUrl": "DataPackSample.gpkg",
        "sources": [
            {
                "name": "OSM",
                "layers": [
                    {
                        "name": "Hotels",
                        "filepath": "data/airports.json",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/hotel.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Embassys",
                        "filepath": "data/Fire_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/embassy.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },

                    {
                        "name": "Hospitals",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/hospital.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Police",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Buildings",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/building.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Places of Worship",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/placeofworship.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Schools",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/school.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Roads",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Neighborhoods",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    }
                ]
            },
            {
                "name": "Rasters",
                "layers": [{
                    "name": "dg_foundation_geoint",
                    "filepath": "",
                    "style": {
                    },
                    "icon": {
                        "iconUrl": "app/data/icons/imagery.png"
                    },
                    "show": true,
                    "addToTable": true
                }]
            }],
        },
    };

