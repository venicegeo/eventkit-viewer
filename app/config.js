export const Config = {
    "BASEMAP_URL": "/",
    "SOURCE_DATA": {
        "datapackName": "sanaa-osm-20180226.gpkg",
        "datapackUrl": "../static/data/osm/sanaa-osm-20180226.gpkg",
        "sources": [
            {
                "name": "OSM",
                "layers": [
                    {
                        "name": "atm",
                        "id": "atm_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bar",
                        "id": "bar_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bench",
                        "id": "bench_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bus_station",
                        "id": "bus_station_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "cafe",
                        "id": "cafe_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "car_fix",
                        "id": "car_fix_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "car_rental",
                        "id": "car_rental_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "casino",
                        "id": "casino_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "cinema",
                        "id": "cinema_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "college",
                        "id": "college_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "community_centre",
                        "id": "community_centre_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "courthouse",
                        "id": "courthouse_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "dentist",
                        "id": "dentist_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "doctors",
                        "id": "doctors_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "drinking_water",
                        "id": "drinking_water_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "fast_food",
                        "id": "fast_food_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "fuel",
                        "id": "fuel_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "kindergarten",
                        "id": "kindergarten_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "library",
                        "id": "library_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "pharmacy",
                        "id": "pharmacy_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "post_office",
                        "id": "post_office_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "pub",
                        "id": "pub_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "recycling",
                        "id": "recycling_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "restaurant",
                        "id": "restaurant_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "social_facility",
                        "id": "social_facility_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "telephone",
                        "id": "telephone_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "fire_station",
                        "id": "fire_station_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "townhall",
                        "id": "townhall_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bank",
                        "id": "bank_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "embassy",
                        "id": "embassy_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "school",
                        "id": "school_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "border_control",
                        "id": "border_control_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bus_stop",
                        "id": "bus_stop_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "government",
                        "id": "government_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hospital",
                        "id": "hospital_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "police",
                        "id": "police_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "taxi",
                        "id": "taxi_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "university",
                        "id": "university_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "theatre",
                        "id": "theatre_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "toilets",
                        "id": "toilets_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "arts_centre",
                        "id": "arts_centre_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "ngo",
                        "id": "ngo_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "grave_yard",
                        "id": "grave_yard_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "shower",
                        "id": "shower_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "studio",
                        "id": "studio_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "money_transfer",
                        "id": "money_transfer_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bureau_de_change",
                        "id": "bureau_de_change_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "beverages",
                        "id": "beverages_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hairdresser",
                        "id": "hairdresser_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "supermarket",
                        "id": "supermarket_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bakery",
                        "id": "bakery_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "mobile_phone",
                        "id": "mobile_phone_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "tailor",
                        "id": "tailor_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "car_parts",
                        "id": "car_parts_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "computer",
                        "id": "computer_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "clothes",
                        "id": "clothes_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "car_repair",
                        "id": "car_repair_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "funeral_directors",
                        "id": "funeral_directors_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "dry_cleaning",
                        "id": "dry_cleaning_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "butcher",
                        "id": "butcher_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "seafood",
                        "id": "seafood_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hardware",
                        "id": "hardware_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bicycle",
                        "id": "bicycle_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "motorcycle",
                        "id": "motorcycle_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "tyres",
                        "id": "tyres_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "photo",
                        "id": "photo_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "information",
                        "id": "information_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "camp_site",
                        "id": "camp_site_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "viewpoint",
                        "id": "viewpoint_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hostel",
                        "id": "hostel_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hotel",
                        "id": "hotel_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "museum",
                        "id": "museum_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "beach_resort",
                        "id": "beach_resort_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "playground",
                        "id": "playground_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "motel",
                        "id": "motel_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "craft",
                        "id": "craft_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "water_well",
                        "id": "water_well_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "water_tower",
                        "id": "water_tower_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "tower",
                        "id": "tower_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "storage_tank",
                        "id": "storage_tank_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "gambling",
                        "id": "gambling_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "waste_basket",
                        "id": "waste_basket_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "street_lamp",
                        "id": "street_lamp_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "fire_hydrant",
                        "id": "fire_hydrant_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "waste_disposal",
                        "id": "waste_disposal_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "christian",
                        "id": "christian_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "jewish",
                        "id": "jewish_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "muslim",
                        "id": "muslim_5000-100",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "other religion",
                        "id": "other religion_5000-100",
                        "table": "amenities_points",
                        "rules": [
                            {
                                "prop": "religion",
                                "relation": "not in",
                                "value": ["muslim", "jewish", "christian"] 
                            },
                            {
                                "prop": "religion",
                                "relation": "is not null",
                            }
                        ],
                        "minScale": 5000,
                        "maxScale": 100,
                        "style": {
                            "symbol": "static/icons/gray/place of worship.svg"
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "embassy",
                        "id": "embassy_12000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "school",
                        "id": "school_12000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "bank",
                        "id": "bank_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "border_control",
                        "id": "border_control_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "government",
                        "id": "government_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "hospital",
                        "id": "hospital_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "police",
                        "id": "police_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "taxi",
                        "id": "taxi_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "university",
                        "id": "university_30000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "fire_station",
                        "id": "fire_station_60000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
                    },
                    {
                        "name": "townhall",
                        "id": "townhall_60000-5000",
                        "table": "amenities_points",
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
                        },
                        "show": true,
                        "addToTable": true,
                        "features": null,
                        "geomType": "POINT"
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
    }
};

