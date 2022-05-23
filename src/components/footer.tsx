import React from 'react';

import { useMatchMedia } from '../hooks/useMatchMedia';
import { Github, Linkedin, Behance, Twitter } from './svgComponents/index';

const Footer: React.FC = () => {

    const isMobile = useMatchMedia('(max-width: 640px)', true);

    return (
        <>
            <>
                <div className="relative flex py-2 items-center z-40">
                    <div className="flex-grow border-t border-light_h dark:border-secondary_h"></div>
                    <p className='flex-shrink mx-4 text-light_h dark:text-secondary_p text-sm md:text-base'><span className="uppercase text-light_primary dark:text-primary text-base md:text-lg 2xl:text-xl">Uzair</span> Ahmad</p>
                    <div className="flex-grow border-t border-light_h dark:border-secondary_h"></div>
                </div>
                <div className='text-center text-light_p dark:text-secondary_p mb-2 text-base md:text-base'>
                    &copy; 2022
                </div>
            </>
            {
                isMobile &&
                <div className='flex justify-center items-center gap-5 mt-[1rem] mb-2 md:mt-4 md:mb-4'>
                    <a href='https://github.com/uzairahmad-dev' target="_blank" rel="noreferrer">
                        <Github className='w-5 h-5 stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                    <a href='https://www.linkedin.com/in/uzairahmaddev/' target="_blank" rel="noreferrer">
                        <Linkedin className='w-5 h-5 stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                    <a href='https://www.behance.net/uzairahmad5' target="_blank" rel="noreferrer">
                        <Behance className='w-5 h-5 stroke-light_primary group-hover:stroke-light_h fill-light_primary group-hover:fill-light_h dark:stroke-secondary_h dark:fill-secondary_h dark:group-hover:stroke-primary dark:group-hover:fill-primary' />
                    </a>
                    <a href='https://twitter.com/uzairahmad_dev' target="_blank" rel="noreferrer">
                    <Twitter className='w-5 h-5 stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                </div>
            }
        </>
    );
};

export default Footer;