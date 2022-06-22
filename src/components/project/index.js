import React from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css"
export const Project = ({ projectImage, projectTitle, projectDescription, projectTechnologies,isLeft}) => {
  Aos.init()
  return (
    <div className={`projectWrapper ${isLeft ? "align-left" : ""}`} data-aos={isLeft ?  "fade-right" : "fade-left"} data-aos-duration={1500}>

        {
          isLeft
          ?<>
          <div className="ProjectImage">
            <img src={projectImage} style={{width: "100%", height: "100%", borderRadius: "10px"}}/>
          </div>
          <div className="ProjectContentWrapper">
            <div className="ProjectTitle">
                {projectTitle}
            </div>
            <div className={`ProjectTechnologies`} style={{justifyContent:"flex-start"}}>
                {projectTechnologies.map((tech,i) =>{
                  return <div key={i} className="ProjectTechnology">{tech}</div>
                })}
            </div>
          </div>
          <div className="ProjectDescription">
            {projectDescription}
          </div>
        </>
          :<>
          <div className="ProjectDescription">
            {projectDescription}
          </div>
          <div className="ProjectContentWrapper">
            <div className="ProjectTitle">
                {projectTitle}
            </div>
            <div className={`ProjectTechnologies`}>
                {projectTechnologies.map((tech,i) =>{
                  return <div key={i} className="ProjectTechnology">{tech}</div>
                })}
            </div>
          </div>
          <div className="ProjectImage">
            <img src={projectImage} style={{width: "100%", height: "100%", borderRadius: "10px"}}/>
          </div>
        </>
        }


    </div>
  );
};
