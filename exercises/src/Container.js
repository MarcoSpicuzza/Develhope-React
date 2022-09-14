import React from "react";

export class Container extends React.Component {

    render() {
        const backgroundColor = {
            backgroundColor: 'white',
            border: '3px red solid'
        }

        return (
             <div style={backgroundColor}>
                <h1>{this.props.title}</h1>
                {this.props.children}
             </div>
        );
    }
}