import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import Fade from 'react-reveal/Fade';

import ButtonLink from './utils/buttonLink';
import { Logo, Moon, Sun } from './svgComponents/index';

const Navbar:React.FC = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if(!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark') {
            return (
                <Sun className='w-7 h-7 lg:w-9 lg:h-9 cursor-pointer stroke-light_primary dark:stroke-primary ' onClick={() => setTheme('light')} />
            );
        } else {
            return (
                <Moon className='w-7 h-7 lg:w-9 lg:h-9 cursor-pointer stroke-light_primary dark:stroke-primary' onClick={() => setTheme('dark')} />
            );
        }
    };

    return (
        <Fade top>
            <nav className="flex justify-between items-center p-2">
                <Link href='/'>
                    <a>
                        <Logo className='w-[2.5rem] lg:w-[4.5rem] cursor-pointer fill-light_primary dark:fill-primary' width='100%' height='100%' />
                    </a>
                </Link>
                <div className='flex items-center justify-between gap-6'>
                    {renderThemeChanger()}
                    <ButtonLink handler={() => window.open('/api/resume', '_blank')} text='Resume' />
                </div>
            </nav>
        </Fade>
    );  
}

export default Navbar;