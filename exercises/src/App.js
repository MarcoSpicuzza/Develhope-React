import { Counter } from "./Counter";

const App = () => {
  return ( 
    <>
      <h1>
        <Counter initialValue={0} incrementInterval={1000} incrementAmount={1}/>
      </h1>
    </>
   );
}

export default App;
