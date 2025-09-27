import { useLang } from "../context/LanguageContext";
import data from "../../data";


const Profile = () => {
    const {lang} = useLang();
    const {infoCard, aboutMe} = data[lang].profileSection;

    return(
        <>
            <h2>{title}</h2>
            <div>
                <h3>{infoCard.title}</h3>
                <p><strong>{lang === "en" ? "Date of Birth" : "Doğum Tarihi"} :</strong> {infoCard.bDay}</p>
                <p><strong>{lang === "en" ? "Location" : "İkamet Şehri"} :</strong> {infoCard.location}</p>
                <p><strong>{lang === "en" ? "Graduate" : "Mezuniyet"} :</strong> {infoCard.graduate}</p>
                <p><strong>{lang === "en" ? "Preferred Role" : "Tercih ettiği Rol"} :</strong> {infoCard.preferredRole}</p>
            </div>
            <div>
                <p>{aboutMe}</p>
            </div>
        </>
    )
}

export default Profile;