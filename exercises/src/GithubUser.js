import { useState, useEffect } from "react";

const GithubUser = ({username}) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData))
    }, [username]);

    return ( 
        <>
            <div>{data && <h1>name: {data.login} <br></br> bio: {data.bio}</h1>}</div>
        </>
     );
}
 
export default GithubUser;