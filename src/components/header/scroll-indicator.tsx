"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      className="sm:flex absolute bottom-6 md:bottom-10  cursor-pointer z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={handleScroll}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator
