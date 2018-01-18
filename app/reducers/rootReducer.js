import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux'
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import {drawerReducer} from './drawerReducer';


const rootReducer = combineReducers({
    map: SdkMapReducer,
    drawer: drawerReducer,
});

export default rootReducer;

