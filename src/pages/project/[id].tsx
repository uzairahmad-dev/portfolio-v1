import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import DefaultErrorPage from 'next/error';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import type { NextPage, GetServerSideProps } from 'next';

import { findProjects } from '../../lib/airtable';
import ProjectsNav from '../../components/projectsNav';
import ToolsList from '../../components/utils/toolsList';
import ProjectLinks from '../../components/utils/projectLinks';
import RightPanel from '../../components/rightPanel';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import { Project } from '../../types/app_types';

interface ProjectsPageProps {
    project: Project;
    ids: string[];
}

const Projects: NextPage<ProjectsPageProps> = ({ project, ids }) => {
  const [nextProject, setNextProject] = useState<string>('');
  const [prevProject, setPrevProject] = useState<string>('');

  const router = useRouter();
  const id = router.query.id;
  const currentProject = ids.findIndex(el => el === id);

  useEffect(() => {
    if(!(currentProject === -1)) {
      const nProject = ids[currentProject + 1] || ids[0];
      const pProject = ids[currentProject - 1] || ids[ids.length - 1];

      setNextProject(nProject);
      setPrevProject(pProject);
    }
  });

  if(!project) {
    return <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage statusCode={404} />
    </>
  }

  const handleNext = () => {
    if(!!nextProject) {
      router.push(`/project/${nextProject}`);
    }
  };

  const handlePrev = () => {
    if(!!prevProject) {
      router.push(`/project/${prevProject}`);
    }
  };

  return (
      <>
          <Head>
              <title>
                Project | {project.title}
              </title>
          </Head>
          <RightPanel />
          <Navbar />
          <main className='container'>
            <Zoom top spy={nextProject}>
              <ProjectsNav handlePrev={handlePrev} handleNext={handleNext} />
            </Zoom>
            <div className='w-[98%] flex flex-col gap-2 md:gap-4'>
                <div className='relative in_sm:flex in_sm:flex-col in_sm:gap-3'>
                  <Slide collapse left spy={nextProject}>
                      <div className='w-full h-[12rem] md:w-[67%] md:h-[22rem] relative group rounded-md shadow-lg'>
                        <Image className='rounded-md block' src={project.img} alt={`${project.title} image`} layout="fill" objectFit='cover' objectPosition='left top' />
                        <div className='absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary opacity-40 rounded-md group-hover:left-1/4 group-hover:opacity-0 transition-all duration-300 ease-in'></div>
                      </div>
                  </Slide>
                  <Slide right spy={nextProject}>
                    <div className='md:absolute md:top-20 md:right-1 md:w-2/4 bg-light_b dark:bg-dark_b rounded-md shadow-lg p-4'>
                        <h1 className='text-light_h dark:text-secondary_h font-bold text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] my-2'>{project.title}</h1>
                        <p className='text-light_h dark:text-secondary_h font-light font-alegreya text-[14px] md:text-[1rem] xl:text-[1.2rem] text-justify'>{project.details_1}</p>                    
                        <div className='flex justify-end'>
                          <ToolsList tools={project.libs} spy={nextProject} />  
                        </div>    
                    </div>
                  </Slide>
                </div>
                <Slide bottom spy={nextProject}>
                  <div className='bg-light_b dark:bg-dark_b rounded-md shadow-lg p-4 flex flex-col md:flex-row md:items-start gap-2 md:gap-10'>
                      <div className='w-full md:w-2/3'>
                          <h1 className='text-light_h dark:text-secondary_h font-bold text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] mb-2'>Project Details</h1>
                          <p className='text-light_p dark:text-secondary_p font-light font-alegreya text-[14px] md:text-[1rem] xl:text-[1.2rem] text-justify mb-2'>{project.details_2}</p>
                          <p className='text-light_p dark:text-secondary_p font-light font-alegreya text-[14px] md:text-[1rem] xl:text-[1.2rem] text-justify mb-2'>{project.details_3}</p>
                      </div>
                      <div className='w-full md:w-1/3'>
                          <h1 className='text-light_h dark:text-secondary_h font-bold text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] mb-4 md:mb-2'>Project Links</h1>                    
                          <ProjectLinks code_url={project.code_url} url={project.url} ui_url={project.ui_url} />         
                      </div>
                  </div>
              </Slide>
            </div>
          </main>
          <Footer />
      </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const projects = await findProjects();
  const projectIds = projects.map((project: Project) => {
    return project.id
  });
  const currentProject = projects.find((project: Project) => {
    return project.id.toString() === id; //dynamic id
  });
  return {
    props: {
      project: currentProject ? currentProject : null,
      ids: projectIds ? projectIds : null,
    },
  };
}

export default Projects;