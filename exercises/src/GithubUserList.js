import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = ({usernames}) => {
    const [user, setUser] = useState(usernames)

    function findUser(e) {
        e.preventDefault();
        setUser(prevState => (
            usernames = [...prevState, e.target.elements.inputUser.value]
        ))
    }
    return ( 
        <div>
            <form onSubmit={findUser}>
                <input type="text" name="inputUser" placeholder="Insert username"/>
                <button type="submit">FIND</button>
            </form>
            <ul>
                {user.map((username, index) => <li key={index}><GithubUser username={username}/></li>)}
            </ul>
        </div>
     );
}
 
export default GithubUserList;