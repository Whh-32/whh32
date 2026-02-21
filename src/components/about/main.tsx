"use client"

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import BlurFade from '@/components/ui/blur-fade'
import { Code2, Database, Server, Zap, Palette, Smartphone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust server-side applications with Node.js, Express, and RESTful APIs.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and optimizing database schemas with MongoDB and other NoSQL solutions.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, scalability, and better user experience.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with attention to detail and user experience.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks perfect on all devices, from mobile to desktop.'
  }
]

function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="w-full py-20 px-5 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer specializing in creating beautiful, 
            functional, and user-friendly web applications. With expertise in both frontend 
            and backend technologies, I bring ideas to life through clean code and innovative solutions.
          </p>
        </BlurFade>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
