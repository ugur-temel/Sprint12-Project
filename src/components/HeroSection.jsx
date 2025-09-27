import { useLang } from "../context/LanguageContext";
import data from "../../data";

const HeroSection = () => {
    const { lang } = useLang();
    const content = data[lang].heroSection;

    return (
        <>
            <div>
                <h1>{content.greeting}</h1>
                <p>{content.intro}</p>
            </div>

            <div>
                <img>{content.profileImage}</img>
            </div>
            <div>
                <div>
                    {content.socials.map((social, index) => (
                        <a key={index} href={social.link}><img src={social.logo} alt={social.alt_text}></img> </a>
                    ))}
                </div>
                <p>{content.cta} </p>
            </div>
        </>
    )
}
export default HeroSection;