import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux'
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import {drawerReducer} from './drawerReducer';
import {loadDataReducer} from './loadDataReducer';


const rootReducer = combineReducers({
    map: SdkMapReducer,
    drawer: drawerReducer,
    loadData: loadDataReducer,
});

export default rootReducer;

