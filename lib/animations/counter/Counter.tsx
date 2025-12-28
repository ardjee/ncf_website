"use client"

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion"
import { useEffect, useState } from "react"

interface CounterProps {
  /**
   * The target value to count up to
   * @default 100
   */
  to?: number
  /**
   * The starting value
   * @default 0
   */
  from?: number
  /**
   * Duration of the animation in seconds
   * @default 5
   */
  duration?: number
  /**
   * Additional CSS classes for styling
   */
  className?: string
}

export default function Counter({
  to = 100,
  from = 0,
  duration = 5,
  className = "",
}: CounterProps) {
  const count = useMotionValue(from)
  const [displayValue, setDisplayValue] = useState(Math.round(from))

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest))
  })

  useEffect(() => {
    const controls = animate(count, to, { duration })
    return () => controls.stop()
  }, [count, to, duration])

  return (
    <motion.span
      className={`text-hero font-bold text-water-deep ${className}`}
      aria-live="polite"
    >
      {displayValue}
    </motion.span>
  )
}
