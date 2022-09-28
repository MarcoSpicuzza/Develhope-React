import UseGithubUser from "./UseGithubUser";

const GithubUser = ({username}) => {
    const {user} = UseGithubUser(username);

    return (
        <div>
            <h1>GITHUB PROFILE</h1>
            <h3>{user.login}</h3>
            <h3>{user.id}</h3>
            <h3>{user.url}</h3>
        </div>
     );
}
 
export default GithubUser;