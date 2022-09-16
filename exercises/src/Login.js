import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }
    
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked;

        this.setState({
            [name]: checked,
        })
    }

    onLogin = () => {
        this.setState({
            login: true
        })
    }

    render() {
        return (
            <form action="">
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                <input type="checkbox" name="remember"checked={this.state.remember} onChange={this.handleCheckboxChange}/>
                {this.state.username && this.state.password ? <button name="login" onClick={this.onLogin}>LOGIN</button> : <button name="login" disabled>LOGIN</button>}
            </form>
        );
    }
}