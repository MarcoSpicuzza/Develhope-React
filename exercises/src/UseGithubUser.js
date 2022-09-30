import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UseGithubUser = (username) => {
    const { data } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        user: data,
    }
}
 
export default UseGithubUser;