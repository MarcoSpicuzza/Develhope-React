import React from "react";
import { CounterButton } from "./CounterButton";

export class ClickCounter extends React.Component {
    state = {
        counter: 0,
    }

    incrementCounter = () => {
        this.setState(() => {
            return {
                counter: this.state.counter + 1,
            }
        })
    }

    render() {
        return (
             <>
                <h3>
                    {this.state.counter}
                </h3>
                <CounterButton incrementCounter={this.incrementCounter}/>
             </>
        );
    }
}