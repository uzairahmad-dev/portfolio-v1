import React from "react";

import { Play } from '../svgComponents/index';

interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-center w-2/5 md:w-1/5">
            <Play className="w-2 h-2 md:w-3 md:h-3 2xl:w-4 2xl:h-4 mr-1 fill-light_primary dark:fill-primary" />
            <p className="font-alegreya text-xs md:text-md lg:text-lg 2xl:text-xl">{text}</p>
        </li>
    );
};

export default ListItem;