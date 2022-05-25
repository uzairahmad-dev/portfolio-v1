import React from "react";
import Flip from 'react-reveal/Flip';

import { Play } from '../svgComponents/index';

interface HeadingProps {
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <div className="p-1 lg:pt-3 mt-2">
            <div className="relative flex py-1 md:py-5 items-center gap-4">
                <div className="flex items-center gap-1">
                    <Play className="in_sm:w-3 in_sm:h-3 2xl:w-5 2xl:h-5 fill-light_primary dark:fill-primary" />
                    <h1 className="text-light_h dark:text-secondary_h in_sm:text-sm text-base md:text-xl lg:text-2xl 2xl:text-3xl"><Flip left cascade>{text}</Flip></h1>
                </div>
                <div className="w-3/5 border-t border-light_h dark:border-secondary_h"></div>
            </div>
        </div>
    );
};

export default Heading;