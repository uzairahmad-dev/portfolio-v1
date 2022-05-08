import React from 'react';

interface ButtonLinkProps {
    text: string;
    handler: () => void;
}

const ButtonLink:React.FC<ButtonLinkProps> = ({ text, handler }) => {
    return (
        <button  
        className="text-light_primary dark:text-primary border-light_primary dark:border-primary border-2 hover:bg-light_h  dark:hover:bg-primary_b hover:border-light_h dark:hover:border-primary_b hover:text-light dark:hover:text-dark font-alegreya font-bold capitalize text-[10px] px-3 py-1 lg:px-5 lg:py-1.5 lg:text-[1rem] rounded outline-none cursor-pointer focus:outline-none mr-1 mb-1 ease-linear transition-colors duration-300" 
        onClick={handler}
        >
            {text}
        </button>
    );
}

export default ButtonLink;