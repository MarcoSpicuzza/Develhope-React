import React from "react";
import { CounterDisplay } from "./CountDisplay";

export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
    }

    constructor(props) {
        super(props);

        // ESERCIZIO SVOLTO TRAMITE CONDIZIONE IF
        // ESERCIZIO SVOLTO TRAMITE CONDIZIONE IF
        // ESERCIZIO SVOLTO TRAMITE CONDIZIONE IF
    //     setInterval(() => {
    //         this.setState(previousState => {
    //             if (previousState.counter >= this.props.initialValue * 10) {
    //                 return {
    //                     counter: this.props.initialValue
    //                 }
    //             }
    //             else return {
    //                 counter: previousState.counter + this.props.incrementAmount
    //             }
    //         })
    //     }, this.props.incrementInterval);
    // }

            setInterval(() => {
                this.setState(previousState => ({
                    counter: previousState.counter >= this.props.initialValue * 10
                    ?   this.props.initialValue
                    :   previousState.counter + this.props.incrementAmount
                }))
            }, this.props.incrementInterval);
        };

    render() {
        return (
          <>
            <CounterDisplay variabileState={this.state.counter}/>
          </>
        );
    }
}