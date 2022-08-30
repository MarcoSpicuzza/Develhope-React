import React from "react";
import {Age} from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <Age age={18} />
            </>
        );
    }
}

// YOU CAN PASS PROPS AS JSX WITH SQUARE BRACKETS IF NOT... IT WILL CATCH THE ENTIRE HTML CODE AS A STRING AND WON'T WORK