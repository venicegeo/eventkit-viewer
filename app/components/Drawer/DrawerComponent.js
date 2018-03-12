import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {closeDrawer, openDrawer} from '../../actions/drawerActions';
// import {loadLayer} from '../../actions/loadActions';
import Drawer from 'material-ui/Drawer';
import Layers from 'material-ui/svg-icons/maps/layers';
import Close from 'material-ui/svg-icons/navigation/close';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import { ExpandableBottomSheet } from 'material-ui-bottom-sheet';
import { List, ListItem, Subheader, FloatingActionButton, RaisedButton } from 'material-ui';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import Geopackage from '@ngageoint/geopackage'
import * as mapActions from '@boundlessgeo/sdk/actions/map';
import * as drawingActions from '@boundlessgeo/sdk/actions/drawing';
import XYZ from 'ol/source/xyz';
import Tile from 'ol/layer/tile';

import SearchLayers from './SearchLayers';
import DataPackCard from "./DataPackCard";
import DropZone from './DropZone';
import fetch from 'isomorphic-fetch';
import CustomScrollbar from '../CustomScrollbar';


import { Config } from '../../../app/config.js'

import {INTERACTIONS} from '@boundlessgeo/sdk/constants';



export class EditField extends React.Component {
    render() {
        // If row is edited return input
        if (this.props.editRow) {
            return (<input type="text" placeholder={this.props.value} onBlur={this.props.onBlur}/>);
        } else {
            return (<span>{this.props.value}</span>);
        }
    }
}


export class DrawerComponent extends Component {
    constructor(props) {
        super(props);

        let sourceConfig = Config.SOURCE_DATA;

        this.handleLayerSort = this.handleLayerSort.bind(this);
        this.addLayerToMap = this.addLayerToMap.bind(this);
        this.removeLayerFromMap = this.removeLayerFromMap.bind(this);
        this.handleSheetOpen = this.handleSheetOpen.bind(this);
        this.toggleImportModal = this.toggleImportModal.bind(this);


        // Preload gpkgs
        var sources = {};
        sourceConfig.sources.map(source => {
            sources[source.name] = fetch(source.url).then(response => {
                return response.blob();
            }).then(blob => new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = resolve;
                reader.readAsArrayBuffer(blob);
            })).then(e => {
                var arrayBuffer = e.currentTarget.result;
                var array = new Uint8Array(arrayBuffer);
                return new Promise((resolve, reject) => {
                    Geopackage.openGeoPackageByteArray(array, function(err, gpkg) {
                        if (err) return reject(err);
                        resolve(gpkg);
                    });
                });
            });
        });

        this.state = {
            dialogOpen: false,
            isOpen: false,
            value: 1,
            selectedSource: '',
            editRow: -1,
            editRecord: {},
            sources: sources,
            selectValue: 1,
            expanded: false,
            layerSort: 1,
            showImportModal: false,
        };
    }

    checkRules(rules, props) {
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

    loadLayer(layer, source) {
        var self = this;

        if (layer.features || layer.retriever) {
            // Layer was already loaded; use existing data
            return new Promise(resolve => resolve(layer));
        }

        // var namesPromise = gpkgPromise.then((gpkg) => {
        //     return new Promise((resolve, reject) => {
        //         gpkg.getFeatureTables(function(err, featureTableNames) {
        //             if (err) return reject(err);
        //             resolve(featureTableNames);
        //         });
        //     });
        // });

        const gpkgPromise = this.state.sources[source.name];
        const name = layer.table;

        var daoPromise = gpkgPromise.then(gpkg => new Promise((resolve, reject) => {
            var getDao = layer.type === 'RASTER'
                ? gpkg.getTileDaoWithTableName.bind(gpkg)
                : gpkg.getFeatureDaoWithTableName.bind(gpkg);

            getDao(name, function(err, dao) {
                if (err) return reject(err);
                resolve(dao);
            });
        }));
        var tableInfoPromise = Promise.all([gpkgPromise, daoPromise]).then(
            ([gpkg, dao]) => new Promise((resolve, reject) => {
                gpkg.getInfoForTable(dao, (err, info) => {
                    if (err) return reject(err);
                    resolve(info);
                });
            })
        );
        return Promise.all([daoPromise, tableInfoPromise]).then(([dao, tableInfo]) => {
            return new Promise((resolve, reject) => {
                switch(layer.type) {
                    case 'RASTER': {
                        const tms = dao.tileMatrixSet;
                        const tm = dao.getTileMatrixWithZoomLevel(Config.DEFAULT_ZOOM);
                        // const tileGrid = ol.tilegrid.createXYZ({
                        //     minZoom: dao.minZoom,
                        //     maxZoom: dao.maxZoom,
                        //     extent: [tms.min_x, tms.min_y, tms.max_x, tms.max_y],
                        //     tileSize: [tm.tile_width, tm.tile_height],
                        // });
                        const retriever = new Geopackage.GeoPackageTileRetriever(dao, tm.tile_width, tm.tile_height);
                        resolve({ id: layer.id, retriever: retriever });
                        break;
                    }
                    default: {
                        var features = [];
                        dao.queryForEach(function(err, row, rowDone) {
                            var feature = dao.getFeatureRow(row);
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
                            if (self.checkRules(layer.rules, geojson.properties)) {
                                features.push(geojson);
                            }
                            rowDone();
                        }, function() { // table finished
                            // var geomType = tableInfo.geometryColumns ?
                            //     tableInfo.geometryColumns.geometryTypeName :
                            //     "POINT";
                            var newLayer = { id: layer.id, features: features };
                            resolve(newLayer);
                        });
                    }
                }
            });
        });
        return promise;
    }

    createAddLayer(layer, source) {
        let {id, style, type, features} = layer;
        style = style || {};

        const addFeatures = () => {
            this.loadLayer(layer, source).then((loadedLayer) => {
                this.props.addFeatures(loadedLayer.id, loadedLayer.features);
            }, (err) => {
                console.log("Error loading layer "+layer.id+": "+err);
            });
        };

        switch(type) {
            case 'LINESTRING':
            case 'MULTILINESTRING':
                this.props.addSource(id, { type: 'geojson' });
                this.props.addLayer({
                    id: id,
                    type: 'line',
                    source: id,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': style.color || '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        'line-width': style.width || 2,
                    },
                });
                addFeatures();
                break;
            case 'POLYGON':
            case 'MULTIPOLYGON':
                this.props.addSource(id, { type: 'geojson' });
                this.props.addLayer({
                    id: id,
                    type: 'fill',
                    source: id,
                    paint: {
                        'fill-color': style.color || '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        // '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        'fill-opacity': style.opacity || 0.8,
                    },
                });
                addFeatures();
                break;
            case 'POINT':
            case 'MULTIPOINT':
            default:
                this.props.addSource(id, { type: 'geojson' });
                this.props.addLayer({
                    id: id,
                    type: 'symbol',
                    source: id,
                    metadata: {
                        'bnd:animate-sprite': {
                            src: style.symbol || "app/data/icons/generic-pt.svg",
                            color: style.color || [0, 0, 0], // [0,0,0].map(() => Math.floor(Math.random()*255)),
                            width: 30.5,
                            height: 32,
                            spriteCount: 1,
                        }
                    },
                });
                addFeatures();
                break;
            case 'RASTER':
                this.loadLayer(layer, source).then(loadedLayer => {
                    // this.props.addSource(id, new XYZ({
                    //     tileUrlFunction: tileCoord => tileCoord.toString(),
                    //     tileLoadFunction: (tile, url) => {
                    //         var tileCoord = url.split(',');
                    //         var tileX = parseInt(tileCoord[1]);
                    //         var tileY = -tileCoord[2] - 1;
                    //         loadedLayer.retriever.getTile(tileX, tileY, zoom, (err, dataUrl) => {
                    //             tile.getImage().src = dataUrl;
                    //         });
                    //     },
                    // }));
                    // var tileLayer = new Tile({
                    //     id: id,
                    //     type: 'raster',
                    //     source:
                    // });
                    let canvas = document.getElementById(layer.name);
                    if (canvas === null) {
                        canvas = document.createElement('canvas');
                        canvas.setAttribute('id', layer.name);
                    }
                    this.props.addSource({
                        id: id,
                        canvas: layer.name,
                        coordinates: [],
                    });
                    this.props.addLayer({
                        id: id,
                        type: 'raster',
                        source: id,
                    });
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.layers === undefined)
        //     return;
        // this.props.layers.map((layer) => {
        //     let nextLayer = nextProps.layers.find((nextLayer) => nextLayer.id === layer.id);
        //     if (layer.features !== null || nextLayer.features === null)
        //         return;
        //     if (nextLayer.show)
        //         this.props.addFeatures(nextLayer.id, nextLayer.features);
        // });
    };

    componentDidMount() {
        this.props.setView(Config.DEFAULT_CENTER, Config.DEFAULT_ZOOM);
    };

    componentWillUnmount() {

    };

    handleDrawer() {
        setTimeout( () => window.dispatchEvent(new Event('resize')), 500);//HACK TO RESIZE MAP AFTER THE DRAWER OPENS/CLOSES

        if (this.props.drawer === 'open') {
            this.props.closeDrawer();
        }
        else {
            this.props.openDrawer();
        }
    }

    handleSheetOpen(layer) {
        this.props.closeDrawer();
        setTimeout( () => window.dispatchEvent(new Event('resize')), 500);//HACK TO RESIZE MAP AFTER THE DRAWER OPENS/CLOSES
        this.setState({isOpen: true, selectedSource:layer.id});
    }

    handleSheetClose() {
        this.setState({isOpen: false});
    }

    zoomToFeature(feature){
        let coords = feature.coordinates;
        this.props.setView(coords, 18)
    }

    // Next few functions are all about building the feature Table
    // Read the source and get all the possible properties
    getTableHeaders(sourceName) {
        if (sourceName === '') {
            return [];
        }
        const features = this.props.map.sources[sourceName].data.features;
        const headers = [];
        // Loop over features
        for (let i = 0, ii = features.length; i < ii; i++) {
            // Build a list of unique properties for the header list
            const temp = Object.keys(features[i].properties);
            for (let j = 0, jj = temp.length; j < jj; j++) {
                // if the feature.properties is new add it to headers
                if (headers.indexOf(temp[j]) < 0) {
                    headers.push(temp[j]);
                }
            }
        }
        return headers;
    }

    // Build out the headers based on supplied list of properties
    buildTableHeader(properties) {
        const th = [];
        if (properties.length === 0) {
            return;
        }
        for (let i = 0, ii = properties.length; i < ii; i++) {
            th.push(<th style={{textAlign:'left'}} key={properties[i]}>{properties[i]}</th>);
        }
        return (<thead><tr style={{height: '20px', fontSize:'13px', width:'100%'}}>{th}</tr></thead>);
    }

    updateRow(rowNumber) {
        // Get feature from State using rowNumber
        const feature = this.props.map.sources[this.state.selectedSource].data.features[rowNumber];

        // Get properties of the features and editted properties from local state
        const properties = Object.assign({}, feature.properties, this.state.editRecord);

        // Build a new feature using the properties
        const newFeature = Object.assign({}, feature, {properties});

        // Get the keys from properties
        var keys = Object.keys(feature.properties);

        // Build a filter for feature to remove
        var filter = keys.map((key) => ['==', key, feature.properties[key]]);

        // Add all to begining of filter to test all CONDITIONS
        // See https://www.mapbox.com/mapbox-gl-js/style-spec/#types-filter.
        filter.unshift('all');

        // Remove the old feature
        this.props.removeFeature(this.state.selectedSource, filter);

        // Add a new feature, function take an array of features
        this.props.addFeature(this.state.selectedSource, [newFeature], rowNumber);

        // Reset local state
        this.setState({editRow: -1, editRecord: {}});
    }

    updateFeature(value, key) {
        if (value !== '') {
            this.setState({editRecord:
                Object.assign({}, this.state.editRecord, {[key]: value})});
        }
    }
    // Build the body of the table based on list of properties and source store in redux store
    buildTableBody(properties, sourceName) {
        const body = [];
        let row = [];
        // Get all the features from the Redux store
        if (sourceName === '') {
            return false;
        }
        const features = this.props.map.sources[sourceName].data.features;
        // Loop over features
        for (let i = 0, ii = features.length; i < ii; i++) {
            // Loop over properties
            for (let j = 0, jj = properties.length; j < jj; j++) {
                // Build list of properties for each feature
                const featureValue = features[i].properties[properties[j]];
                row.push(
                    <td key={j}>
                        {featureValue}
                        {/*<EditField editRow={this.state.editRow === i} value={featureValue} onBlur={(evt) => this.updateFeature(evt.target.value, properties[j])}/>*/}
                    </td>);
            }


            row.push(<td style={{width:'25px'}}>
                <a>
                <ZoomIn style={{fill:'#4598bf'}} onClick={() => this.zoomToFeature(features[i])}></ZoomIn>
                </a>
            </td>)
            // add the features properties to the list
            body.push(<tr style={{width:'100%', fontSize:'12px'}} key={i}>{row}</tr>);
            // Reset the row
            row = [];
        }
        // Return the body
        return (<tbody>{body}</tbody>);
    }

    handleLayerSort(event, index, value){
        this.setState({layerSort: value})
    }

    addLayerToMap(layer, url){
        this.props.setSprite(layer.style.symbol);
        this.props.addSource(layer.id, {type: 'geojson'});
        this.createAddLayer(layer, url);
    };

    removeLayerFromMap(layer){
        this.props.removeLayer(layer.id);
    };

    toggleImportModal(show) {
        if (show != undefined) {
            this.setState({ showImportModal: show });
        }
        else {
            this.setState({ showImportModal: !this.state.showImportModal });
        }
    };


    render() {
        const styles = {
            drawerContainer: {
                marginTop: '25px',
                backgroundColor: '#4598bf',
                padding: '0px',
                background: 'white',
                width:'300px',
                overflow:'hidden',
                paddingBottom: '125px',
            },
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
            subHeader: {
                color:'black',
                fontSize:'20px',
                width:'75%!important',
                display:'inline-block',
            },
            listItem: {
                color:'black',
            },
            checkbox: {
                fill:'black',
            },
            layersButtonIcon: {
                height:'16px',
                width:'16px',
                fill:'white',
                paddingBottom: '2px',
            },
            layersDrawerIcon: {
                height:'30px',
                width:'30px',
                fill:'black',
                display:'inline-block',
                verticalAlign:'middle',
            },
            layersButton: {
                margin: '12',
                position: 'absolute',
                zIndex: '3',
                top: '10px',
                left: '10px',
                height: '20px',
                maxHeight:'25px!important',
                minWidth:'40px!important',
                width:'25px',
            },
            layersDrawerButton: {
                height:'30px',
                marginLeft:'10px',
                width:'50px',
            },
            layersIcon: {
                color:'#4598bf',
                fill:'#4598bf',
                cursor:'pointer',
            },
            importButton: {
                border: 'none',
                marginTop: '10px',
                marginLeft: '10px',
                padding: '5px',
                backgroundColor: '#fff',
                outline: 'none',
            },
            importButtonText: {
                color: '#4498c0',
                position: 'absolute',
                marginTop: '5px',
                fontSize: '1.3em',
                fontWeight: 'bold',
            },
        };

        const attributeTableName = this.state.selectedSource;
        // Get full list of properties
        const propertyList = this.getTableHeaders(this.state.selectedSource);

        // // Build table header
        const tableHeader = this.buildTableHeader(propertyList);
        // // Build table body
        const tableBody = this.buildTableBody(propertyList, this.state.selectedSource);

        const layerIds = this.props.map.layers.map((value, key) => {
            const source = this.props.map.sources[value.source];
            // Check for a source related to layer, and if source is of type geojson
            // Example can only render table data for geojson sources
            if (source && source.type === 'geojson') {
                return (<option key={key} value={ value.source }>{ value.id }</option>);
            }
            return null;
        });

        const sourceConfig = Config.SOURCE_DATA;

        return (
                <div style={{overflow:'hidden'}}>
                    <Drawer
                        className={'qa-Application-Drawer'}
                        width={300}
                        overlayStyle={styles.drawerContainer}
                        containerStyle={styles.drawerContainer}
                        docked={true}
                        open={this.props.drawer === 'open'}
                        >

                        {/*<div>
                            <button className={'qa-ImportButton-button'} style={styles.importButton} onClick={this.toggleImportModal.bind(this, true)}>
                                <FileFileUpload className={'qa-ImportButton-FileFileUpload'}/>
                                <span className={'qa-ImportButton-span'} style={styles.importButtonText}>IMPORT</span>
                            </button>
                        </div>*/}

                        <div >
                            <div style={{display:'inline-block', paddingLeft:'15px',}}>
                                <Layers style={styles.layersDrawerIcon}/>
                                <Subheader style={styles.subHeader}>LAYERS</Subheader>
                            </div>
                            <div style={{display:'inline-block', float: 'right', bottom: 0, marginTop: '10px', marginRight:'10px'}}>
                                <ArrowBack onTouchTap={this.handleDrawer.bind(this)} style={styles.layersIcon} />
                            </div>

                        </div>
                        <div>
                            <SearchLayers/>
                        </div>

                        {/*<div>*/}
                            {/*<SelectedLayerCount/>*/}
                        {/*</div>*/}

                        <CustomScrollbar>
                            <DataPackCard source={sourceConfig}
                                          onAddLayer={this.addLayerToMap}
                                          onRemoveLayer={this.removeLayerFromMap}
                                          onAttributeOpen={this.handleSheetOpen}/>
                        </CustomScrollbar>

                    </Drawer>
                    <div>
                        <ExpandableBottomSheet
                            className={"expandable-sheet"}
                            bodyStyle={{marginTop:'500px', marginBottom:'25px'}}
                            action={
                                <FloatingActionButton
                                    backgroundColor='red'
                                    onClick={this.handleSheetClose.bind(this)}>
                                    <Close/>
                                </FloatingActionButton>
                            }
                            onRequestClose={() => console.log('close')}
                            open={this.state.isOpen}
                        >
                        <div style={{height:'25px', padding:'10px', backgroundColor:'#e2e2e2', fontSize:'18px' }}>
                            {attributeTableName}
                        </div>

                        <div className="feature-table">

                            <div className='table-content'>
                                <table style={{width:'95%', paddingLeft:'10px'}}>
                                    {tableHeader}
                                    {tableBody}
                                </table>
                            </div>
                        </div>
                        </ExpandableBottomSheet >
                    </div>
                    {/*<DropZone
                        importFile={this.props.importFile}
                        showImportModal={this.state.showImportModal}
                        setImportModalState={this.toggleImportModal}
                        processFile={this.props.processFile}
                        resetFile={this.props.resetFile}
                    />*/}
                </div>
        );
    }
}

DrawerComponent.propTypes = {
    dialog: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    // loadLayer: PropTypes.func,
    drawer: PropTypes.string,
    layers: PropTypes.object,
};


function mapStateToProps(state) {
    return {
        dialog: state.dialog,
        map: state.map,
        drawer: state.drawer,
        layers: state.layers,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        removeFeature: (sourceName, filter) => {
            dispatch(mapActions.removeFeatures(sourceName, filter));
        },
        addFeature: (sourceName, filter, position) => {
            dispatch(mapActions.addFeatures(sourceName, filter, position));
        },
        addLayer: (info) => {
            dispatch(mapActions.addLayer(info));
        },
        addFeatures: (sourceName, json) => {
            dispatch(mapActions.addFeatures(sourceName, json));
        },
        setView: (center, zoom) => {
            dispatch(mapActions.setView(center, zoom));
        },
        removeLayer: (layerId) => {
            dispatch(mapActions.removeLayer(layerId));
        },
        closeDrawer: () => {
            dispatch(closeDrawer());
        },
        openDrawer: () => {
            dispatch(openDrawer());
        },
        // loadLayer: (layer) => {
        //     dispatch(loadLayer(layer));
        // },
        addSource:(type, data) => {
            dispatch(mapActions.addSource(type, data))
        },
        setSprite:(url) => {
            dispatch(mapActions.setSprite(url))
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);