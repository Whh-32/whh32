"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { ConfettiSideCannons } from "@/components/header/buttonConfetti";
import BlurFade from "@/components/ui/blur-fade";
import RiveComp from "@/components/rive/riveComp";
import Cat from './Cat';

function Hero() {
    return (
        <div className="w-full max-w-5xl mx-auto px-5 relative">
            <div className='h-[400px] absolute right-0 -top-16 z-20'>
                {/* <Image
                    src={heroImage}
                    className='md:absolute top-[-200px] right-0 w-[700px] sm:w-[600px] md:w-[550px] xl:w-[600px]'
                    alt='ts'
                /> */}
                {/* <Cat /> */}
                <RiveComp />
            </div>
            <BlurFade delay={0.25} inView className="flex flex-col items-center md:items-start">
                <h1 className="mt-16 w-full font-heading text-4xl font-normal leading-[1.25] drop-shadow-md sm:mt-0 sm:text-5xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.15] xl:text-6xl xl:leading-[1.15] mb-4 text-center md:text-justify">
                    Become the
                    <strong className="font-bold block text-primary/90">best example</strong>
                    at Your job
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