import { createRoot } from 'react-dom/client';
import { HelloWorld } from "./HelloWorld";

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
    <>
        <HelloWorld />
    </>
)