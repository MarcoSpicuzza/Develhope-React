import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UseGithubUser = (username) => {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    if (error) return "An error has occurred.";
    if (!data) return "Loading..."
    return {
        user: data,
    }
}
 
export default UseGithubUser;