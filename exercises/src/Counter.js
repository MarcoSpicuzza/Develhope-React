import useCounter from "./useCounter";

const Counter = () => {
    const {value, increment, decrement, resetCounter} = useCounter(0);
    return ( 
        <div>
            <h2>COUNTER: {value}</h2>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={resetCounter}>RESET</button>
        </div>
     );
}
 
export default Counter;