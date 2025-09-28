import React from "react";
import { toast, Zoom } from "react-toastify";

const ProjectCard = ({project}) => {
    const {title, description, tech, github, linkTo, image } = project;

    const handleCardClick = () => {
        toast(<div>
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <ul>{tech.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}</ul>
             </div>, {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
});
    }

    return (
        <div onClick={handleCardClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {tech.map((t, i) => (<span key={i}>{t}</span>))}
            </div>
            <div>
               <a href={github}>GitHub</a>
               <a href={linkTo}>Go to App</a>
            </div>
        </div>
    )
}

export default ProjectCard;


