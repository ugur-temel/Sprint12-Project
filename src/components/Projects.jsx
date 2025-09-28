import axios from "axios";
import ProjectCard from "./ProjectCard.jsx";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios 
        .get("/project.json")
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);
    
    return(
        <>
            <h2>Projects</h2>
            <div>
                {projects.map((project, index) => (<ProjectCard key={index} project={project}/>))}
            </div>
        </>
    )
};

export default Projects;