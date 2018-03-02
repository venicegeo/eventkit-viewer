import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {closeDrawer, openDrawer} from '../../actions/drawerActions';
import {processFile, resetFile} from '../../actions/importActions';
import Drawer from 'material-ui/Drawer';
import Layers from 'material-ui/svg-icons/maps/layers';
import Close from 'material-ui/svg-icons/navigation/close';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import { ExpandableBottomSheet } from 'material-ui-bottom-sheet';
import { List, ListItem, Subheader, FloatingActionButton, RaisedButton } from 'material-ui';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';

import SearchLayers from './SearchLayers';
import DataPackCard from "./DataPackCard";
import DropZone from './DropZone';
import fetch from 'isomorphic-fetch';

import * as mapActions from '@boundlessgeo/sdk/actions/map';
import * as drawingActions from '@boundlessgeo/sdk/actions/drawing';
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

        this.handleLayerSort = this.handleLayerSort.bind(this);
        this.addLayerToMap = this.addLayerToMap.bind(this);
        this.removeLayerFromMap = this.removeLayerFromMap.bind(this);
        this.handleSheetOpen = this.handleSheetOpen.bind(this);
        this.toggleImportModal = this.toggleImportModal.bind(this);

        this.state = {
            dialogOpen: false,
            isOpen: false,
            value: 1,
            selectedSource: '',
            editRow: -1,
            editRecord: {},
            layers: [],
            selectValue: 1,
            expanded: false,
            layerSort: 1,
            showImportModal: false,
        }
    }

    checkLabel(rules, props) {
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

    sectionLayer(layer) {
        var labelSections = {
            "POINT": "point", "MULTIPOINT": "point",
            "LINESTRING": "line", "MULTILINESTRING": "line",
            "POLYGON": "polygon", "MULTIPOLYGON": "polygon",
        };
        const labels = Config.LABELS[labelSections[layer.geomType]];

        if (labels === undefined) return [layer];

        var sections = labels.map((label) => ({
            name: label.name || label.rules.value,
            features: layer.features.filter((feature) =>
                this.checkLabel(label.rules, feature.properties)
            ),
            geomType: layer.geomType,
            style: label.style
        })).filter((section) =>
            0 < section.features.length
        );

        return sections;
    }

    createAddLayer(name, features, geomType, style) {
        style = style || {};
        this.props.addSource(name, {
            type: 'geojson',

        });
        switch(geomType) {
            case 'LINESTRING':
            case 'MULTILINESTRING':
                this.props.addLayer({
                    id: name,
                    type: 'line',
                    source: name,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': style.color || '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        'line-width': style.width || 2,
                    },
                });
                break;
            case 'POLYGON':
            case 'MULTIPOLYGON':
                this.props.addLayer({
                    id: name,
                    type: 'fill',
                    source: name,
                    paint: {
                        'fill-color': style.color || '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        // '#'+Math.floor(Math.random()*0xffffff).toString(16),
                        'fill-opacity': style.opacity || 0.8,
                    },
                });
                break;
            case 'POINT':
            case 'MULTIPOINT':
            default:
                this.props.addLayer({
                    id: name,
                    type: 'symbol',
                    source: name,
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
        }
        this.props.addFeatures(name, features);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.importFile.newLayer && (this.props.importFile.newLayer === null ||
            nextProps.importFile.newLayer.name !== this.props.importFile.newLayer.name)) {

            var rawLayer = nextProps.importFile.newLayer;
            var splitLayers = this.sectionLayer(rawLayer);
            splitLayers.forEach((layer) => {
                this.createAddLayer(layer.name, layer.features, layer.geomType, layer.style);
            });
        }
    }

    componentDidMount() {

    }

    loadLayerData(sources) {
        let filePaths = [];
        sources.forEach((source) => {
            const layerArray = (source.layers);
            layerArray.forEach((layer) => {
                filePaths.push = layer.filepath.toString();
            })
            console.log(filePaths)
        });

    }
    componentWillUnmount() {

    };

    addLayerFromGeoJSON = (layer, sourceName) => {

            this.props.addLayer({
                id: layer.name,
                type: 'symbol',
                source: layer.name,
                metadata: {
                    'bnd:animate-sprite': {
                        src: layer.icon.iconUrl,
                        color: [255, 0, 0],
                        width: 30.5,
                        height: 32,
                        spriteCount: 1,
                    }
                },
                // layout: {
                //     'icon-image':layer.icon.iconUrl,
                // },
            });

            // Fetch URL
            fetch(layer.filepath)
                .then(
                    response => response.json(),
                    error => console.error('An error occured.', error),
                )
                // addFeatures with the features, source name
                .then(json => this.props.addFeatures(sourceName, json));
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
        this.setState({isOpen: true, selectedSource:layer.name});
    }

    handleSheetClose() {
        this.setState({isOpen: false});
    }

    zoomToFeature(feature){
        let coords = feature.geometry.coordinates;
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

    addLayerToMap(layer){
        this.props.setSprite(layer.icon.iconUrl);
        this.props.addSource(layer.name, {type: 'geojson'});
        this.addLayerFromGeoJSON(layer, layer.name);
    };

    removeLayerFromMap(layer){
        this.props.removeLayer(layer.name);
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
        const qgisUrl = Config.QGIS_URL;

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

                        <div>
                            <button className={'qa-ImportButton-button'} style={styles.importButton} onClick={this.toggleImportModal.bind(this, true)}>
                                <FileFileUpload className={'qa-ImportButton-FileFileUpload'}/>
                                <span className={'qa-ImportButton-span'} style={styles.importButtonText}>IMPORT</span>
                            </button>
                        </div>

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

                        <div>
                            <DataPackCard source={sourceConfig}
                                          onAddLayer={this.addLayerToMap}
                                          onRemoveLayer={this.removeLayerFromMap}
                                          onAttributeOpen={this.handleSheetOpen}/>
                        </div>

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
                    <DropZone
                        importFile={this.props.importFile}
                        showImportModal={this.state.showImportModal}
                        setImportModalState={this.toggleImportModal}
                        processFile={this.props.processFile}
                        resetFile={this.props.resetFile}
                    />
                </div>
        );
    }
}

DrawerComponent.propTypes = {
    dialog: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    importFile: PropTypes.object,
    processFile: PropTypes.func,
    resetFile: PropTypes.func,
    drawer: PropTypes.string,
    newLayer: PropTypes.object,
};


function mapStateToProps(state) {
    return {
        dialog: state.dialog,
        map: state.map,
        drawer: state.drawer,
        importFile: state.importFile,
    }
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
        addSource:(type, data) => {
            dispatch(mapActions.addSource(type, data))
        },
        setSprite:(url) => {
            dispatch(mapActions.setSprite(url))
        },
        processFile: (file) => {
            dispatch(processFile(file));
        },
        resetFile: () => {
            dispatch(resetFile());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);