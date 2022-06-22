import React from "react";
import { MainBanner } from "../components/MainBanner";
import { Project } from "../components/project";
import { projects } from "../projects";

const Home = () => {
  return (
    <>
      <MainBanner>
      </MainBanner>
      <div className="ProjectsWrapper">
        {
          projects.map((p,i)=>{
            return <Project key={i} {...p}></Project>
          })
        }
      </div>
    </>
  );
};

export default Home;
