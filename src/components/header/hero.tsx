"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { ConfettiSideCannons } from "@/components/header/buttonConfetti";
import BlurFade from "@/components/ui/blur-fade";
import Skully from "@/components/rive/skully";

function Hero() {
    return (
        <div className="w-full max-w-6xl mx-auto px-5 relative md:flex">
            <div className='fcc'>
                <Skully />
            </div>
            <BlurFade delay={0.25} inView className="flex flex-col items-center md:items-start">
                <h1 className="mt-6 w-full font-heading text-4xl font-normal leading-[1.25] drop-shadow-md sm:mt-8 sm:text-5xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.15] xl:text-6xl xl:leading-[1.15] mb-4 text-center md:text-justify flex flex-col md:mt-0">
                    Creating stunning
                    <strong className="text-primary/90">user-friendly</strong>
                    websites
                </h1>
                <div className="flex gap-2">
                    <ConfettiSideCannons />
                    <Button>start free</Button>
                </div>
            </BlurFade>
        </div>
    )
}

export default Hero