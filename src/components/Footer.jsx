import { useLang } from "../context/LanguageContext";
import data from "../../data";

const Footer = () => {
    const {lang} = useLang();
    const {footerText, footerLinks} =data[lang].footerSection;

    return(
        <>
            <div>{footerText}</div>
            <div>
                <a>{footerLinks.github}</a>
                <a>{footerLinks.blog}</a>
                <a>{footerLinks.linkedin}</a>
                <a>{footerLinks.email}</a>
            </div>
        </>
    )
}

export default Footer;