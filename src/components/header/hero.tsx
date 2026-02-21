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
        <div className="w-full max-w-6xl mx-auto px-5 relative md:flex hero min-h-screen flex items-center pt-16 md:pt-20">
            <div className='fcc'>
                <Skully />
            </div>
            <BlurFade delay={0.25} inView className="flex flex-col items-center md:items-start w-full">
                <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Full-Stack Developer</span>
                </div>
                <h1 className="mt-6 w-full font-heading text-4xl font-normal leading-[1.25] drop-shadow-md sm:mt-8 sm:text-5xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.15] xl:text-6xl xl:leading-[1.15] mb-6 text-center md:text-justify flex flex-col md:mt-0">
                    Creating stunning
                    <strong className="text-primary/90">user-friendly</strong>
                    websites
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-center md:text-left max-w-2xl">
                    I transform ideas into beautiful, functional web experiences.
                    Specialized in React, Next.js, and Node.js development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <ConfettiSideCannons />
                    <Button
                        onClick={() => handleSmoothScroll('contact')}
                        className="group bg-primary hover:bg-primary/90"
                    >
                        Get In Touch
                        <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleSmoothScroll('projects')}
                    >
                        View My Work
                    </Button>
                </div>
            </BlurFade>
            <ScrollIndicator />
        </div>
    )
}

export default Hero