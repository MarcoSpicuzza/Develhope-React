import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
             <>
                <Welcome name="User" />
             </>
        );
    }
}

// IF NO NAME IS SET A BLANK TEXT HAPPERS REACT APP STILL WORKS.