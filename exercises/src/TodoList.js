import React, { useState } from "react";

const TodoList = () => {
    const [list, setList] = useState({
        items: [],
        value: ''
    })

    function onChangeInput(e) {
        const inputValue = e.target.value;

        setList(prevState => ({
            ...prevState, 
            value: inputValue
        }))
    }

    function onClickHandler() {
        setList(prevState => ({
            items: [...prevState.items, prevState.value]
        }))
    }

    return ( 
        <div>
            <ul>
                {list.items.map((item, index) => <li key={item + index}>{item}</li>)}
            </ul>
            <input type="text" value={list.value} onChange={onChangeInput}/>
            <button onClick={onClickHandler}>BUTTON</button>
        </div>
     );
}
 
export default TodoList;