import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
             <>
                <Welcome name={[<strong>Marco</strong>]} age="22"/>
             </>
        );
    }
}

// YOU CAN PASS PROPS AS JSX WITH SQUARE BRACKETS IF NOT... IT WILL CATCH THE ENTIRE HTML CODE AS A STRING AND WON'T WORK