"use client"

import { useState, useEffect, useRef } from 'react'
import Navigation from "./navigation"
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { Menu, X, Moon, Sun, Search, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Main() {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (headerRef.current) {
            if (scrolled) {
                headerRef.current.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                headerRef.current.style.borderBottomWidth = '1px'
            } else {
                headerRef.current.style.boxShadow = 'none'
                headerRef.current.style.borderBottomWidth = '0px'
            }
        }
    }, [scrolled])

    const handleSmoothScroll = (targetId: string) => {
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
        setMobileMenuOpen(false)
    }

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <header 
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-5 ${
                scrolled 
                    ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
                    : 'bg-background/95 backdrop-blur-sm'
            }`}
        >
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <a 
                            href="#home" 
                            onClick={(e) => {
                                e.preventDefault()
                                handleSmoothScroll('home')
                            }}
                            className='text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/60 transition-all duration-300'
                        >
                            WHH32
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex items-center gap-8'>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleSmoothScroll(link.href.substring(1))
                                }}
                                className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group py-2'
                            >
                                {link.name}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/70 group-hover:w-full transition-all duration-300' />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className='hidden lg:flex items-center gap-3'>
                        <button 
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className='p-2 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-110 active:scale-95'
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className='w-5 h-5 text-foreground' />
                            ) : (
                                <Moon className='w-5 h-5 text-foreground' />
                            )}
                        </button>
                        <button 
                            className='p-2 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-110 active:scale-95'
                            aria-label="Search"
                        >
                            <Search className='w-5 h-5 text-foreground' />
                        </button>
                        <button 
                            className='p-2 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-110 active:scale-95'
                            aria-label="Language"
                        >
                            <Globe className='w-5 h-5 text-foreground' />
                        </button>
                        <div className='h-6 w-px bg-border mx-1' />
                        <Link 
                            href={'/auth/login'} 
                            className='px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors'
                        >
                            Log in
                        </Link>
                        <Button 
                            onClick={() => router.push('/auth/register')} 
                            className='font-semibold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300'
                            size="sm"
                        >
                            Sign up
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className='w-6 h-6 text-foreground' />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className='w-6 h-6 text-foreground' />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='lg:hidden overflow-hidden border-t border-border'
                        >
                            <div className='py-4 space-y-4'>
                                {/* Mobile Navigation Links */}
                                <div className='flex flex-col gap-1'>
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleSmoothScroll(link.href.substring(1))
                                            }}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className='px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors rounded-lg'
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>
                                
                                <div className='border-t border-border pt-4'>
                                    <div className='flex items-center justify-between px-4 mb-4'>
                                        <button 
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                            className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground'
                                        >
                                            {theme === 'dark' ? (
                                                <>
                                                    <Sun className='w-4 h-4' />
                                                    Light Mode
                                                </>
                                            ) : (
                                                <>
                                                    <Moon className='w-4 h-4' />
                                                    Dark Mode
                                                </>
                                            )}
                                        </button>
                                        <div className='flex items-center gap-2'>
                                            <button className='p-2 rounded-lg hover:bg-secondary/50 transition-colors'>
                                                <Search className='w-4 h-4 text-foreground' />
                                            </button>
                                            <button className='p-2 rounded-lg hover:bg-secondary/50 transition-colors'>
                                                <Globe className='w-4 h-4 text-foreground' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 px-4'>
                                        <Link 
                                            href={'/auth/login'} 
                                            onClick={() => setMobileMenuOpen(false)}
                                            className='px-4 py-2.5 text-sm font-medium text-center text-foreground hover:text-primary hover:bg-secondary/50 transition-colors rounded-lg'
                                        >
                                            Log in
                                        </Link>
                                        <Button 
                                            onClick={() => {
                                                router.push('/auth/register')
                                                setMobileMenuOpen(false)
                                            }} 
                                            className='font-semibold w-full bg-primary hover:bg-primary/90'
                                            size="sm"
                                        >
                                            Sign up
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Main