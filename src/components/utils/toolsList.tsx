import React from "react";
import Zoom from 'react-reveal/Zoom';

interface ToolsListProps {
    tools: string[];
}

const ToolsList: React.FC<ToolsListProps> = ({ tools }) => {
    return (
        <div className='absolute bottom-2 right-2 in_sm:mt-1 '>
            <ul className='list-none flex items-center gap-2 font-bold font-alegreya text-light_primary dark:text-primary text-[.8rem] md:text-[1rem] xl:text-[1.2rem]'>                
                <Zoom right cascade delay={1000}>
                    { tools.map((tool,indx) => <li key={indx}>{tool}</li>) }
                </Zoom>
            </ul>
        </div>
    );
}

export default ToolsList;