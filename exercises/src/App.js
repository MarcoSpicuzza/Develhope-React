import React from "react";
import ClickCounter from "./ClickCounter";

export class App extends React.Component {
  render() {
    return (
       <>
          <h1>
              <ClickCounter/>
          </h1>
       </>
    );
  }
}