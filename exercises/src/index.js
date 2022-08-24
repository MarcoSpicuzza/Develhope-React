import { createRoot } from 'react-dom/client';
import { HelloName } from './HelloName';

const helloNameElement = <HelloName />
const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(helloNameElement)