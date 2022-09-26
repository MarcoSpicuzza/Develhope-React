import UseForm from "./UseForm"

const ControlledForm = () => {
    const {username, password, handleChange} = UseForm({username:'', password:''})
    return ( 
        <div>
            <input type="text" name="username" onChange={handleChange} value={username}/>
            <input type="password" name="password" onChange={handleChange} value={password}/>
        </div>
     );
}
 
export default ControlledForm;