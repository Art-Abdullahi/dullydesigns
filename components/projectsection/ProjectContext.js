import React, { createContext, useReducer } from "react";
import { projectsData } from "../projectsection/projectData";

export const ProjectsContext = createContext();

const initialState = {
  projects: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setProjects":
      return {
        ...state,
        projects: action.projects,
      };

    default:
      return state;
  }
};

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setProjects = (projects) => {
    dispatch({ type: "setProjects", projects: projects });
  };
  const getProjects = () => {
    try {
      setProjects(projectsData);
    } catch (error) {}
  };
  return (
    <ProjectsContext.Provider
      value={{
        ...state,
        getProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectProvider;
