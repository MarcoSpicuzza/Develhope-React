import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          <Counter initialValue={1} incrementInterval={1000} incrementAmount={1}/>
        </h1>
      </>
    );
  }
}