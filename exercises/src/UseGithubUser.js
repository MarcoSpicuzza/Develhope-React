import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UseGithubUser = (username) => {
    const { data, error } = useSWR(() => username ? `https://api.github.com/users/${username}` : null, fetcher)

    if (error) return "An error has occurred.";
    if (!data) return "Loading..."
    return {
        user: data,
    }
}
 
export default UseGithubUser;