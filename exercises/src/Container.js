import React from "react";

export class Container extends React.Component {

    render() {
        const backgroundColor = {
            backgroundColor: 'white',
            border: '3px red solid'
        }

        return (
             <div style={backgroundColor}>
                {this.props.children}
             </div>
        );
    }
}