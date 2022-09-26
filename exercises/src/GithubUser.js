import { useState, useEffect } from "react";

const GithubUser = ({username}) => {
    const [data, setData] = useState(username);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData))
    }, [username]);

    return ( 
        <>
            <div><h1>{data.name} {data.bio}</h1></div>
        </>
     );
}
 
export default GithubUser;