import React, { useContext } from "react";
import Project from "./Project";
import ProjectProvider from "./ProjectContext";
import { ProjectContainer, ProjectGrid, ProjectHeading } from "./ProjectItems";

const Projects = () => {
  return (
    <div>
      <ProjectProvider>
        <ProjectContainer>
          <ProjectHeading>Projects</ProjectHeading>
          <ProjectGrid>
            <Project />
          </ProjectGrid>
        </ProjectContainer>
      </ProjectProvider>
    </div>
  );
};

export default Projects;
