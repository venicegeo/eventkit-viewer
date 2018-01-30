import types from './actionTypes';

export function openDrawer() {
    return {
        type: types.OPENED_DRAWER,
    }
}

export function closeDrawer() {
    return {
        type: types.CLOSED_DRAWER,
    }
}

export function loadLayers(url) {

}