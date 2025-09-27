import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
         return localStorage.getItem("appTheme") || "light"});
    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("appLang", newLang);
            return newTheme;
        })
    }
    useEffect(() => {
        localStorage.setItem("appTheme", theme);
    }, [theme]);

    return(
        <ThemeContexteContext.Provider value={{theme, toggleTheme}}> {children} </ThemeContexteContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);