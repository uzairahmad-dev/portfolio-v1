import React from "react";
import Flip from 'react-reveal/Flip';

import { Play } from '../svgComponents/index';

interface HeadingProps {
    text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
    return (
        <div className="p-1 lg:pt-3 mt-2">
            <div className="relative flex py-5 items-center gap-4">
                <div className="text-sm flex items-center gap-1">
                    <Play className="fill-light_primary dark:fill-primary" />
                    <h1 className="text-light_h dark:text-secondary_h text-[14px] lg:text-[1.4rem]"><Flip left cascade>{text}</Flip></h1>
                </div>
                <div className="w-3/5 border-t border-light_h dark:border-secondary_h"></div>
            </div>
        </div>
    );
};

export default Heading;