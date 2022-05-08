import React from "react";

import ListItem from "./listItem";

const Skills: React.FC = () => {
    return (
        <div className="mt-2">
            <ul className="text-light_p dark:text-secondary_p w-full">
                <div className="flex justify-around items-center mt-2 mb-3 in_md:mb-2">
                    <ListItem text='Javascript' />
                    <ListItem text='Typescript' />
                </div>
                <div className="flex justify-around items-center mb-3 in_md:mb-2">
                    <ListItem text='React.js' />
                    <ListItem text='Next.js' />
                </div>
                <div className="flex justify-around items-center mb-3 in_md:mb-2">
                    <ListItem text='Node.js' />
                    <ListItem text='Express.js' />
                </div>
            </ul>
        </div>
    );
};

export default Skills;