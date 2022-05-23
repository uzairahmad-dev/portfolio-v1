import React from "react";

interface ToolsListProps {
    tools: string[];
    spy: string;
}

const ToolsList: React.FC<ToolsListProps> = ({ tools, spy }) => {
    return (
        <div className='mt-1 md:mt-2'>
            <ul className='list-none flex items-center gap-2 font-bold font-alegreya text-light_primary dark:text-primary text-xs md:text-sm'>                
                { tools.map((tool,indx) => <li key={indx}>{tool}</li>) }
            </ul>
        </div>
    );
}

export default ToolsList;