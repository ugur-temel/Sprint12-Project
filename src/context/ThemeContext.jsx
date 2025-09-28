import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
         return localStorage.getItem("appTheme") || "light"});
    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("appTheme", newTheme);
            return newTheme;
        })
    }
    useEffect(() => {
        localStorage.setItem("appTheme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}> {children} </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);