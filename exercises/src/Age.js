import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <p>Your Age is {this.props.age}</p>
        );
    }
}