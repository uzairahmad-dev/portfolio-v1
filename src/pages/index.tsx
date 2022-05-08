import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import MainHeader from '../components/mainHeader';
import SectionAbout from '../components/sectionAbout';
import Projects from '../components/projects';

import { fetchProjects } from '../../lib/projects';
import { Project } from '../../interfaces/app_interfaces';

interface HomeProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (_) => {
  const projects = await fetchProjects();
  return {
    props: {
      projects
    }
  }
};

const Home: NextPage<HomeProps> = ({ projects }) => {
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
