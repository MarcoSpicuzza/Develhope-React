import React from "react";
import GithubUserList from "./GithubUserList";

const App = () => {
    return ( 
        <div>
            <GithubUserList usernames={["marcospicuzza", "msimile", "rickcrypto90"]}/>
        </div>
    );
}
 
export default App;