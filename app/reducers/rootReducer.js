import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux'
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import {drawerReducer} from './drawerReducer';
import {importFileReducer} from './importFileReducer';


const rootReducer = combineReducers({
    map: SdkMapReducer,
    drawer: drawerReducer,
    importFile: importFileReducer,
});

export default rootReducer;

