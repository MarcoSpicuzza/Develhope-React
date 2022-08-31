import React from "react";

export class Age extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age >= 18 && this.props.age <= 65 && this.props.name === 'John' && <p>Your Age is {this.props.age}</p> }
            </>
        );
    }
}