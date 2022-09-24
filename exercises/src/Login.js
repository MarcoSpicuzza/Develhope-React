import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        remember: false,
        login: false
    })

    function handleInputChange(e) {
        const {name, type, value, checked} = e.target
        setForm(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function onLogin() {
        setForm(prevData => ({
            ...prevData,
            login: true
        }))
    }

    return ( 
        <div>
            <input type="text" name="username" value={form.username} onChange={handleInputChange} />
            <input type="password" name="password" value={form.password} onChange={handleInputChange}/>
            <input type="checkbox" name="remember"checked={form.remember} onChange={handleInputChange}/>
            {form.username && form.password ? <button name="login" onClick={onLogin}>LOGIN</button> : <button name="login" disabled>LOGIN</button>}
        </div>
     );
}
 
export default Login;