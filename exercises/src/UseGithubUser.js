import { useEffect, useState } from "react";

const UseGithubUser = (username) => {
    const [user, setUser] = useState(username);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${username}`)
            if (!res.ok) {
                setError(true)
                setLoading(false)
            } else {
                const data = await res.json()
                setUser(data)
            }
            setLoading(false)
        })()
    }, [username])

    return { 
        user, loading, error
    }
}
 
export default UseGithubUser;