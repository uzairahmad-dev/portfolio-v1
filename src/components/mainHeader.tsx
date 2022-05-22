import React from 'react';

import Banner from './utils/banner';

const MainHeader: React.FC = () => {
    return (
        <header className='w-full in_sm:mt-24 mt-14 2xl:mt-16'>
            <Banner />
        </header>  
    );
};

export default MainHeader;