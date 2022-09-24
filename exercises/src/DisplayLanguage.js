import { LanguageContext } from "./App";

const DisplayLanguage = () => {
    return ( 
        <div>
            <LanguageContext.Consumer>
                {language => (
                    language === "it" ? <p>Benvenuto utente!</p> : <p>Welcome user!</p>
                )}
            </LanguageContext.Consumer>
        </div>
     );
}
 
export default DisplayLanguage;