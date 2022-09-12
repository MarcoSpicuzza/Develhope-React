import React from "react";

export class Colors extends React.Component {
    render() {
        return (
             <ul> LISTA COLORI
                {this.props.items.map(item => <li key={item.id}>{item.name}</li>)}
             </ul>
        );
    }
}