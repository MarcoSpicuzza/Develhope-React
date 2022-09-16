import React from "react";

export class CounterButton extends React.Component {
    render() {
        return (
            <button className="btn btn-primary btn-lg" onClick={this.props.incrementCounter}>INCREMENT</button>
        );
    }
}