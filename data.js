import linkedinLogo from "./src/assets/icons/linkedin.svg"
import githubLogo from "./src/assets/icons/github.svg"
import jsLogo from "./src/assets/icons/javascript-svg.svg"
import reactLogo from "./src/assets/icons/react-svg.svg"
import reduxLogo from "./src/assets/icons/redux-svg.svg"
import nodeLogo from "./src/assets/icons/node-js-svg.svg"
import vscodeLogo from "./src/assets/icons/vscode-svg.svg"
import figmaLogo from "./src/assets/icons/figma-svg.svg"

const data = {
    en : {
        heroSection :{
            greeting: "Hi! 👋🏻",
            intro:"",
            profileImage: "",
            socials:[
                {
                    logo: linkedinLogo,
                    alt_text: "linkedin",
                    link: ""
                },
                {
                    logo: githubLogo,
                    alt_text: "github",
                    link: "https://github.com/ugur-temel"
                }
            ],
            cta: ""
        },
        skillsSection: {
            title: "Skills",
            skills: [
                {
                    name: "JAVASCRIPT",
                    icon: jsLogo,
                },
                {
                    name: "REACT",
                    icon: reactLogo,
                },
                {
                    name: "REDUX",
                    icon: reduxLogo,
                },
                {
                    name: "NODE",
                    icon: nodeLogo,
                },
                {
                    name: "VSCODE",
                    icon: vscodeLogo,
                }, 
                {
                    name: "FIGMA",
                    icon: figmaLogo,
                }
            ]
        },
        profileSection : {
            title: "Profile",
            infoCard: {
                title : "Basic Information",
                bDay : "27.02.1993",
                location: "Eskişehir",
                graduate: "Anadolu University Faculty of Fine Arts Printmaking, 2018",
                preferredRole: "Frontend, UI"
            },
            aboutMe: "Lorem Ipsum...",
        },


    },

    tr : { heroSection :{
            greeting: "Merhaba! 👋🏻",
            intro:"",
            profileImage: "",
            socials:[
                {
                    logo: linkedinLogo,
                    alt_text: "linkedin",
                    link: ""
                },
                {
                    logo: githubLogo,
                    alt_text: "github",
                    link: ""
                }
            ],
            cta: ""
        },
        skillsSection: {
            title: "Skills",
            skills: [
                {
                    name: "JAVASCRIPT",
                    icon: jsLogo,
                },
                {
                    name: "REACT",
                    icon: reactLogo,
                },
                {
                    name: "REDUX",
                    icon: reduxLogo,
                },
                {
                    name: "NODE",
                    icon: nodeLogo,
                },
                {
                    name: "VSCODE",
                    icon: vscodeLogo,
                }, 
                {
                    name: "FIGMA",
                    icon: figmaLogo,
                }
            ]
        },
        profileSection : {
            title: "Profil",
            infoCard: {
                title : "Hakkında",
                bDay : "27.02.1993",
                location: "Eskişehir",
                graduate: "Anadolu Ünv. GSF Baskı Sanatları, 2018",
                preferredRole: "Frontend, UI"
            },
            aboutMe: "Lorem Ipsum...",
        },

    }
}
export default data;