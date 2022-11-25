import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './Cart';
import Car from './Car';
import JSX from './SimpleJSX';
import FavoriteDress from './UseState';
import NetworkUser from './UseContext';
import Timer from './UseEffect';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetworkUser />
    <Timer />
    <FavoriteDress />
    <JSX />
    <Todos />
    <Car />
    <App />
    <Cart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
