import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Bounce from 'react-reveal/Bounce'

import MainHeader from '../components/mainHeader';
import SectionAbout from '../components/sectionAbout';
import Projects from '../components/projects';
import RightPanel from '../components/rightPanel';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { findProjects } from '../lib/airtable';
import { Project } from '../types/app_types';

interface HomeProps {
  projects: Project[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const projects = await findProjects();
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
      <RightPanel />
      <Navbar />
      <main className='container'>
        <MainHeader />
        <SectionAbout />
        <Projects projects={projects} />
      </main>
      <Footer />
    </>
  )
}

export default Home;
