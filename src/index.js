import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// const myFirstElement = <h1>Hello React!</h1>
const myFirstElement = (
  <h1>Hello we are great</h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);