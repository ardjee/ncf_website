"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface TextGenerateEffectProps {
  words: string
  className?: string
  duration?: number
  staggerDelay?: number
}

export function TextGenerateEffect({
  words,
  className = "",
  duration = 0.5,
  staggerDelay = 0.1,
}: TextGenerateEffectProps) {
  const [displayedCount, setDisplayedCount] = useState(0)
  const wordArray = words.split(" ")

  useEffect(() => {
    setDisplayedCount(0)
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < wordArray.length) {
        setDisplayedCount(currentIndex + 1)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, staggerDelay * 1000)

    return () => clearInterval(interval)
  }, [words, staggerDelay, wordArray.length])

  return (
    <div className={className}>
      {wordArray.map((word, index) => {
        const isVisible = index < displayedCount
        const showSpace = isVisible && (index < wordArray.length - 1)
        
        if (!isVisible) {
          return null
        }
        
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {word}
            {showSpace && ' '}
          </motion.span>
        )
      })}
    </div>
  )
}

