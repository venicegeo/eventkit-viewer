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
                        "name": "AOI Boundary",
                        "filepath": "../app/data/airports.json",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "app/data/icons/hotel.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Hotels",
                        "filepath": "../app/data/Hotels.geojson",
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
                        "filepath": "../app/data/Fire_Stations.geojson",
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
                        "filepath": "../app/data/Hospitals.geojson",
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
                        "filepath": "../app/data/Police_Stations.geojson",
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
                        "filepath": "../app/data/Police_Stations.geojson",
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
                        "filepath": "../app/data/Places_of_Worship.geojson",
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
                        "filepath": "../app/data/Police_Stations.geojson",
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
                        "filepath": "../app/data/Police_Stations.geojson",
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
                        "filepath": "../app/data/Police_Stations.geojson",
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

