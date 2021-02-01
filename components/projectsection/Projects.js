import React, { useContext } from "react";
import Project from "./Project";
import ProjectProvider from "./ProjectContext";
import { ProjectContainer, ProjectGrid, ProjectHeading } from "./ProjectItems";

const Projects = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <ProjectProvider>
        <ProjectContainer>
          <ProjectHeading>Projects</ProjectHeading>
          <ProjectGrid>
            {articles.map((article) => (
              <Project article={article} />
            ))}
          </ProjectGrid>
        </ProjectContainer>
      </ProjectProvider>
    </div>
  );
};

export default Projects;
