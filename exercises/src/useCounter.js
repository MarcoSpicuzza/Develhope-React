import { useCallback, useState } from "react";

const useCounter = (reset) => {
    const [value, setValue] = useState(reset);

    const increment = useCallback(function increment() {
        setValue(value => value + 1);
    },[])
    
    const decrement = useCallback(function decrement() {
        setValue(value => value - 1);
    },[])
    
    const resetCounter = useCallback(function resetCounter() {
        setValue(value => reset);
    },[reset])

    return ( 
        {value, increment, decrement, resetCounter}
    );
}
 
export default useCounter;