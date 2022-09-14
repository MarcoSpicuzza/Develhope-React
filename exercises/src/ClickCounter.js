import React from "react";

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
            <div style={{backgroundColor: "maroon", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center'}}>
                <h3 style={{color: "white"}}>
                    {this.state.counter}
                </h3>
                <button style={{width: "100px", padding: "10px", backgroundColor: "white", color: "black", border: "3px solid black", borderRadius:"5px"}} onClick={this.incrementCounter}>CLICK ME!
                </button>
            </div>
        );
    }
}