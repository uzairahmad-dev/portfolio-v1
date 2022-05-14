import React, { createContext, useReducer } from "react";
 
import { Project, ProjectsAction, ProjectsActionTypes, ProjectsProviderProps } from "../types/app_types";

type AppState = typeof initialState;

const initialState = {
    projects: [] as Project[]
};

export const ProjectsContext = createContext<{
    state: AppState,
    dispatch: React.Dispatch<any>
}>({state: initialState, dispatch: () => null});

const projectsReducer = (state: AppState, action: ProjectsAction) => {
  switch(action.type) {
    case ProjectsActionTypes.SET_PROJECTS: {
      return {...state, projects: action.payload.projects}
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [ state, dispatch ] = useReducer(projectsReducer, initialState);
  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;