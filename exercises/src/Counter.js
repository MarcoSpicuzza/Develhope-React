import React from "react";
import { CounterDisplay } from "./CountDisplay";

export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
    }
    componentDidMount() {
        this._Interval = setInterval(() => this.count(), this.props.incrementInterval);
    }
    
    componentDidUpdate() {
        if (this.state.counter >= this.props.initialValue * 10) {
            this.setState(() => ({
                counter: this.props.initialValue
            }));
        }
    }

    componentWillUnmount() {
        if (this._Interval) {
            clearInterval(this._Interval)
        }
    }

    count() {
        this.setState({
            counter: this.state.counter + this.props.initialValue,
        });
    }

    render() {
        return (
          <>
            <CounterDisplay variabileState={this.state.counter}/>
          </>
        );
    }
}