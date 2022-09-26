import { useState } from "react";

const DisplayLanguage = () => {
    const [language, setLanguage] = useState();

    function changeLanguage(e) {
        setLanguage(e.target.value)   
    }
    return ( 
        <div>
            <select name="language" value={language} onChange={changeLanguage}>
                <option value="it">ITALIANO</option>
                <option value="en">ENGLISH</option>
            </select>
            <p>Benvenuto utente!</p>
            <p>Welcome user!</p>
        </div>
     );
}
 
export default DisplayLanguage;