export const Config = {
    BASEMAP_URL : '/',
    FEATURES : [{'name1': '/path'}],
    SOURCE_DATA: {
        "fileUrl": "testfilename",
        "sources": [
            {
                "name": "OSM",
                "layers": [
                    {
                        "name": "Airports",
                        "filepath": "data/airports.json",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "data/icons/airports.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Fire Stations",
                        "filepath": "data/Fire_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "data/icons/fire_station.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },

                    {
                        "name": "Police",
                        "filepath": "data/Police_Stations.geojson",
                        "style": {
                        },
                        "icon": {
                            "iconUrl": "data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    }
                ]
            },
            {
                "name": "Digital Globe",
                "layers": [{
                    "name": "imagery",
                    "filepath": "",
                    "style": {
                    },
                    "show": true,
                    "addToTable": true
                }]
            }],
        },
    };

