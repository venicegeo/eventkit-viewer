import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as mapActions from '@boundlessgeo/sdk/actions/map';
import logo from './../images/eventkit-logo.1.png';
import SdkMap from '@boundlessgeo/sdk/components/map';
import SdkZoomControl from '@boundlessgeo/sdk/components/map/zoom-control';
import SdkZoomSlider from '@boundlessgeo/sdk/components/map/zoom-slider';
import DrawerComponent from './../components/DrawerComponent';
import TableComponent from './../components/TableComponent';
import SearchBar from './../components/SearchBar';
import fetch from 'isomorphic-fetch';
import mapCss from './../styles/map.css'
import SelectFeature from './../components/SelectFeature';

window.mapActions = mapActions;

export class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.setView([-93, 45], 2.5);
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

        const styles = {
            content: {
                left: ((this.props.drawer === 'open') && window.innerWidth) >= 1200 ? 200 : 0
            }
        }
        //const img = <img style={{position: 'absolute', left: '0px', marginTop: '25px', height: '50px'}}
                        // src={logo}/>

        const map = {center: [0, 0], zoom: 15, bearing: 0, metadata: {}, layers: [], sources: {}, sprite: undefined}


        return (
        <div id="map" style={styles.content} >
            <SdkMap map={map} className={mapCss.sdkMap} >

                {/*<img style={{*/}
                    {/*zIndex: '3',*/}
                    {/*height: '50px',*/}
                    {/*position: 'absolute',*/}
                    {/*top: '20px',*/}
                    {/*left: '5px'*/}
                {/*}} src={logo}/>*/}

                <SdkZoomControl/>
                <SearchBar store={this.props.store}/>
                <SelectFeature store={this.props.store}/>
                <DrawerComponent store={this.props.store}/>
                <TableComponent store={this.props.store}/>
            </SdkMap>
</div>
        )
    }
}
Map.propTypes = {

};



function mapStateToProps(state) {
    return {
        map: state.map,
        drawer: state.drawer,
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
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map);