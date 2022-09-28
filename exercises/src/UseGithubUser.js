import { useEffect, useState } from "react";

const UseGithubUser = (username) => {
    const [user, setUser] = useState(username);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [username]);

    return {user}
}
 
export default UseGithubUser;