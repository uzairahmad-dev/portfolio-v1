import React, { useState } from "react";
import Slider from 'react-slick';
import Pulse from 'react-reveal/Pulse';

import Heading from "./utils/heading";
import Card from "./utils/card";

import { Project } from '../types/app_types';
import { Play, PlayLeft } from './svgComponents/index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectsProps {
    projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

    const [cardIndex, setCardIndex] = useState(0);

    const NextArrow = ({ onClick }: { onClick?: any }) => {
        return (
            <div className="absolute cursor-pointer z-10 -right-8 lg:right-0 top-1/2 hover:scale-[1.4] transition-transform duration-300" onClick={onClick}>
                <Play className="w-6 h-6 fill-light_primary dark:fill-primary" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }: { onClick?: any}) => {
        return (
            <div className="absolute cursor-pointer z-10 -left-8 lg:left-0 top-1/2 hover:scale-[1.4] transition-transform duration-300" onClick={onClick}>
                <PlayLeft className="w-6 h-6 fill-light_primary dark:fill-primary" />
            </div>
        );
    };

    const settings = {
        infinite:true,
        speed:400,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
    };

    return (
        <section className="mt-4 md:mt-8 mb-6 md:mb-8 w-[99%]" id="projects" >
            <Heading text='Projects' />
            <Pulse>
                <div className="p-2 mx-auto my-2 w-[90%]">
                    <Slider 
                        lazyLoad="progressive"
                        {...settings}
                        beforeChange={(_,next) => setCardIndex(next)}
                    >
                        {
                            projects.map((el,idx) => {
                            return (
                                    <Card 
                                        cls={idx === cardIndex ? 'lg:transition-transform lg:duration-300 ' : 'lg:scale-[0.7] lg:transition-transform lg:duration-300 in_sm:opacity-50 lg:opacity-50'}
                                        key={el.id}
                                        title={el.title}
                                        description={el.description}
                                        id={el.id}
                                        image={el.img}
                                    />
                            )
                            })
                        }
                    </Slider>
                </div>
            </Pulse>
        </section>
    );
};

export default Projects;