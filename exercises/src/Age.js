import React from "react";

export class Age extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age && <p>Your Age is {this.props.age}</p> }
            </>
        );
    }
}