import React from "react";

export class Colors extends React.Component {
    render() {
        const addBgBorder = {
            backgroundColor: 'maroon',
            border: '3px solid black',
        }

        return (
             <ul className={this.props.className} style={addBgBorder}> LISTA COLORI
                {this.props.items.map(item => <li key={item.id}>{item.name}</li>)}
             </ul>
        );
    }
}