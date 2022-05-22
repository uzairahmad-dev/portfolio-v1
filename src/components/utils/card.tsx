import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { RightArrow } from '../svgComponents/index';

interface CardProps {
    title: string;
    description: string;
    image: string;
    id: string;
    cls: string;
}

const Card: React.FC<CardProps> = ({ title, image, description, id, cls }) => {
    return (
        <div className={`flex flex-col mx-2 group ${cls ? cls : ''}`}>
            <div className="z-20 -mb-8">
                <div className="w-full lg:h-[12rem] h-[9rem] relative">
                    <Image className="clip-style-images block" src={image} layout='fill' objectFit='cover' objectPosition='left top' alt={title}/>
                    <div className='in_md:hidden clip-style-images absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary opacity-40 group-hover:top-1/4 group-hover:left-1/4 group-hover:opacity-0 transition-all duration-300 ease-in'></div>
                </div>
            </div>
            <div className="self-center bg-light_b dark:bg-secondary_h p-2 md:p-4 w-[85%] shadow-lg rounded-lg z-10">
                <div className="mt-6 md:mt-4 text-center">
                    <h1 className="font-bold font-alegreya text-base md:text-xl 2xl:text-2xl text-light_h dark:text-dark">{title}</h1>
                    <p className="font-light font-literata text-center md:text-base 2xl:text-lg text-sm text-light_p dark:text-dark">{description}</p>                        
                    <div className='max-w-max mx-auto my-2 duration-300'>
                        <Link href={`/project/${id}`}>
                            <a className="group text-light_h dark:text-dark border-b-2 border-light_primary dark:border-primary_b hover:border-light_h dark:hover:border-dark hover:text-light_primary dark:hover:text-primary_b font-alegreya font-bold capitalize lg:text-base 2xl:text-lg text-sm flex items-center justify-start transition-colors duration-300">
                                View Full Project 
                                <RightArrow className='w-6 h-6 stroke-light_primary dark:stroke-primary dark:group-hover:stroke-dark group-hover:stroke-light_h duration-300' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;