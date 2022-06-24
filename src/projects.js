import projectPic from "./images/snake.png"
import projectPic1 from "./images/crud.png"
import projectPic2 from "./images/animals.png"
import projectPic3 from "./images/todo.png"
import projectPic4 from "./images/game.png"
import {DiPhp} from "react-icons/di"
import {DiReact} from "react-icons/di"
import {AiFillHtml5} from "react-icons/ai"
import {IoLogoJavascript} from "react-icons/io"
import {FaCss3Alt} from "react-icons/fa"
export const projects = [
    {
        projectTitle : "First Project",
        projectDescription : "I have worked on this website with a team. It was a project for an organization in Suriname to help locate snakes in the area. It is a web application with authentication, authorization, and CRUD system.",
        projectImage:projectPic,
        projectTechnologies: [<DiPhp size="70%"></DiPhp>,<AiFillHtml5 size="70%"></AiFillHtml5>,<IoLogoJavascript size="70%"></IoLogoJavascript>,<FaCss3Alt size="70%"></FaCss3Alt>],
        projectLink: ""
    },
    {
        projectTitle : "Second Project",
        projectDescription : "I made this project for an artist, so that he or she can post their art and so that the people can rate the art and leave a comment. The artist can decide if he wants to sell the art or not and he can replay to the comments. It is a web application with authentication, authorization, and CRUD system. ",
        projectImage: projectPic1,
        projectTechnologies: [<DiPhp size="70%"></DiPhp>,<AiFillHtml5 size="70%"></AiFillHtml5>,<IoLogoJavascript size="70%"></IoLogoJavascript>,<FaCss3Alt size="70%"></FaCss3Alt>],
        isLeft : true
    },
    {
        projectTitle : "Third Project",
        projectDescription : "I made this project for an animal shelter where people who can not take care of their animal can submit a request to give up the animal. The staf shelter can see who made the request and what kind off animal they have. ",
        projectImage: projectPic2,
        projectTechnologies: [<DiPhp size="70%"></DiPhp>,<AiFillHtml5 size="70%"></AiFillHtml5>,<IoLogoJavascript size="70%"></IoLogoJavascript>,<FaCss3Alt size="70%"></FaCss3Alt>],
    },
    {
        projectTitle : "Fourth Project",
        projectDescription : "This is a Todo website that I made, because I keep forgetting my homework and a lot of other stuff. So I thought to myself why would I not just make a todo website.",
        projectImage: projectPic3,
        projectTechnologies: [<IoLogoJavascript size="50px"></IoLogoJavascript>,<DiReact size="50px"></DiReact>],
        isLeft: true
    },
    {
        projectTitle : "fifth Project",
        projectDescription : "This connect four game was my first project that I made using React and JavaSrcipt",
        projectImage: projectPic4,
        projectTechnologies: [<IoLogoJavascript size="50px"></IoLogoJavascript>,<DiReact size="50px"></DiReact>],
    },
]