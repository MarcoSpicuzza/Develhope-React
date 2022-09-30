import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(prevState => prevState + 1);
    }

    return (
        <>
           <h3>
               {counter}
           </h3>
           <button onClick={incrementCounter}>CLICK ME</button>
        </>
   );
}
 
export default Counter