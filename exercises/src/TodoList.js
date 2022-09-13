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

    onClickResetHandler = () => {
        this.setState(() => ({
            items: [],
        }))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
                </ul>
                <input type="text" value={this.state.value} onChange={this.onChangeInput}/>
                <button onClick={this.onClickHandler}>ADD</button>
                <button onClick={this.onClickResetHandler}>RESET</button>
            </div>
        );
    }
}