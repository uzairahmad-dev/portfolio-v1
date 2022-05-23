import React from "react";

interface ButtonMailtoProps {
    mailto: string;
    label: string
}

const ButtonMailto:React.FC<ButtonMailtoProps> = ({ mailto, label }) => {
    return (
        <button
            className="text-sm lg:text-base xl:text-lg 2xl:text-xl px-4 py-1 lg:px-5 lg:py-1.5 xl:px-6 xl:py-2 2xl:px-8 2xl:py-3 text-light_primary dark:text-primary border-light_primary dark:border-primary border-2 hover:bg-light_h dark:hover:bg-primary_b hover:border-light_h dark:hover:border-primary_b hover:text-light dark:hover:text-dark font-alegreya font-bold capitalize rounded outline-none cursor-pointer focus:outline-none ease-linear transition-colors duration-300"
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