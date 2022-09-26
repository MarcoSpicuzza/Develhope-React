import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

const App = () => {
    const [language, setLanguage] = useState("it");

    function changeLanguage(e) {
        setLanguage(e.target.value)   
    }

    return ( 
        <div>
            <select name="language" onChange={changeLanguage}>
                <option value="it">ITALIANO</option>
                <option value="en">ENGLISH</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
     );
}
 
export default App;