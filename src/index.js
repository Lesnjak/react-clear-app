import React, {Component} from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import TestComponent from './components/TestComponent';
import  './assets/styles/style.scss';
import redusers from './redusers'



const store = createStore(redusers);


render(
    <Provider store={store}>
    <TestComponent />
    </Provider>,
    document.getElementById('mount_place'));
