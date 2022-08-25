import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
             <p>Welcome, {this.props.name}!</p>
        );
    }
}

Welcome.defaultProps = {
    name: 'Default User'
};

// IF NO NAME IS SET A BLANK TEXT HAPPERS REACT APP STILL WORKS.
