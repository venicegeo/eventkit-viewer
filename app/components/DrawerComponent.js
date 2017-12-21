import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {closeDialog, openDialog} from '../actions/dialogActions';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Layers from 'material-ui/svg-icons/maps/layers';
import Close from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { ExpandableBottomSheet } from 'material-ui-bottom-sheet';
import { List, ListItem, Subheader, Tabs, Tab, FloatingActionButton, RaisedButton } from 'material-ui'
import fetch from 'isomorphic-fetch';

import * as mapActions from '@boundlessgeo/sdk/actions/map';

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
            drawer : false,
            dialogOpen: false,
            isOpen: false,
            value: 'a',
            selectedSource: '',
            editRow: -1,
            editRecord: {}
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

    handleOpen = () => {
        this.setState({dialogOpen: true});
    };

    handleClose = () => {
        this.setState({dialogOpen: false});
    };


    handleDialog() {
    this.setState({drawer:false, dialogOpen: true});
    }

    handleSheetOpen() {
        this.setState({drawer: false, isOpen: true});
    }

    handleSheetClose() {
        this.setState({isOpen: false});
    }

    handleDrawer() {
        if(this.state.drawer){
            this.setState({drawer: false});

        }
        else {
            this.setState({drawer: true});
        }
    }

    onMenuItemClick() {
        if(window.innerWidth < 1200) {
            this.handleToggle();
        }
    }

    handleTabChange = (value) => {
        this.setState({
            value: value
        });
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
            th.push(<th key={properties[i]}>{properties[i]}</th>);
        }
        return (<thead><tr>{th}</tr></thead>);
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
                        <EditField editRow={this.state.editRow === i} value={featureValue} onBlur={(evt) => this.updateFeature(evt.target.value, properties[j])}/>
                    </td>);
            }
            const editControls = (
                <div>
                    <a className='actionButton'>
                        <i className="fa fa-check" onClick={() => this.updateRow(i)}></i>
                    </a>
                    <a className='actionButton red'>
                        <i className="fa fa-times" onClick={() => this.setState({editRow: -1})}></i>
                    </a>
                </div>
            );
            row.push(<td key={properties.length + 1}>
                {this.state.editRow !== -1 || <i className="fa fa-pencil" onClick={() => this.setState({editRow: i})}></i>}
                {this.state.editRow !== i || editControls}
            </td>);
            // add the features properties to the list
            body.push(<tr key={i}>{row}</tr>);
            // Reset the row
            row = [];
        }
        // Return the body
        return (<tbody>{body}</tbody>);
    }


    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];


        const styles = {
            drawer: {
                width: '200px',
                height: '600px',
                marginTop: '130px',
                backgroundColor: '#4598bf',
                padding: '0px',
                background: 'rgba(69,152,191, .5)'
            },
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },

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
        <RaisedButton
            onClick={this.handleDrawer.bind(this)}
            backgroundColor="#4498c0"
            icon={<Layers style={{height:'16px', width:'16px', fill:'white', paddingBottom: '2px' }}/>}
            style={{margin: '12', position: 'absolute', zIndex: '3', top: '95px', left: '75px', height: '20px', maxHeight:'25px!important', minWidth:'40px!important', width:'40px'}}
        />

                    <Drawer
                        className={'qa-Application-Drawer'}
                        containerStyle={styles.drawer}
                        overlayStyle={styles.drawer}
                        docked={true}
                        open={this.state.drawer}
                    >
                        <List>
                            <Subheader style={{color:'white', fontSize:'20px'}}>Layers</Subheader>
                            <ListItem
                                style={{color:'white'}}
                                leftCheckbox={<Checkbox  iconStyle={{fill: 'white'}} />}
                                primaryText="Airports"
                            />
                            <ListItem
                                style={{color:'white'}}
                                leftCheckbox={<Checkbox iconStyle={{fill: 'white'}}/>}
                                primaryText="Police Stations"
                            />
                            <ListItem
                                style={{color:'white'}}
                                leftCheckbox={<Checkbox iconStyle={{fill:'white'}}/>}
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
                    backgroundColor='#ce4427'
                    onClick={this.handleSheetClose.bind(this)}>
                    <Close/>
                </FloatingActionButton>
            }
            onRequestClose={() => console.log('close')}
            open={this.state.isOpen}
        >

            <Tabs value={this.state.value}
                  tabItemContainerStyle={{backgroundColor:'#4598bf'}}
                  onChange={this.handleTabChange}
            >
                <Tab label="Airports" value="a">
                    <div className="feature-table">
                        <div className='table-header'>
                            <select className="input-control" name='key' value={this.state.selectedSource} onChange={(key) => this.setState({selectedSource: key.target.value})}>
                                <option value="">Select Source</option>
                                {layerIds}
                            </select>
                        </div>
                        <div className='table-content'>
                            <table>
                                {tableHeader}
                                {tableBody}
                            </table>
                        </div>
                    </div>
                </Tab>
                <Tab label="Police Stations" value="b">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
                <Tab label="Fire Stations" value="c">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab C</h2>
                        <p>
                            This is another example of a controllable tab. Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </ExpandableBottomSheet>
    </div>
</div>

        )
    }
}

DrawerComponent.propTypes = {
    dialog: PropTypes.bool,
};


function mapStateToProps(state) {
    return {
        dialog: state.dialog,
        map: state.map,
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
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);