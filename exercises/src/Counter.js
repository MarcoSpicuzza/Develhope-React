import React from "react";
import { CounterDisplay } from "./CountDisplay";

export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
    }
    componentDidMount() {
        this._Interval = setInterval(() => {
            this.setState(previousState => ({
                counter: previousState.counter >= this.props.initialValue * 10
                ? this.props.initialValue
                : previousState.counter + this.props.incrementAmount
            }));
        }, this.props.incrementInterval);
    }
    
    componentWillUnmount() {
        if (this._Interval) {
            clearInterval(this._Interval)
        }
    }

    render() {
        return (
          <>
            <CounterDisplay variabileState={this.state.counter}/>
          </>
        );
    }
}