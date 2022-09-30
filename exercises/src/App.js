import React from "react";
import Counter from "./Counter";
import Welcome from "./Welcome";
import ShowGithubUser from "./ShowGithubUser";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import GithubUserList from "./GithubUserList";

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
                    <Route path='*' element={<> <h1>Page Not Found</h1> <br/> <Link to="/">HOME</Link> </>}/>
                    <Route path='/' element={<Welcome name="Marco"/>} />
                    <Route path="/counter" element={<Counter initialValue={2} increment={2} />} />
                    <Route path='/users' element={<div><GithubUserList usernames={["marcospicuzza"]} /><Outlet/></div>} >
                        <Route index element={<div><h1>Add a user and select it</h1></div>} />
                        <Route path=':username' element={<ShowGithubUser/>} /> 
                    </Route> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;