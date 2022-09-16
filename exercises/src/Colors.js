import React from "react";

export class Colors extends React.Component {
    render() {
        return (
             <ul className="text-gray-600 text-4xl font-bold mb-2"> LISTA COLORI
                {this.props.items.map(item => <li className="text-lg text-orange-700" key={item.id}>{item.name}</li>)}
             </ul>
        );
    }
}