import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

const App = () => {
    return ( 
        <div>
            <LanguageContext.Provider>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
     );
}
 
export default App;