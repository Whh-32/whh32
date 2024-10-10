"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExample() {
  const section1 = useRef(null);
  const section2_2 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2.current,
        start: "top top",
        end: "+=7000",
        scrub: true,
        pin: true,
        onLeave: () => {
          ScrollTrigger.refresh();
        },
      },
    });

    tl.to(section2_2.current, { x: 7000, backgroundColor: "yellow", duration: 5 });
  }, []);

  return (
    <div className="bg-black">
      <section className="w-full h-[300vh] bg-red-300" ref={section1}>
        Section 1
      </section>
      <section ref={section2} className="w-full h-[100vh] bg-teal-300 overflow-hidden flex items-center">
        <div ref={section2_2} className="w-[8896px] bg-orange-600">
          Section 2
        </div>
      </section>
      <section className="w-full h-[300vh] bg-fuchsia-400" ref={section3}>
        Section 3
      </section>
    </div>
  );
}
