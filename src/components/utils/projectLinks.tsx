import React from 'react';

import { Github, Visit, UiDesign } from '../svgComponents/index';

interface ProjectLinksProps {
    url: string;
    ui_url: string;
    code_url: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ url, code_url, ui_url }) => {
    return (
        <div className='px-4 flex justify-start flex-wrap gap-y-4 gap-x-8'>
            <a className='group flex items-center justify-start gap-2 text-light_p dark:text-secondary_p cursor-pointer' href={code_url} target='_blank' rel='noreferrer'>
                <Github className='w-[1rem] h-[1rem] stroke-light_h dark:stroke-primary group-hover:stroke-light_p dark:group-hover:stroke-secondary_p transition duration-300'/>
                <span className='group-hover:text-light_h dark:group-hover:text-primary_b transition duration-200 text-[.8rem] md:text-[1rem] xl:text-[1.2rem]'>Source Code</span>
            </a>
            {
                url &&
                <a className='group flex items-center justify-start gap-2 text-light_p dark:text-secondary_p cursor-pointer' href={url} target='_blank' rel='noreferrer'>
                    <Visit className='w-[1rem] h-[1rem] stroke-light_h dark:stroke-primary group-hover:stroke-light_p dark:group-hover:stroke-secondary_p transition duration-300' />
                    <span className='group-hover:text-light_h dark:group-hover:text-primary_b transition duration-200 text-[.8rem] md:text-[1rem] xl:text-[1.2rem]'>Visit Project</span>
                </a>
            }
            {
                ui_url && 
                <a className='group flex items-center justify-start gap-2 text-light_p dark:text-secondary_p cursor-pointer' href={ui_url} target='_blank' rel='noreferrer'>
                    <UiDesign className='w-[1rem] h-[1rem] stroke-light_h dark:stroke-primary group-hover:stroke-light_p dark:group-hover:stroke-secondary_p transition duration-300' />
                    <span className='group-hover:text-light_h dark:group-hover:text-primary_b transition duration-200 text-[.8rem] md:text-[1rem] xl:text-[1.2rem]'>UI Design</span>
                </a>
            }
        </div> 
    );
}

export default ProjectLinks;