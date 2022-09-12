import React from 'react';
import ReactDOM from 'react-dom/client';
import {Colors} from './Colors';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Colors items={[{name: "Rosso", id: 1}, {name: "Verde", id: 2}, {name: "Arancione", id: 3}, {name: "Bianco", id: 5}]}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals