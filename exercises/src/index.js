import React from 'react';
import ReactDOM from 'react-dom/client';
import CarDetails from "./CarDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarDetails initialData={{model:"", year:"", color:""}}/>
  </React.StrictMode>
);