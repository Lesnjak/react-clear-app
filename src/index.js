import React from 'react';
import { render } from 'react-dom';
import TestComponent from './components/TestComponent';
import  './assets/styles/style.scss';



render(<TestComponent/>, document.getElementById('mount_place'));
