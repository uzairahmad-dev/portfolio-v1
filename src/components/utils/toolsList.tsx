import React from "react";
import Zoom from 'react-reveal/Zoom';

interface ToolsListProps {
    tools: string[];
    spy: string;
}

const ToolsList: React.FC<ToolsListProps> = ({ tools, spy }) => {
    return (
        <div className='mt-3'>
            <ul className='list-none flex items-center gap-2 font-bold font-alegreya text-light_primary dark:text-primary text-xs md:text-sm'>                
                <Zoom right cascade spy={spy}>
                    { tools.map((tool,indx) => <li key={indx}>{tool}</li>) }
                </Zoom>
            </ul>
        </div>
    );
}

export default ToolsList;