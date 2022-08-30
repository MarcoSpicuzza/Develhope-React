import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "./App.js";

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);