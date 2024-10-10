import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Gsap() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const video = videoRef.current;

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".vidContain",
                start: 'top top',
                end: '+=5000',
                scrub: true,
                pin: true,
            },
        })

        tl2.to(video, {
            currentTime: video?.duration
        });
    }, []);

    return (
        <div>
            <section className='h-screen bg-red-500 fcc'>
                <div>mammad1</div>
            </section>
            <div ref={sectionRef} className='h-screen fcc vidContain'>
                <video ref={videoRef} src="/videos/tran2.mp4" className='h-full object-cover'></video>
            </div>
            <section className='h-screen bg-blue-500 fcc'>
                <div>mammad3</div>
            </section>
        </div>
    )
}

export default Gsap