import React from 'react';
import Slide from 'react-reveal/Flip';

import { useMatchMedia } from '../hooks/useMatchMedia';
import { Github, Linkedin, Behance, Twitter } from './svgComponents/index';

const Footer: React.FC = () => {

    const isMobile = useMatchMedia('(max-width: 640px)', true);

    return (
        <>
            <Slide bottom>
                <>
                    <div className="relative flex py-3 items-center z-40">
                        <div className="flex-grow border-t border-light_h dark:border-secondary_h"></div>
                        <p className='flex-shrink mx-4 text-light_h dark:text-secondary_p text-[12px]'><span className="uppercase text-light_primary dark:text-primary  text-[1rem]">Uzair</span> Ahmad</p>
                        <div className="flex-grow border-t border-light_h dark:border-secondary_h"></div>
                    </div>
                    <div className='text-center text-light_p dark:text-secondary_p mb-2 text-[12px]'>
                        &copy; 2022
                    </div>
                </>
            </Slide>
            {
                isMobile &&
                <Slide bottom>
                <div className='flex justify-center items-center gap-5 mt-[1rem] mb-2 md:mt-4 md:mb-4'>
                    <a href='https://github.com/uzairahmad-dev' target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                    <a href='https://www.linkedin.com/in/uzairahmaddev/' target="_blank" rel="noreferrer">
                        <Linkedin />
                    </a>
                    <a href='https://www.behance.net/uzairahmad5' target="_blank" rel="noreferrer">
                        <Behance />
                    </a>
                    <a href='https://twitter.com/uzairahmad_dev' target="_blank" rel="noreferrer">
                        <Twitter />
                    </a>
                </div>
                </Slide>
            }
        </>
    );
};

export default Footer;