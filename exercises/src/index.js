import { createRoot } from 'react-dom/client';
import { App } from "./App";

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
    <>
        <App />
    </>
)