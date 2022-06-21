import React from "react";
import "./style.css";

export const Project = ({ projectImage, projectTitle, projectDescription, projectTechnologies}) => {
  return (
    <div className="projectWrapper">
        <div className="ProjectDescription">
            {projectDescription}
        </div>
        <div className="ProjectImage">
          <img src={projectImage} style={{width: "100%", height: "100%", borderRadius: "10px"}}/>
        </div>
        <div className="ProjectContentWrapper">
            <div className="ProjectTitle">
                {projectTitle}
            </div>
            <div className="ProjectTechnologies">
                { projectTechnologies }
            </div>
        </div>
    </div>
  );
};
