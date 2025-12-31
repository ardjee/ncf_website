"use client"

import { TextGenerateEffect } from '@/components/ui/shadcn-io/text-generate-effect'

interface HeroSubheaderProps {
  words: string
  className?: string
  duration?: number
  staggerDelay?: number
}

export default function HeroSubheader({
  words,
  className = "text-xl md:text-2xl text-charcoal-light leading-comfortable max-w-3xl mx-auto",
  duration = 0.6,
  staggerDelay = 0.15,
}: HeroSubheaderProps) {
  return (
    <TextGenerateEffect
      words={words}
      className={className}
      duration={duration}
      staggerDelay={staggerDelay}
    />
  )
}

