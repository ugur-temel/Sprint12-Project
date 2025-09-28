import { useLang } from "../context/LanguageContext";
import data from "../../data";

const Skills = () => {
    const {lang} = useLang();
    const {title, skills} = data[lang].skillsSection;

    return (
        <>
            <h2>{title}</h2>
            <div>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Skills;