import React from "react";
import { MainBanner } from "../components/MainBanner";
import { Project } from "../components/project";
import pp from "../images/me.jpg";
import p1 from "../images/me.jpg";


const Home = () => {
  return (
    <div>
      <MainBanner>
      </MainBanner>
      <div className="ProjectsWrapper">
        <Project
        projectTitle={"Hamood project"}
        projectDescription={"This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. "}
        projectImage={pp}
        projectTechnologies={"joemama"}>

        </Project>
        <Project
        projectTitle={"Hamood project"}
        projectDescription={"This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. "}
        projectImage={pp}
        projectTechnologies={"joemama"}>

        </Project>
        <Project
        projectTitle={"Hamood project"}
        projectDescription={"This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. "}
        projectImage={pp}
        projectTechnologies={"joemama"}>

        </Project>
        <Project
        projectTitle={"Hamood project"}
        projectDescription={"This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. "}
        projectImage={pp}
        projectTechnologies={"joemama"}>

        </Project>
        <Project
        projectTitle={"Hamood project"}
        projectDescription={"This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. This is a simple project description. "}
        projectImage={pp}
        projectTechnologies={"joemama"}>

        </Project>
      </div>
    </div>
  );
};

export default Home;
