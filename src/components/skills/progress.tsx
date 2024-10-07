"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

type PropsType = {
    percent: number
    title: string
}

export function ProgressCircular({ percent, title }: PropsType) {
    const [animatedValue, setAnimatedValue] = useState<number>(0)
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Adjust this threshold as needed
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        isVisible &&
            setTimeout(() => {
                setAnimatedValue(percent)
            }, 500);
    }, [isVisible])

    return (
        <div ref={elementRef} className="fcc flex-col">
            <AnimatedCircularProgressBar
                max={100}
                min={0}
                value={animatedValue}
                className="w-32 text-lg"
                gaugePrimaryColor="hsl(var(--primary))"
                gaugeSecondaryColor="hsl(var(--secondary))"
            />

            <div className="mt-4 text-lg text-foreground">{title}</div>
        </div>
    );
}
