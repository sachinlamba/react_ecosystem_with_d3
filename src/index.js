import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app';
import './styles/index.css';

const container = document.getElementById('container');


console.log('reacter src/index file');
ReactDom.render(<App />, container);
