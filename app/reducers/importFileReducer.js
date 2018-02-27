import types from '../actions/actionTypes';
import initialState from './initialState';

export function importFileReducer(state = initialState.importFile, action) {
    switch(action.type) {
        case types.FILE_PROCESSING:
            return { ...state, processing: true, processed: false, newLayer: null, error: null, filename: action.filename };
        case types.FILE_PROCESSED:
            return { ...state, processing: false, processed: true };
        case types.TABLE_PROCESSED:
            return { ...state, processing: true, processed: false, newLayer: action.layer };
        case types.FILE_ERROR:
            return { processing: false, processed: false, newLayer: null, error: action.error, filename: '' };
        case types.FILE_RESET:
            return { processing: false, processed: false, newLayer: null, error: null, filename: '' };
        default:
            return state;
    }
}
