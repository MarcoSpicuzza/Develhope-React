import React, { useEffect, useState } from "react";

const ClickCounter = () => {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(prevState => prevState + 1);
    }

    function onCounterChange() {
        console.log(`Counter: ${counter}`)
    }

    useEffect(() => {
        onCounterChange()
    }, [counter])

    return (
        <>
           <h3>
               {counter}
           </h3>
           <button onClick={incrementCounter}>CLICK ME</button>
        </>
   );
}
 
export default ClickCounter