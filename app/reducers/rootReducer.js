import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import SdkMapReducer from '@boundlessgeo/sdk/reducers/map';


const rootReducer = combineReducers({
    // short hand property names
    map: SdkMapReducer,
});

export default rootReducer;
