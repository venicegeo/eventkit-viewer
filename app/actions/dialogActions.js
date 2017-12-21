import types from './actionTypes';

export function openDialog() {
    return {
        type: types.OPENING_DIALOG,
    }
}

export function closeDialog() {
    return {
        type: types.CLOSING_DIALOG,
    }
}