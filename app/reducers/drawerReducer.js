
import types from '../actions/actionTypes';
import initialState from './initialState';

export function drawerReducer(state = initialState.drawer, action) {
    switch(action.type) {
        case types.OPENED_DRAWER:
            return 'open';
        case types.CLOSED_DRAWER:
            return 'closed';
        default:
            return state;
    }

}
