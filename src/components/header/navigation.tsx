"use client"

import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Navigation() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      // Get header height (64px mobile, 80px desktop)
      const headerHeight = window.innerWidth >= 768 ? 80 : 64
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav>
      <ul className='flex items-center gap-6'>
        <li>
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className='text-xl font-bold text-foreground hover:text-primary transition-colors'
          >
            WHH32
          </a>
        </li>
        <li className='hidden md:flex items-center gap-4'>
          {navLinks.slice(1).map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group'
            >
              {link.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300' />
            </a>
          ))}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation