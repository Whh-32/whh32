"use client"

import { useRive } from "@rive-app/react-canvas";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const RiveDemo = () => {
    const { RiveComponent } = useRive({
        src: "/rive/skully.riv",
        stateMachines: "State Machine [Skully]",
        autoplay: true,
    });

    return <RiveComponent className="h-full w-full" />;
};

export default function Skully() {
    const skullyRef = useRef(null)

    useGSAP(() => {
        const element = document.querySelector<HTMLElement>('.skully');
        const elementWidth = element?.offsetWidth;
        const elementHeight = element?.offsetHeight;

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: 'top top',
                end: '+=200',
                scrub: 2,
                pin: true,
            }
        })

        // tl1.from(skullyRef.current, {
        //     right: "calc(50% - 200px)",
        //     top: (window.innerHeight - elementHeight!) / 2
        // });

    }, []);

    return (
        <div ref={skullyRef} className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] z-10 skully flex-shrink-0">
            <RiveDemo />
        </div>
    );
}
