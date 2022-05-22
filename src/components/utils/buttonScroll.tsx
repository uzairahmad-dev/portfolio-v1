import React from 'react';
import {Link} from 'react-scroll';

interface ButtonScrollProps {
    text: string;
    to: string;
}

const ButtonScroll:React.FC<ButtonScrollProps> = ({ text, to }) => {
    return (
        <li className="text-sm lg:text-base xl:text-lg 2xl:text-xl px-4 py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-2 2xl:px-8 2xl:py-3 text-light_primary dark:text-primary border-light_primary dark:border-primary border-2 hover:bg-light_h  dark:hover:bg-primary_b hover:border-light_h dark:hover:border-primary_b hover:text-light dark:hover:text-dark cursor-pointer list-none font-alegreya font-bold capitalize rounded outline-none focus:outline-none ease-linear transition-all duration-150">
            <Link to={to} smooth={true}>
                {text}
            </Link>
        </li>
    );
}

export default ButtonScroll;