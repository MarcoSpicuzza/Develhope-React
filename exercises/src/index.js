import { createRoot } from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { HelloName } from './HelloName';

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
    <>
        <HelloWorld />
        <HelloName />
    </>
)

// ReactDOM.render it's DEPRECATED
// ReactDOM.render(helloWorldElement, root)