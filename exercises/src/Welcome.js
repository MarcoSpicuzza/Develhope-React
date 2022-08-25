import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                <p>Your Age is {this.props.age}</p>
            </>
        );
    }
}

// YOU CAN PASS PROPS AS JSX WITH SQUARE BRACKETS IF NOT... IT WILL CATCH THE ENTIRE HTML CODE AS A STRING AND WON'T WORK