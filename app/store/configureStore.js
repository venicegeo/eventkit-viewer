import {applyMiddleware, createStore, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'

let middleware = [thunkMiddleware];
const logger = createLogger();
middleware = [...middleware, logger];


export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(...middleware)
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}



