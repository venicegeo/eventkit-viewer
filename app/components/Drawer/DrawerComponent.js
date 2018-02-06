import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {closeDrawer, openDrawer} from '../../actions/drawerActions';
import Drawer from 'material-ui/Drawer';
import Layers from 'material-ui/svg-icons/maps/layers';
import Close from 'material-ui/svg-icons/navigation/close';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import { ExpandableBottomSheet } from 'material-ui-bottom-sheet';
import { List, ListItem, Subheader, FloatingActionButton, RaisedButton } from 'material-ui';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import SearchLayers from './SearchLayers';
import DataPackCard from "./DataPackCard";
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
        }
    }

    componentWillReceiveProps(nextProps) {

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


    render() {
        const styles = {
            drawerContainer: {
                marginTop: '25px',
                backgroundColor: '#4598bf',
                padding: '0px',
                background: 'white'
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
                color:'black'
            },
            checkbox: {
                fill:'black',
            },
            layersButtonIcon: {
                height:'16px',
                width:'16px',
                fill:'white',
                paddingBottom: '2px'
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
                width:'25px'
            },
            layersDrawerButton: {
                height:'30px',
                marginLeft:'10px',
                width:'50px'
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
                <div>
                    <Drawer
                        className={'qa-Application-Drawer'}
                        width={'20%'}
                        overlayStyle={styles.drawerContainer}
                        containerStyle={styles.drawerContainer}
                        docked={true}
                        open={this.props.drawer === 'open'}
                        >

                        <div >
                            <div style={{display:'inline-block', paddingLeft:'15px',}}>
                                <Layers style={styles.layersDrawerIcon}/>
                                <Subheader style={styles.subHeader}>LAYERS</Subheader>
                            </div>
                            {/*<div style={{display:'inline-block', float: 'right', bottom: 0, marginTop: '10px',}}>*/}
                                {/*<LayersSortDropDown value={this.state.layerSort} handleChange={this.handleLayerSort}/>*/}
                            {/*</div>*/}
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
                        bodyStyle={{marginTop:'500px', maxHeight:'300px'}}
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
            </div>
        )
    }
}

DrawerComponent.propTypes = {
    dialog: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    drawer: PropTypes.string,
};


function mapStateToProps(state) {
    return {
        dialog: state.dialog,
        map: state.map,
        drawer: state.drawer,
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
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);