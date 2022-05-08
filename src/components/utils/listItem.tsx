import React from "react";

import { Play } from '../svgComponents/index';

interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-center w-[40%] md:w-[20%]">
            <Play className="w-[8px] h-[8px] md:w-[14px] md:h-[14px] mr-1 fill-light_primary dark:fill-primary" />
            <p className="font-alegreya text-xs md:text-md xl:text-lg">{text}</p>
        </li>
    );
};

export default ListItem;