import React from 'react';

import Banner from './utils/banner';

const MainHeader: React.FC = () => {
    return (
        <header className='w-full mt-[1rem] lg:mt-[2rem]'>
            <Banner />
        </header>  
    );
};

export default MainHeader;