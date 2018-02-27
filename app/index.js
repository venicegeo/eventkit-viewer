import './styles/global.css'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import configureStore from './store/configureStore';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import {Provider} from 'react-redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainMap from './components/MainMap'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
const muiTheme = getMuiTheme({

    flatButton: {
        textColor: '#253447',
        primaryTextColor: '#253447',
    },

    checkbox: {
        boxColor: '#4598bf',
        checkedColor: '#4598bf',
    },

    tableRow: {
        selectedColor: 'initial',
    },

    svgIcon: {
        color: '#4598bf',
    },

    palette: {
        accent1Color: '#4598bf',
    },

});

    render(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <MainMap store={store}>

                    </MainMap>

                </MuiThemeProvider>
            </Provider>, document.getElementById('root'));
