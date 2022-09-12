import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    reference = createRef()

    handleLogin = e => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const checked = e.target.elements.remember.checked;
        console.log({username, password, checked});
    }

    handlePrefill = () => {
        this.reference.current.elements.username.value = "Username";
        this.reference.current.elements.password.value = "Password";
        this.reference.current.elements.remember.checked = true;
    }

    render() {
        return (
             <form ref={this.reference} onSubmit={this.handleLogin}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="checkbox" name="remember"/>
                <button name="login">LOGIN</button>
                <button type="reset">RESET</button>
                <button onClick={this.handlePrefill}>PREFILL</button>
             </form>
        );
    }
}