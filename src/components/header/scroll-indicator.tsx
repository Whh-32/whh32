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
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
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
        <span className="text-sm font-medium">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator
