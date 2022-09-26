import { useState } from "react";

const useCounter = (reset) => {
    const [value, setValue] = useState(reset);

    function increment() {
        setValue(value => value + 1);
    }
    function decrement() {
        setValue(value => value - 1);
    }
    function resetCounter() {
        setValue(value => reset);
    }
    return ( 
        {value, increment, decrement, resetCounter}
    );
}
 
export default useCounter;