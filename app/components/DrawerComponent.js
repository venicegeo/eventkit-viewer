import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {closeDrawer, openDrawer} from '../actions/drawerActions';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Layers from 'material-ui/svg-icons/maps/layers';
import Close from 'material-ui/svg-icons/navigation/close';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import { ExpandableBottomSheet } from 'material-ui-bottom-sheet';
import { List, ListItem, Subheader, FloatingActionButton, RaisedButton } from 'material-ui'
import fetch from 'isomorphic-fetch';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


import * as mapActions from '@boundlessgeo/sdk/actions/map';
import * as drawingActions from '@boundlessgeo/sdk/actions/drawing';

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

        this.state = {
            dialogOpen: false,
            isOpen: false,
            value: 'a',
            selectedSource: '',
            editRow: -1,
            editRecord: {},
            layers: [],
            selectValue: 1,
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        const url = '../app/data/airports.json';
        this.addLayerFromGeoJSON(url, 'dynamic-source');
    }

    componentWillUnmount() {

    };

    addLayerFromGeoJSON = (url, sourceName) => {
            this.props.addLayer({
                id: 'dynamic-layer',
                type: 'symbol',
                source: 'dynamic-source',
                layout: {
                    'text-font': [
                        'FontAwesome normal',
                    ],
                    'text-size': 18,
                    'icon-optional': true,
                    // airplane icon
                    'text-field': '\uf072',
                },
                paint: {
                    'text-color': 'red',
                },
            });

            // Fetch URL
            fetch(url)
                .then(
                    response => response.json(),
                    error => console.error('An error occured.', error),
                )
                // addFeatures with the features, source name
                .then(json => this.props.addFeatures(sourceName, json));
        };


    handleSheetOpen() {
        this.props.closeDrawer();
        this.setState({isOpen: true, selectedSource:'dynamic-source'});
    }

    handleSheetClose() {
        this.setState({isOpen: false});
    }

    zoomToFeature(feature){
        let coords = feature.geometry.coordinates;
        this.props.setView(coords, 12)
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
        return (<thead><tr style={{height: '20px', fontSize:'16px', width:'100%', paddingLeft:'10px', paddingRight:'10px'}}>{th}</tr></thead>);
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
                    <td style={{width:'13%'}} key={j}>
                        <EditField editRow={this.state.editRow === i} value={featureValue} onBlur={(evt) => this.updateFeature(evt.target.value, properties[j])}/>
                    </td>);
            }


            row.push(<td style={{width:'25px'}}>
                <a>
                <ZoomIn style={{fill:'#4598bf'}} onClick={() => this.zoomToFeature(features[i])}></ZoomIn>
                </a>
            </td>)
            // add the features properties to the list
            body.push(<tr style={{width:'100%', fontSize:'14px'}} key={i}>{row}</tr>);
            // Reset the row
            row = [];
        }
        // Return the body
        return (<tbody>{body}</tbody>);
    }

    onChangeCheck(e) {
        // current array of providers
        const layers = this.state.layers;

        let index;
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the provider to the array
            layers.push(e.target.name);
            this.setState({layers})

        } else {
            // or remove the value from the unchecked checkbox from the array
            index = layers.map(x => x.name).indexOf(e.target.name);
            layers.splice(index, 1);
            this.setState({layers})
        }
    }


    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem>menu 1</MenuItem>
                <MenuItem>menu 2</MenuItem>
                <MenuItem>menu 3</MenuItem>
            </IconMenu>
        );


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

            }

        };
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
                        <List>
                            <div>
                                <Layers style={styles.layersDrawerIcon}/>
                                <Subheader style={styles.subHeader}> Layers</Subheader>
                                <RaisedButton
                                    style={{marginLeft:'10px', height:'25px', width:'80px', maxHeight:'25px!important', minWidth:'80px!important'}}
                                    onClick={this.handleSheetOpen.bind(this)}
                                    backgroundColor="#4598bf"
                                    label="IMPORT"
                                    labelStyle={{color:'white', fontWeight:'bold', fontSize:'12px', paddingBottom:'5px', textAlign:'middle', paddingLeft:'0px!important', paddingRight:'0px!important'}}
                                />
                            </div>
                            <ListItem
                                style={styles.listItem}

                                leftCheckbox={<Checkbox name="Airports" onCheck={this.onChangeCheck.bind(this)} iconStyle={styles.checkbox} />}
                                primaryText="Airports"
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        rightIconButton={rightIconMenu}
                                        primaryText="Terminal A"
                                        leftCheckbox={<Checkbox name="Airports1" onCheck={this.onChangeCheck.bind(this)} iconStyle={styles.checkbox} />}

                                    />,
                                    <ListItem
                                        key={2}
                                        primaryText="Terminal B"
                                        leftCheckbox={<Checkbox name="Airports2" onCheck={this.onChangeCheck.bind(this)} iconStyle={styles.checkbox} />}
                                    />,

                                ]}

                            />
                            <ListItem
                                style={styles.listItem}
                                leftCheckbox={<Checkbox name='Police Stations' onCheck={this.onChangeCheck.bind(this)} iconStyle={styles.checkbox} />}
                                primaryText="Police Stations"
                            />
                            <ListItem
                                style={styles.listItem}
                                leftCheckbox={<Checkbox name="Fire Stations" onCheck={this.onChangeCheck.bind(this)} iconStyle={styles.checkbox} />}
                                primaryText="Fire Stations"
                            />
                        </List>
                        <RaisedButton
                            style={{marginTop:'50px', marginLeft:'50px'}}
                            onClick={this.handleSheetOpen.bind(this)}
                            backgroundColor="#4598bf"
                            label="Update Table"
                            labelStyle={{color:'white'}}
                        />
                    </Drawer>
                 <div>
                    <ExpandableBottomSheet
                        bodyStyle={{marginTop:'600px'}}
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
                        Airports
                    </div>

                    <div className="feature-table">

                        <div className='table-content'>
                            <table style={{width:'95%', paddingLeft:'10px'}}>
                                {tableHeader}
                                {tableBody}
                            </table>
                        </div>
                    </div>
                    </ExpandableBottomSheet>
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
        closeDrawer: () => {
            dispatch(closeDrawer());
        },
        openDrawer: () => {
            dispatch(openDrawer());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);