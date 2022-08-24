import { createRoot } from 'react-dom/client';
import { Sum } from './Sum';

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
    <>
        <Sum />
    </>
)

// ReactDOM.render it's DEPRECATED
// ReactDOM.render(helloWorldElement, root)
