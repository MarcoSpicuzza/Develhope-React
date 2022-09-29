import React from "react";
import FilteredList from "./FilteredList";

const list = [
  {id: 1, name: "Marco", age:22},
  {id: 2, name: "Pedro", age:30},
  {id: 2, name: "Mirco", age:29},
  {id: 2, name: "Gianni", age:20}
]

const App = () => {
  return (
    <>
      <h1>
        <ul>LIST
          <FilteredList list={list}/>
        </ul>
      </h1>
    </>
  );
}

export default App;
