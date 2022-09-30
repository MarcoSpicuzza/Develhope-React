import UseGithubUser from "./UseGithubUser";

const GithubUser = ({username}) => {
    const {user} = UseGithubUser(username);

    return (
        <div>
            <h1>GITHUB PROFILE</h1>
            {user && <h3>Username: {user.login}</h3>}
            {user && <p>Bio: {user.bio}</p>}
        </div>
     );
}
 
export default GithubUser;