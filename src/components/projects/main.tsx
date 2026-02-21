"use client"

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import BlurFade from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: 'bg-gradient-to-br from-green-500 to-teal-600',
    github: '#',
    live: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media metrics with data visualization, reporting, and insights.',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-pink-500 to-red-600',
    github: '#',
    live: '#'
  },
  {
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    tech: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
    image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    github: '#',
    live: '#'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, syntax highlighting, and SEO optimization.',
    tech: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    image: 'bg-gradient-to-br from-orange-500 to-yellow-600',
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time messaging application with end-to-end encryption, file sharing, and group chat capabilities.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    github: '#',
    live: '#'
  }
]

function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (projectsRef.current) {
      const projectCards = projectsRef.current.children

      gsap.fromTo(
        projectCards,
        {
          y: 150,
          opacity: 0,
          rotationX: -15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="projects" className="w-full py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <BlurFade delay={0.1} inView className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise 
            in web development and design.
          </p>
        </BlurFade>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group/btn bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
