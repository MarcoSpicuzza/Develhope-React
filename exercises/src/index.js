import { createRoot } from 'react-dom/client';
import { App } from "./App.js";

const idRoot = document.querySelector('#root')
const root = createRoot(idRoot)

root.render(
    <>
        <App />
    </>
)

// YOU CAN PASS PROPS AS JSX WITH SQUARE BRACKETS IF NOT... IT WILL CATCH THE ENTIRE HTML CODE AS A STRING AND WON'T WORK