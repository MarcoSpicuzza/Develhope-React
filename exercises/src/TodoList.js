import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ['Patata', 'Cipolla'],
        value: '',
    }

    onChangeInput = (event) => {
        const inputValue = event.target.value;

        this.setState({
            value: inputValue,
        })
    }

    onClickHandler = () => {
        this.setState(prevState => ({
            items: [...prevState.items, prevState.value],
            value: '',
            // METODO ALTERNATIVO TRAMITE USO DI CONCAT - shallow copy
            // items: prevState.items.concat(prevState.value),
            // items: [].concat(prevState.items, prevState.value),
        }))
    }

    render() {
        return (
            <div>
                <br></br>
                <ul className="text-gray-700 text-4xl font-bold mb-2"> TodoList
                    {this.state.items.map((item, index) => <li className="text-orange-700 text-lg" key={item + index}>{item}</li>)}
                </ul>
                <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={this.state.value} onChange={this.onChangeInput}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onClickHandler}>AGGIUNGI</button>
            </div>
        );
    }
}