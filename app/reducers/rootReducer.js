import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import {dialogReducer} from './dialogReducer';


const rootReducer = combineReducers({
    dialog: dialogReducer,
});

export default rootReducer;

