"use client"

import Hero from "@/components/header/hero";
import About from "@/components/about/main";
import Skills from "@/components/skills/main"
import Bow from "@/components/bow/main"
import Projects from "@/components/projects/main";
import Contact from "@/components/contact/main";
import Footer from "@/components/footer/main";

export default function Home() {
  return (
    <main className="w-full main">
      <section id="home">
        <Hero />
      </section>
      <Bow />
      <section id="about" className="scroll-mt-16 md:scroll-mt-20">
        <About />
      </section>
      <section id="skills" className="scroll-mt-16 md:scroll-mt-20">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-16 md:scroll-mt-20">
        <Projects />
      </section>
      <section id="contact" className="scroll-mt-16 md:scroll-mt-20">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}