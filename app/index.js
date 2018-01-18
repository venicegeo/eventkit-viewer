import './styles/global.css'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import configureStore from './store/configureStore';

import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom';
import {Provider} from 'react-redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainMap from './components/MainMap'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
const muiTheme = getMuiTheme();

    render(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <MainMap store={store}>

                    </MainMap>

                </MuiThemeProvider>
            </Provider>, document.getElementById('root'));
