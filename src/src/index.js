import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import "./css/style.css";
import "./css/modal.css";
import "./css/optimization.css";

const root = ReactDOMClient.createRoot(document.getElementsByClassName('wrapper')[0]);

root.render(<App />)