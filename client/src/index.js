import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const appRoot = document.getElementById('app-root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  appRoot
);
