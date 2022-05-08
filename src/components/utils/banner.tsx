import React from 'react';
import Zoom from 'react-reveal/Zoom';

import ButtonScroll from './buttonScroll';
import ButtonMailto from './buttonMailTo';

const Banner: React.FC = () => {

    const bannerPara = "I'm a Pakistan-based software engineer who specializes in building (and occasionally designing) web applications. Proficient in creating user interfaces, developing databases, writing and testing codes and implementing new features based on user feedback.";

    return (
        <Zoom left>
            <section className='w-3/5 mx-auto'>
                <div className='font-alegreya text-center'>
                    <h1 className='text-light_h dark:text-secondary_h font-bold md:text-[2.8rem] xl:text-[3.1rem] text-[2rem]'>
                    <span className='text-light_primary dark:text-primary font-bold'>Uzair</span> Ahmad
                    </h1>
                    <h2 className="text-light_primary dark:text-secondary_h font-literata md:text-[2rem] xl:text-[2.4rem] text-[1.6rem]"><Zoom left cascade>Full Stack Web Developer</Zoom></h2>
                    <p className="text-light_p dark:text-secondary_p sm:text-[1rem] xl:text-[1.4rem]">
                        {bannerPara}
                    </p>
                </div>
                <div className='text-center flex justify-around mt-6'>
                    <ButtonMailto label='Email Me' mailto="mailto:uzairahmad.dev@gmail.com" />
                    <ButtonScroll text='View Projects' to='projects' />
                </div>
            </section>
        </Zoom>
    );
};

export default Banner;