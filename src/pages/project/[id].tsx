import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import DefaultErrorPage from 'next/error';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import type { NextPage, GetStaticProps, GetStaticPaths  } from 'next';

import { findProjects } from '../../lib/airtable';
import ProjectsNav from '../../components/projectsNav';
import ToolsList from '../../components/utils/toolsList';
import ProjectLinks from '../../components/utils/projectLinks';

import { Project } from '../../../interfaces/app_interfaces';

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
          <section className='mt-2 w-[86%] m-auto h-auto'>
              <Zoom top spy={nextProject}>
                <ProjectsNav handlePrev={handlePrev} handleNext={handleNext} />
              </Zoom>
              <div className='w-full flex flex-col md:flex-row items-center gap-3 h-[40vh] mt-5'>
                  <Slide left spy={nextProject}>
                    <div className='w-full md:w-1/2 h-[25vh] md:h-full relative overflow-hidden shadow-lg'>
                        <Image className='rounded-md shadow max-w-full h-auto' src={project.img} alt='lighthouse reality image' layout='fill' objectFit='cover' objectPosition='left top' />
                    </div>
                  </Slide>
                  <Slide right spy={nextProject}>
                  <div className='bg-light_b dark:bg-dark_b w-full h-[25vh] md:h-full md:w-1/2 rounded-md shadow-lg p-4 relative'>
                      <h1 className='text-light_h dark:text-secondary_h font-bold text-[1rem] md:text-[1.2rem] xl:text-[1.4rem] my-2'>{project.title}</h1>
                      <p className='text-light_h dark:text-secondary_h font-light font-alegreya text-[14px] md:text-[1rem] xl:text-[1.2rem] text-justify'>{project.details_1}</p>                    
                      <ToolsList tools={project.libs} />
                  </div>
                  </Slide>
              </div>
              <Slide bottom wait={800} spy={nextProject}>
                <div className='my-4 bg-light_b dark:bg-dark_b rounded-md shadow-lg w-full p-4 flex flex-col md:flex-row md:items-start gap-2 md:gap-10'>
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
          </section>
      </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;

  const projects = await findProjects();
  const projectIds = projects.map((project: Project) => {
    return project.id
  });
  const findProjectById = projects.find((project: Project) => {
    return project.id.toString() === params?.id; //dynamic id
  });
  return {
    props: {
      project: findProjectById ? findProjectById : null,
      ids: projectIds ? projectIds : null
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await findProjects();
  const paths = projects.map((project: Project) => {
    return {
      params: {
        id: project.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export default Projects;