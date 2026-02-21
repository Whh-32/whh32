"use client"

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import BlurFade from '@/components/ui/blur-fade'
import { ProgressCircular } from './progress'
import { Code, Database, Wrench, Palette } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { percent: 90, title: 'React' },
      { percent: 90, title: 'Next.js' },
      { percent: 90, title: 'JavaScript' },
      { percent: 85, title: 'TypeScript' },
      { percent: 90, title: 'Tailwind CSS' },
      { percent: 80, title: 'Redux' }
    ]
  },
  {
    icon: Database,
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { percent: 70, title: 'Node.js' },
      { percent: 70, title: 'MongoDB' },
      { percent: 75, title: 'Express.js' },
      { percent: 70, title: 'REST APIs' }
    ]
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { percent: 85, title: 'Docker' },
      { percent: 75, title: 'Git' },
      { percent: 70, title: 'Bootstrap' },
      { percent: 80, title: 'jQuery' }
    ]
  },
  {
    icon: Palette,
    title: 'Design',
    color: 'from-orange-500 to-yellow-500',
    skills: [
      { percent: 85, title: 'UI/UX Design' },
      { percent: 90, title: 'Responsive Design' },
      { percent: 80, title: 'Figma' }
    ]
  }
]

function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (categoriesRef.current) {
      const categories = categoriesRef.current.children

      gsap.fromTo(
        categories,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="skills" className="w-full py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a proficient web developer with a strong foundation in various programming 
            languages and technologies. Here's a breakdown of my expertise across different domains.
          </p>
        </BlurFade>

        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div
                key={categoryIndex}
                className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center group/skill"
                      >
                        <ProgressCircular 
                          percent={skill.percent} 
                          title={skill.title} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills