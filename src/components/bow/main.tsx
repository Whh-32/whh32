import React from 'react'

import './bow.css'

function Main() {
    return (
        <div className="h-56 mt-20 mb-5">
            <div className="mx-auto h-full max-w-7xl relative overflow-hidden flex justify-center items-center">
                <div className="aspect-square w-[300%] absolute right-1/2 transform translate-x-1/2 translate-y-1/2 rounded-full border-2 border-secondary animate-neon neon-effect half-circle"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
            </div>
        </div>
    )
}

export default Main