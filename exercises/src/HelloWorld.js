import React from 'react';
import { Message } from "./Message.js";

export class HelloWorld extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <Message />
            </>
        );
    }
}