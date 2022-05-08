import React from 'react';
import Bounce from 'react-reveal/Bounce';

import {useMatchMedia } from '../hooks/useMatchMedia';
import { Github, Linkedin, Behance, Twitter } from './svgComponents/index';

const RightPanel: React.FC = () => {

    const isNotMobile = useMatchMedia('(min-width: 640px)', true);

    return (
        <Bounce bottom>
            {
                isNotMobile &&
                <div className='fixed bottom-[1rem] right-[2rem] p-2 flex flex-col gap-5 z-50'>
                    <a className='group ease-in duration-150 hover:-translate-y-1' href='https://github.com/uzairahmad-dev' target="_blank" rel="noreferrer">
                        <Github className='stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                    <a className='group ease-in duration-150 hover:-translate-y-1' href='https://www.linkedin.com/in/uzairahmaddev/' target="_blank" rel="noreferrer">
                        <Linkedin className='stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                    <a className='group ease-in duration-150 hover:-translate-y-1' href='https://www.behance.net/uzairahmad5' target="_blank" rel="noreferrer">
                        <Behance className='stroke-light_primary group-hover:stroke-light_h fill-light_primary group-hover:fill-light_h dark:stroke-secondary_h dark:fill-secondary_h dark:group-hover:stroke-primary dark:group-hover:fill-primary' />
                    </a>
                    <a className='group ease-in duration-150 hover:-translate-y-1' href='https://twitter.com/uzairahmad_dev' target="_blank" rel="noreferrer">
                        <Twitter className='stroke-light_primary group-hover:stroke-light_h dark:stroke-secondary_h dark:group-hover:stroke-primary' />
                    </a>
                </div>
        }
        </Bounce>
    );
};

export default RightPanel;