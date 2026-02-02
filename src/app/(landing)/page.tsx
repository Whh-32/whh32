"use client"

import Hero from "@/components/header/hero";
import Skills from "@/components/skills/main"
import Bow from "@/components/bow/main"
import Gsap from '@/components/test/gsap'

export default function Home() {
  return (
    <main className="w-full main">
      <Hero />
      <Bow />
      <Skills />
      <Gsap />
    </main>
  );
}