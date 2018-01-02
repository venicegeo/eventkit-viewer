import {combineReducers} from 'redux';
//import { routerReducer } from 'react-router-redux'
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';
import {dialogReducer} from './dialogReducer';


const rootReducer = combineReducers({
    map: SdkMapReducer,
    dialog: dialogReducer,
});

export default rootReducer;

