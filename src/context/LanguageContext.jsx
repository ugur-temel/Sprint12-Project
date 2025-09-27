import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("en");
    const toggleLang = () => {
        setLang(prev => (prev === "en" ? "tr" : "en"))
    }

    return(
        <LanguageContext.Provider value={{lang, toggleLang}}> {children} </LanguageContext.Provider>
    )
}

export const useLang = () => useContext(LanguageContext);