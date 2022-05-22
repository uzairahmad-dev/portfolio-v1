import React from 'react';

import { Play, PlayLeft } from './svgComponents/index';

interface ProjectsNavProps {
    handleNext: () => void;
    handlePrev: () => void;
}

const ProjectsNav: React.FC<ProjectsNavProps> = ({ handleNext, handlePrev }) => {
    return (
        <div className='flex justify-between my-4 md:my-2'>
            <button onClick={handlePrev} className='group flex items-center gap-1 text-light_primary lg:hover:text-light_h dark:text-primary dark:hover:text-primary_b outline-none focus:outline-none font-bold font-alegreya text-sm md:text-base lg:text-lg 2xl:text-xl transition-colors duration-300'>
                <PlayLeft className='in_sm:w-3 in_sm:h-3 2xl:w-5 2xl:h-5 dark:fill-primary dark:group-hover:fill-primary_b group-hover:fill-light_h fill-light_primary' />
                Prev Project
            </button>
            <button onClick={handleNext} className='group flex items-center gap-1 text-light_primary dark:text-primary lg:hover:text-light_h dark:hover:text-primary_b outline-none focus:outline-none font-bold font-alegreya text-sm md:text-base lg:text-lg 2xl:text-xl transition-colors duration-300'>
                Next Project
                <Play className='in_sm:w-3 in_sm:h-3 2xl:w-5 2xl:h-5 dark:fill-primary dark:group-hover:fill-primary_b group-hover:fill-light_h fill-light_primary' />
            </button>
        </div>
    );
} 

export default ProjectsNav;