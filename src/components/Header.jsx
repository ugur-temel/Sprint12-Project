import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang} from "../context/LanguageContext";


const Header = () => {
    const {theme, toggleTheme} = useTheme();
    const {lang, toggleLang} = useLang();

    return (
        <>
            <div onClick={toggleTheme}>
                <div> 
                    
                </div>
                <span>DARK MODE</span>
            </div>
            <div onClick={toggleLang}>
                {lang === "en" ? (<span><span>TÜRKÇE</span>'ye geç</span>) : (<span>Switch to<span>ENGLISH</span></span>)}
            </div>
        </>
    )
}
export default Header;