import React from 'react';

export interface Project {
    id: string;
    ui_url: string;
    code_url: string;
    url: string;
    img: string;
    details_1: string;
    details_2: string;
    details_3: string;
    description: string;
    title: string;
    libs: string[];
}

export enum ProjectsActionTypes {
    SET_PROJECTS = "SET_PROJECTS"
  };

export interface ProjectsAction {
    type: ProjectsActionTypes,
    payload?: any 
};

export interface ProjectsProviderProps {
    children: React.ReactNode;
};