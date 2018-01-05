import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as mapActions from '@boundlessgeo/sdk/actions/map';
import logo from './../images/eventkit-logo.1.png';
import SdkMap from '@boundlessgeo/sdk/components/map';
import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
import DrawerComponent from './../components/DrawerComponent';
import TableComponent from './../components/TableComponent';
import SearchBar from './../components/SearchBar';
import fetch from 'isomorphic-fetch';
import mapCss from './../styles/map.css'


export class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.setView([-93, 45], 2);
        this.props.addSource('osm', {
            type: 'raster',
            tileSize: 256,
            tiles: [
                'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
            ],
        });
        this.props.addLayer({
            id: 'osm',
            source: 'osm',
            type: 'raster',
        });
        this.props.addSource('dynamic-source', {type: 'geojson'});

    }

    componentWillUnmount() {

    };



    render() {
        const img = <img style={{position: 'absolute', marginLeft: '0px', marginTop: '25px', height: '50px'}}
                         src={logo}/>

        const map = {center: [0, 0], zoom: 15, bearing: 0, metadata: {}, layers: [], sources: {}, sprite: undefined}


        return (

            <SdkMap map={map} style={mapCss.sdkMap}>

                <img style={{
                    zIndex: '3',
                    height: '50px',
                    position: 'absolute',
                    marginTop: '20px',
                    marginLeft: '5px'
                }} src={logo}/>

                <SdkZoomControl />
                <SearchBar store={this.props.store}/>
                <DrawerComponent store={this.props.store}/>
                <TableComponent store={this.props.store}/>
            </SdkMap>
        )
    }
}
Map.propTypes = {

};



function mapStateToProps(state) {
    return {
        map: state.map,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setView: (center, zoom) => {
            dispatch(mapActions.setView(center, zoom))
        },
        addSource:(type, data) => {
            dispatch(mapActions.addSource(type, data))
        },
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map);