import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import SdkMap from '@boundlessgeo/sdk/components/map';
//import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import * as mapActions from '@boundlessgeo/sdk/actions/map';
import configureStore from './store/configureStore';
import logo from './images/eventkit-logo.1.png';
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// This will have webpack include all of the SDK styles.
// import '@boundlessgeo/sdk/stylesheet/sdk.scss';

/* eslint-disable no-underscore-dangle */
// const store = createStore(combineReducers({
//   map: SdkMapReducer,
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// applyMiddleware(thunkMiddleware));
const muiTheme = getMuiTheme({
    datePicker: {
        selectColor: '#253447',
    },
    flatButton: {
        textColor: '#253447',
        primaryTextColor: '#253447'
    },
});

const store = configureStore();

function main() {

  store.dispatch(mapActions.setMapName('Basic Map Example'));

  // Add an example from ArcGIS Online REST services.
  store.dispatch(mapActions.addSource('esri', {
    type: 'raster',
    crossOrigin: null,
    tiles: [
      // The {bbox-epsg-3857} is a misnomer in this case.
      // Mapbox GL Style spec does not outline specifying {bbox-epsg-4326}
      // or {bbox} for native map coordiantes as it does not appear to consider
      // rendering maps in projections other than EPSG:3857.
      // 'https://server.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/export?bbox={bbox-epsg-3857}&bboxSR=&layers=&layerDefs=&size=&imageSR=&format=png&transparent=false&f=image'
      'https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/World/MODIS/ImageServer/exportImage?bbox={bbox-epsg-3857}&pixelType=U8&f=image',
    ],
  }));

  // This layer is what is presented from the 'esri' source.
  store.dispatch(mapActions.addLayer({
    id: 'esri',
    source: 'esri',
    type: 'raster',
  }));

  // 'geojson' sources allow rendering a vector layer
  // with all the features stored as GeoJSON. "data" can
  // be an individual Feature or a FeatureCollection.
  store.dispatch(mapActions.addSource('points', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0],
      },
      properties: {
        title: 'Null Island',
      },
    },
  }));
    const styles = {
        appBar: {
            backgroundColor: 'black',
            height: '70px',

        },
        img: {
            position: 'absolute',
            left: '50%',
            marginLeft: '-127px',
            marginTop: '10px',
            height: '50px'
        },
    }
    const img = <img style={styles.img} src={logo}/>

  // place the map on the page.
  ReactDOM.render(<Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
    <SdkMap projection="EPSG:4326">
        <AppBar
            className={'qa-Application-AppBar'}
            style={styles.appBar}
            title={img}
            showMenuIconButton={false}
        />
    </SdkMap>
      </MuiThemeProvider>
  </Provider>, document.getElementById('map'));
}

main();