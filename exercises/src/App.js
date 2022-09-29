import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Welcome"

const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name="Marco"/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;