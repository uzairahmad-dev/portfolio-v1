import React from "react";
import LightSpeed from 'react-reveal/LightSpeed';

import Heading from "./utils/heading";
import Skills from "./utils/skills";
import { About } from './svgComponents/index';

const SectionAbout: React.FC = () => {

    const para = "I was the kid other people approached about issues with their phone or laptop. I was the go-to-guy for fixing any technical problems.Today, not much has changed. I’m still the first point of call for technical issues. The difference is I now develop innovative software as well to solve the problems for companies. I love writing code. Ever since writing my first program, I have been obsessed with the ideas of using software to solve practical problems.";
    
    return (
        <section className="mt-20 lg:mt-28">
            <Heading text='About Me' />
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <LightSpeed left>
                    <div className="p-2 mb-2 w-full md:w-2/4 text-xs md:text-md lg:text-lg 2xl:text-xl">
                        <p className="font-alegreya text-light_p dark:text-secondary_p">
                            {para}
                        </p>
                        <div className="mt-3 in_md:mt-2">
                            <p className="font-alegreya text-light_p dark:text-secondary_p">Here are a few technologies I&apos;ve been working with recently:</p>
                            <Skills />
                        </div>
                    </div>
                </LightSpeed>
                <div className="mr-8 in_md:m-auto ">
                    <LightSpeed right><About className="in_md:w-[280px] in_md:h-[220px] w-[350px] h-[300px] 2xl:w-[400px] 2xl:h-[350px]" /></LightSpeed>
                </div> 
            </div>
        </section>
    );
};

export default SectionAbout;