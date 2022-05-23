import React from 'react';
import Head from 'next/head';

import { Logo } from './svgComponents';

const LoadingScreen: React.FC = () => {
    return (
       <>
         <Head>
            <title>
                Welcome | Uzair Ahmad
            </title>
        </Head>
        <div className='h-screen w-screen bg-light dark:bg-dark relative'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22vw] h-[22vh]'>
                <Logo className='w-full h-full fill-light_primary dark:fill-primary' />
            </div>
        </div>
       </>
    )
}

export default LoadingScreen;