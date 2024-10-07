"use client"

import Hero from "@/components/header/hero";
import Skills from "@/components/skills/main"
import Bow from "@/components/bow/main"

export default function Home() {
  return (
    <div>
      <main className="w-full md:mt-56">
        <Hero />
        {/* <div className="w-full mt-56">
          <div className="m-auto max-w-7xl fcc flex-col">
            <p className="text-2xl text-center font-light text-primary">
              I have had the privilege of collaborating with several esteemed companies, delivering high-quality software and applications that meet their unique needs.
            </p>
            <div className="flex gap-8 mt-8">
              <div>zibazi.com</div>
              <div>kargosha.com</div>
              <div>yasan.com</div>
            </div>
          </div>
        </div> */}
        <Bow />
        <Skills />
      </main>
    </div>

  );
}