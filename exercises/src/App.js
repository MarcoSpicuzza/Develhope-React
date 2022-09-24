import Welcome from "./Welcome";
import Sum from "./Sum";

const App = () => {
    return ( 
        <div>
            <Welcome />
            <Sum numbers={[1, 2, 3]}/>
        </div>
     );
}
 
export default App;