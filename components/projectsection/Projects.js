import React from "react";
import Project from "./Project";
import { ProjectContainer, ProjectGrid, ProjectHeading } from "./ProjectItems";

const Projects = () => {
  return (
    <div>
      <ProjectContainer>
        <ProjectHeading>Projects</ProjectHeading>
        <ProjectGrid>
          <Project />
        </ProjectGrid>
      </ProjectContainer>
    </div>
  );
};

export default Projects;
