"use client"

import React, { useEffect, useState } from 'react'
import Navigation from "./navigation"
import { Button } from '../ui/button'

function Main() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage for the theme key
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    const handleToggle = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className='fixed flex w-full mx-auto top-0 z-20 px-5'>
            <header className='w-full max-w-screen-xl mx-auto flex justify-between font-bold items-center backdrop-blur-sm md:mt-4 rounded-lg h-20 md:border border-border md:p-4'>
                <Navigation />
                <div>
                    <ul className='flex gap-2'>
                        <li>language</li>
                        <li onClick={handleToggle} className='cursor-pointer' >theme</li>
                        <li>search</li>
                    </ul>
                </div>
                <div className='fcc'>
                    <div className='px-2 mr-2'>Log in</div>
                    <Button className='font-bold'>Sign up</Button>
                </div>
            </header>
        </div>
    )
}

export default Main