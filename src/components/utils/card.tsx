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
        <div className={`flex flex-col mx-2 ${cls ? cls : ''}`}>
            <div className="z-20 -mb-8">
                <div className="w-full lg:h-[12rem] h-[9rem] relative">
                    <Image className="clip-style-images" src={image} layout='fill' objectFit='cover' objectPosition='left top' alt={title}/>
                </div>
            </div>
            <div className="self-center bg-light_b dark:bg-secondary_h p-2 md:p-4 w-[85%] shadow-lg rounded-lg z-10">
                <div className="mt-6 md:mt-4 text-center">
                    <h1 className="font-bold font-alegreya text-[12px] md:text-[1.2rem] text-light_h dark:text-dark">{title}</h1>
                    <p className="font-light font-literata text-center md:text-[1rem] text-[10px] text-light_p dark:text-dark">{description}</p>                        
                    <div className='max-w-max mx-auto my-2 duration-300'>
                        <Link href={`/project/${id}`}>
                            <a className="group text-light_h dark:text-dark border-b-2 border-light_primary dark:border-primary_b hover:border-light_h dark:hover:border-dark hover:text-light_primary dark:hover:text-primary_b font-alegreya font-bold capitalize text-[10px] lg:text-[1rem] flex items-center justify-start transition-colors duration-300">
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