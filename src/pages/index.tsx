import { useContext, useEffect } from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import MainHeader from '../components/mainHeader';
import SectionAbout from '../components/sectionAbout';
import Projects from '../components/projects';

import { ProjectsContext } from '../context/projects-context';

import { findProjects } from '../lib/airtable';
import { Project, ProjectsActionTypes } from '../types/app_types';

interface HomeProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (_) => {
    const projects = await findProjects();
    return {
      props: {
        projects
      }
    }
};

const Home: NextPage<HomeProps> = ({ projects }) => {

  const { dispatch } = useContext(ProjectsContext);

  useEffect(() => {
    dispatch({
      type: ProjectsActionTypes.SET_PROJECTS,
      payload: {
        projects
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>
            Uzair Ahmad | Web Developer
        </title>
      </Head>
      <main className="container relative">
        <MainHeader />
        <SectionAbout />
        <Projects projects={projects} />
      </main>
    </>
  )
}

export default Home;
