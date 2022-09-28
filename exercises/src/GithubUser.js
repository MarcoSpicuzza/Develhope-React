import UseGithubUser from "./UseGithubUser";

const GithubUser = ({username}) => {
    const {user, loading, error} = UseGithubUser(username);

    return (
        <div>
            <h1>GITHUB PROFILE</h1>
            {error ? "Ci sono dei problemi" : loading ? <h1>Caricamento...</h1> : <h3> {user.login} </h3>}
            {error ? "Ci sono dei problemi" : loading ? <h1>Caricamento...</h1> : <h3> {user.id} </h3>}
            {error ? "Ci sono dei problemi" : loading ? <h1>Caricamento...</h1> : <h3> {user.url} </h3>}
        </div>
     );
}
 
export default GithubUser;