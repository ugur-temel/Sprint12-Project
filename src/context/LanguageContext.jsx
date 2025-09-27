import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState(() => {
         return localStorage.getItem("appLang") || "en"});
    const toggleLang = () => {
        setLang(prev => {
            const newLang = prev === "en" ? "tr" : "en";
            localStorage.setItem("appLang", newLang);
            return newLang;
        })
    }
    useEffect(() => {
        localStorage.setItem("appLang", lang);
    }, [lang]);

    return(
        <LanguageContext.Provider value={{lang, toggleLang}}> {children} </LanguageContext.Provider>
    )
}

export const useLang = () => useContext(LanguageContext);