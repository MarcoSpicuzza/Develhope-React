import React from "react";

export class ClickTracker extends React.Component {
    state = {
        button: '',
    }

    eventHandler = (event) => {
        this.setState((state) => {
            return {
                button: (state.button = event.target.innerText),
            }
        })
    }

    render() {
        return (
             <>
                <button onClick={this.eventHandler}>BUTTON 1</button>
                <button onClick={this.eventHandler}>BUTTON 2</button>
                <button onClick={this.eventHandler}>BUTTON 3</button>
                <h1>LAST BUTTON PRESSED IS: {this.state.button}</h1>
             </>
        );
    }
}