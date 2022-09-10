import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component {
  render() {
    return (
       <>
          <h1>
              <ClickCounter />
              <ClickTracker />
          </h1>
       </>
    );
  }
}