import React from "react";

import ListItem from "./listItem";

const Skills: React.FC = () => {
    return (
        <div className="mt-2">
            <ul className="text-light_p dark:text-secondary_p w-full">
                <div className="flex justify-around items-center mt-2 mb-3 in_md:mb-2">
                    <ListItem text='React.js' />
                    <ListItem text='Next.js' />
                    <ListItem text='Typescript' />
                </div>
                <div className="flex justify-around items-center mb-3 in_md:mb-2">
                    <ListItem text='Node.js' />
                    <ListItem text='Express.js' />
                    <ListItem text='Nest.js' />
                </div>
                <div className="flex justify-around items-center mb-3 in_md:mb-2">
                    <ListItem text='Elixir' />
                    <ListItem text='Phoenix' />
                    <ListItem text='AWS' />
                </div>
                <div className="flex justify-around items-center mb-3 in_md:mb-2">
                    <ListItem text='Mongodb' />
                    <ListItem text='PostgreSQL' />
                    <ListItem text='Docker' />
                </div>
            </ul>
        </div>
    );
};

export default Skills;