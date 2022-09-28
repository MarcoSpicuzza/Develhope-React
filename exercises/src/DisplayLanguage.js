import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
    const language = useContext(LanguageContext)
    const languages = {
        it: {italiano: "Benvenuto Utente!"},
        en: {english: "Welcome User!"}
    }
    return ( 
        <div>
            <h1>{languages[language].italiano}</h1>
            <h1>{languages[language].english}</h1>
        </div>
     );
}
 
export default DisplayLanguage;