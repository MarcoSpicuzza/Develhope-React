import React from 'react';
import ReactDOM from 'react-dom/client';
import { Colors } from './Colors';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Colors items={[{name: "Rosso", id: 1}, {name: "Verde", id: 2}, {name: "Arancione", id: 3}, {name: "Bianco", id: 5}]}/>
    <TodoList />
  </React.StrictMode>
);