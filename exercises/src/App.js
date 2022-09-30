import React from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";
import ShowGithubUser from "./ShowGithubUser";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <div>
                    <Link to="/">HOME </Link>&nbsp;
                    <Link to="/Counter">COUNTER</Link>&nbsp;
                    <Link to="/users/marcospicuzza">GITHUB</Link>&nbsp;
                </div>
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