import { createRoot } from 'react-dom/client';
import { HelloWorld } from './HelloWorld';

const helloWorldElement = <HelloWorld />
const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(helloWorldElement)

// ReactDOM.render it's DEPRECATED
// ReactDOM.render(helloWorldElement, root)