import React from "react";

export class Counter extends React.Component {
    state = {
        counter: 0,
    }

    constructor(props) {
        super(props);

        setInterval(() => {
            // this.setState(previousState => ({
            //     counter: previousState + 1          FUNCTION/CALLBACK SETSTATE
            // })
            // {
            //     counter: this.state.counter + 1,     OBJECT SETSTATE
            // });
        }, 1000);
    }

    render() {
        return (
          <>
            <h1>
                Counter: {this.state.counter}
            </h1>
          </>
        );
    }
}