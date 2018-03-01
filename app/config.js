export const Config = {
    "BASEMAP_URL": "/",
    "FEATURES": [
        {
            "name1": "/path"
        }
    ],
    "SOURCE_DATA": {
        "dataPackName": "DataPack Sample",
        "fileUrl": "DataPackSample.gpkg",
        "sources": [
            {
                "name": "OSM",
                "layers": [
                    {
                        "name": "AOI Boundary",
                        "filepath": "../app/data/airports.json",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/hotel.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Hotels",
                        "filepath": "../app/data/Hotels.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/hotel.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Embassies",
                        "filepath": "../app/data/Places_of_Worship.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/embassy.svg"
                        },
                        "show": true,
                        "addToTable": true
                    },
                    {
                        "name": "Hospitals",
                        "filepath": "../app/data/Hospitals.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/hospital.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Police",
                        "filepath": "../app/data/Police_Stations.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Buildings",
                        "filepath": "../app/data/Police_Stations.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/building.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Places of Worship",
                        "filepath": "../app/data/Places_of_Worship2.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/placeofworship.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Schools",
                        "filepath": "../app/data/Police_Stations.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/school.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Roads",
                        "filepath": "../app/data/Police_Stations.geojson",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/police.svg"
                        },
                        "show": false,
                        "addToTable": true
                    },
                    {
                        "name": "Neighborhoods",
                        "filepath": "../app/data/Police_Stations.geojson",
                        "style": {},
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
                "layers": [
                    {
                        "name": "dg_foundation_geoint",
                        "filepath": "",
                        "style": {},
                        "icon": {
                            "iconUrl": "app/data/icons/imagery.png"
                        },
                        "show": true,
                        "addToTable": true
                    }
                ]
            }
        ]
    },
    "LABELS": {
        "point": [
            {
                "name": "atm",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "atm"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/atm.svg"
                }
            },
            {
                "name": "bar",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bar"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/bar.svg"
                }
            },
            {
                "name": "bench",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bench"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/bench.svg"
                }
            },
            {
                "name": "bus_station",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bus_station"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/bus stop.svg"
                }
            },
            {
                "name": "cafe",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "cafe"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/cafe.svg"
                }
            },
            {
                "name": "car_fix",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "car_fix"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/car repair.svg"
                }
            },
            {
                "name": "car_rental",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "car_rental"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/car rental.svg"
                }
            },
            {
                "name": "casino",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "casino"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/gambling.svg"
                }
            },
            {
                "name": "cinema",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "cinema"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/cinema.svg"
                }
            },
            {
                "name": "college",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "college"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/university.svg"
                }
            },
            {
                "name": "community_centre",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "community_centre"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/community center.svg"
                }
            },
            {
                "name": "courthouse",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "courthouse"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/courthouse.svg"
                }
            },
            {
                "name": "dentist",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "dentist"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/tooth.svg"
                }
            },
            {
                "name": "doctors",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "doctors"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/doctors.svg"
                }
            },
            {
                "name": "drinking_water",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "drinking_water"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/drinking water.svg"
                }
            },
            {
                "name": "fast_food",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "fast_food"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/fast food.svg"
                }
            },
            {
                "name": "fuel",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "fuel"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/fuel.svg"
                }
            },
            {
                "name": "kindergarten",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "kindergarten"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/kindergarten.svg"
                }
            },
            {
                "name": "library",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "library"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/library.svg"
                }
            },
            {
                "name": "pharmacy",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "pharmacy"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/pharmacy.svg"
                }
            },
            {
                "name": "post_office",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "post_office"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/post office.svg"
                }
            },
            {
                "name": "pub",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "pub"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/pub.svg"
                }
            },
            {
                "name": "recycling",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "recycling"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/recycling.svg"
                }
            },
            {
                "name": "restaurant",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "restaurant"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/restaurant.svg"
                }
            },
            {
                "name": "social_facility",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "social_facility"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/social facility.svg"
                }
            },
            {
                "name": "telephone",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "telephone"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/telephone.svg"
                }
            },
            {
                "name": "fire_station",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "fire_station"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/fire station.svg"
                }
            },
            {
                "name": "townhall",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "townhall"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/townhall.svg"
                }
            },
            {
                "name": "bank",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bank"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/bank.svg"
                }
            },
            {
                "name": "embassy",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "embassy"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/embassy.svg"
                }
            },
            {
                "name": "school",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "school"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/school.svg"
                }
            },
            {
                "name": "border_control",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "border_control"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/border control.svg"
                }
            },
            {
                "name": "bus_stop",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bus_stop"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/bus stop.svg"
                }
            },
            {
                "name": "government",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "government"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/government.svg"
                }
            },
            {
                "name": "hospital",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hospital"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/hospital.svg"
                }
            },
            {
                "name": "police",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "police"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/police.svg"
                }
            },
            {
                "name": "taxi",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "taxi"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/taxi.svg"
                }
            },
            {
                "name": "university",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "university"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                    "symbol": "static/icons/gray/university.svg"
                }
            },
            {
                "name": "theatre",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "theatre"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/theatre.svg"
            }
            },
            {
                "name": "toilets",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "toilets"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/toilets.svg"
            }
            },
            {
                "name": "arts_centre",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "arts_centre"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/arts_centre.svg"
            }
            },
            {
                "name": "ngo",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "ngo"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/ngo.svg"
            }
            },
            {
                "name": "grave_yard",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "grave_yard"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/graveyard.svg"
            }
            },
            {
                "name": "shower",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "shower"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/shower.svg"
            }
            },
            {
                "name": "studio",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "studio"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/studio.svg"
            }
            },
            {
                "name": "money_transfer",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "money_transfer"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/money transfer.svg"
            }
            },
            {
                "name": "bureau_de_change",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bureau_de_change"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/bureau de change.svg"
            }
            },
            {
                "name": "beverages",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "beverages"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/beverages.svg"
            }
            },
            {
                "name": "hairdresser",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hairdresser"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/hairdresser.svg"
            }
            },
            {
                "name": "supermarket",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "supermarket"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/supermarket.svg"
            }
            },
            {
                "name": "bakery",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bakery"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/bakery.svg"
            }
            },
            {
                "name": "mobile_phone",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "mobile_phone"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/mobile phone.svg"
            }
            },
            {
                "name": "tailor",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "tailor"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/tailor.svg"
            }
            },
            {
                "name": "car_parts",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "car_parts"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/car parts.svg"
            }
            },
            {
                "name": "computer",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "computer"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/computer.svg"
            }
            },
            {
                "name": "clothes",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "clothes"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/clothes.svg"
            }
            },
            {
                "name": "car_repair",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "car_repair"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/car repair.svg"
            }
            },
            {
                "name": "funeral_directors",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "funeral_directors"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/funeral directors.svg"
            }
            },
            {
                "name": "dry_cleaning",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "dry_cleaning"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/dry cleaning.svg"
            }
            },
            {
                "name": "butcher",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "butcher"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/butcher.svg"
            }
            },
            {
                "name": "seafood",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "seafood"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/seafood.svg"
            }
            },
            {
                "name": "hardware",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hardware"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/hardware.svg"
            }
            },
            {
                "name": "bicycle",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bicycle"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/bike.svg"
            }
            },
            {
                "name": "motorcycle",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "motorcycle"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/motorcycle.svg"
            }
            },
            {
                "name": "tyres",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "tyres"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/tyres.svg"
            }
            },
            {
                "name": "photo",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "photo"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/photo.svg"
            }
            },
            {
                "name": "information",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "information"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/information.svg"
            }
            },
            {
                "name": "camp_site",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "camp_site"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/campsite.svg"
            }
            },
            {
                "name": "viewpoint",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "viewpoint"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/viewpoint.svg"
            }
            },
            {
                "name": "hostel",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hostel"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/hotel.svg"
            }
            },
            {
                "name": "hotel",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hotel"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/hotel.svg"
            }
            },
            {
                "name": "museum",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "museum"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/museum.svg"
            }
            },
            {
                "name": "beach_resort",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "beach_resort"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/beach resort.svg"
            }
            },
            {
                "name": "playground",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "playground"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/playground.svg"
            }
            },
            {
                "name": "motel",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "motel"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/hotel.svg"
            }
            },
            {
                "name": "craft",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "craft"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/craft.svg"
            }
            },
            {
                "name": "water_well",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "water_well"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/bucket.svg"
            }
            },
            {
                "name": "water_tower",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "water_tower"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/water tower.svg"
            }
            },
            {
                "name": "tower",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "tower"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/communication tower.svg"
            }
            },
            {
                "name": "storage_tank",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "storage_tank"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/tank.svg"
            }
            },
            {
                "name": "gambling",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "gambling"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/gambling.svg"
            }
            },
            {
                "name": "recycling",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "recycling"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/recycling.svg"
            }
            },
            {
                "name": "waste_basket",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "waste_basket"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/waste basket.svg"
            }
            },
            {
                "name": "street_lamp",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "street_lamp"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/street lamp.svg"
            }
            },
            {
                "name": "fire_hydrant",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "fire_hydrant"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/fire hydrant.svg"
            }
            },
            {
                "name": "waste_disposal",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "waste_disposal"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/waste basket.svg"
            }
            },
            {
                "name": "christian",
                "rules": [
                    {
                        "prop": "religion",
                        "relation": "=",
                        "value": "christian"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/christian.svg"
            }
            },
            {
                "name": "jewish",
                "rules": [
                    {
                        "prop": "religion",
                        "relation": "=",
                        "value": "jewish"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/jewish.svg"
            }
            },
            {
                "name": "muslim",
                "rules": [
                    {
                        "prop": "religion",
                        "relation": "=",
                        "value": "muslim"
                    }
                ],
                "minScale": 5000,
                "maxScale": 100,
                "style": {
                "symbol": "static/icons/gray/muslim.svg"
            }
            },
            {
                "name": "other religion",
                "rules": [
                    {
                        "prop": "religion",
                        "relation": "not in",
                        "value": ["muslim", "jewish", "christian"] 
                    },
                    {
                        "prop": "religion",
                        "relation": "is not null",
                        "style": {
                        "symbol": "static/icons/gray/place of worship.svg"
                    }
                    }
                ],
                "minScale": 5000,
                "maxScale": 100
            },
            {
                "name": "embassy",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "embassy"
                    }
                ],
                "minScale": 12000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Embassy.svg"
            }
            },
            {
                "name": "school",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "school"
                    }
                ],
                "minScale": 12000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/School.svg"
            }
            },
            {
                "name": "bank",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "bank"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Bank.svg"
            }
            },
            {
                "name": "border_control",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "border_control"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Border Control.svg"
            }
            },
            {
                "name": "government",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "government"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Government.svg"
            }
            },
            {
                "name": "hospital",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "hospital"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Hospital.svg"
            }
            },
            {
                "name": "police",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "police"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Police.svg"
            }
            },
            {
                "name": "taxi",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "taxi"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Taxi.svg"
            }
            },
            {
                "name": "university",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "university"
                    }
                ],
                "minScale": 30000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/University.svg"
            }
            },
            {
                "name": "fire_station",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "fire_station"
                    }
                ],
                "minScale": 60000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Fire Station.svg"
            }
            },
            {
                "name": "townhall",
                "rules": [
                    {
                        "prop": "amenity",
                        "relation": "=",
                        "value": "townhall"
                    }
                ],
                "minScale": 60000,
                "maxScale": 5000,
                "style": {
                "symbol": "static/icons/black/Townhall.svg"
            }
            }
        ]
    }
};

