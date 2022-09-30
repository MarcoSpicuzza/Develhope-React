import React from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";
import ShowGithubUser from "./ShowGithubUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome name="Marco"/>} />
                    <Route path="/counter" element={<Counter initialValue={2} increment={2} />} />
                    <Route path='users/:username' element={<ShowGithubUser/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;