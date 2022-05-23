import React from 'react';

import ButtonScroll from './buttonScroll';
import ButtonMailto from './buttonMailTo';

const Banner: React.FC = () => {

    const bannerPara = "I'm a Pakistan-based software engineer who specializes in building (and occasionally designing) web applications. Proficient in creating user interfaces, developing databases, writing and testing codes and implementing new features based on user feedback.";

    return (
            <section className='w-full md:w-4/5 lg:w-3/5 mx-auto'>
                <div className='font-alegreya text-center'>
                    <h1 className='text-light_h dark:text-secondary_h font-bold text-4xl xl:text-5xl 2xl:text-6xl'>
                        <span className='text-light_primary dark:text-primary font-bold'>Uzair</span> Ahmad
                    </h1>
                    <h2 className="text-light_primary dark:text-secondary_h font-literata my-1 text-xl xl:text-3xl 2xl:text-4xl">Full Stack Web Developer</h2>
                    <p className="text-light_p dark:text-secondary_p text-md md:text-xl xl:text-2xl 2xl:text-3xl">
                        {bannerPara}
                    </p>
                </div>
                <div className='text-center flex justify-around mt-4 lg:mt-6'>
                    <ButtonMailto label='Email Me' mailto="mailto:uzairahmad.dev@gmail.com" />
                    <ButtonScroll text='View Projects' to='projects' />
                </div>
            </section>
    );
};

export default Banner;