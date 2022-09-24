import React, { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, 1000)
        console.log("MOUNT");
        return () => {
            clearInterval(interval);
            console.log("UNMOUNT");
        }   
    }, [counter]);
    return ( 
        <>
            <h1>
                Counter: {counter}
            </h1>
        </>
     );
}
 
export default Counter;