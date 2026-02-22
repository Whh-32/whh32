"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { ConfettiSideCannons } from "@/components/header/buttonConfetti";
import BlurFade from "@/components/ui/blur-fade";
import Skully from "@/components/rive/skully";
import ScrollIndicator from "@/components/header/scroll-indicator";
import { ArrowDown, Code } from 'lucide-react';

function Hero() {
    const handleSmoothScroll = (targetId: string) => {
        const element = document.getElementById(targetId)
        if (element) {
            // Get header height (64px mobile, 80px desktop)
            const headerHeight = window.innerWidth >= 768 ? 80 : 64
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-5 relative hero min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 ">

            <BlurFade delay={0.25} inView className="flex flex-col items-center md:items-start w-full md:flex-1">
                <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-xs sm:text-sm text-primary font-medium">Full-Stack Developer</span>
                </div>
                <h1 className="mt-4 sm:mt-6 md:mt-0 w-full font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] sm:leading-[1.15] drop-shadow-md mb-4 sm:mb-6 text-center md:text-left flex flex-col">
                    Creating stunning
                    <strong className="text-primary/90">user-friendly</strong>
                    websites
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-center md:text-left max-w-2xl w-full">
                    I transform ideas into beautiful, functional web experiences.
                    Specialized in React, Next.js, and Node.js development.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <Button
                        onClick={() => handleSmoothScroll('contact')}
                        className="group bg-primary hover:bg-primary/90 w-full sm:w-auto"
                    >
                        Get In Touch
                        <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleSmoothScroll('projects')}
                        className="w-full sm:w-auto"
                    >
                        View My Work
                    </Button>
                    <ConfettiSideCannons />
                </div>
            </BlurFade>
            <div className='fcc w-full md:w-auto md:flex-shrink-0'>
                <Skully />
            </div>
            <ScrollIndicator />
        </div>
    )
}

export default Hero