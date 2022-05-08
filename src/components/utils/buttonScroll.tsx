import React from 'react';
import {Link} from 'react-scroll';

interface ButtonScrollProps {
    text: string;
    to: string;
}

const ButtonScroll:React.FC<ButtonScrollProps> = ({ text, to }) => {
    return (
        <li className="text-light_primary dark:text-primary border-light_primary dark:border-primary border-2 hover:bg-light_h  dark:hover:bg-primary_b hover:border-light_h dark:hover:border-primary_b hover:text-light dark:hover:text-dark cursor-pointer list-none font-alegreya font-bold capitalize text-[10px] px-3 py-1 lg:px-5 lg:py-1.5 lg:text-[1rem] rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            <Link to={to} smooth={true}>
                {text}
            </Link>
        </li>
    );
}

export default ButtonScroll;