import { useState } from "react";
import { Link } from "react-router-dom"

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
                {user.map((username, index) => <li key={index}><Link username={username} to={username}>{username}</Link></li>)}
            </ul>
        </div>
     );
}
 
export default GithubUserList;