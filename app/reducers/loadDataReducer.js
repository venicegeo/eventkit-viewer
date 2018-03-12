import types from '../actions/actionTypes';
import initialState from './initialState';

export function loadDataReducer(state = initialState.layers, action) {
    switch(action.type) {
        case types.LAYER_SHOWN:
            return state.map((layer) => layer.id === action.id ? {...layer, show: true} : layer);
        case types.LAYER_HIDDEN:
            return state.map((layer) => layer.id === action.id ? {...layer, show: false} : layer);
        case types.LAYER_LOADED:
            return state.map((layer) => layer.id === action.id ? {...layer, features: action.features} : layer);
        default:
            return state;
    }
}
