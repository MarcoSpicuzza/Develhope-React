import UseGithubUser from "./UseGithubUser";

const GithubUser = ({username}) => {
    const {user, onClickFetch} = UseGithubUser(username);

    return (
        <div>
            <button onClick={onClickFetch}>FETCH DATA</button>
            <h1>GITHUB PROFILE</h1>
            {user && <h3>Username: {user.login}</h3>}
            {user && <p>Bio: {user.bio}</p>}
        </div>
     );
}
 
export default GithubUser;