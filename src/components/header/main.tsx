"use client"

import React from 'react'
import Navigation from "./navigation"
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'

function Main() {
    const { theme, setTheme } = useTheme()

    return (
        <div className='fixed flex w-full mx-auto top-0 z-20 px-5'>
            <header className='w-full max-w-screen-xl mx-auto flex justify-between font-bold items-center backdrop-blur-sm md:mt-4 rounded-lg h-20 md:border border-border md:p-4'>
                <Navigation />
                <div className='hidden md:flex'>
                    <ul className='flex gap-2'>
                        <li>language</li>
                        <li onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer' >them</li>
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