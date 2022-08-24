import { createRoot } from 'react-dom/client';

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

import { HelloWorld } from './HelloWorld';
const helloWorldElement = <HelloWorld />

root.render(helloWorldElement)

import { HelloName } from './HelloName';
const helloNameElement = <HelloName />

root.render(helloNameElement)
// ReactDOM.render it's DEPRECATED
// ReactDOM.render(helloWorldElement, root)
