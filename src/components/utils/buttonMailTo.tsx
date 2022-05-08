import React from "react";

interface ButtonMailtoProps {
    mailto: string;
    label: string
}

const ButtonMailto:React.FC<ButtonMailtoProps> = ({ mailto, label }) => {
    return (
        <button
            className="text-light_primary dark:text-primary border-light_primary dark:border-primary border-2 hover:bg-light_h  dark:hover:bg-primary_b hover:border-light_h dark:hover:border-primary_b hover:text-light dark:hover:text-dark cursor-pointer font-alegreya font-bold capitalize text-[10px] px-3 py-1 lg:px-5 lg:py-1.5 lg:text-[1rem] rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </button>
    );
};

export default ButtonMailto;