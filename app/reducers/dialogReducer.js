
import types from '../actions/actionTypes';
import initialState from './initialState';

export function dialogReducer(state = initialState.dialog, action) {
    switch(action.type) {
        case types.OPENING_DIALOG:
            return true;
        case types.CLOSING_DIALOG:
            return false;
        default:
            return state;
    }

}
