"use client"

import { motion, Transition } from "motion/react"
import { useState } from "react"

interface ToggleSwitchProps {
  /**
   * Initial state of the toggle switch
   * @default true
   */
  initialValue?: boolean
  /**
   * Callback function called when toggle state changes
   */
  onToggle?: (isOn: boolean) => void
  /**
   * Additional CSS classes for the container
   */
  className?: string
}

/**
 * A toggle switch that demonstrates custom easing functions with both bounce and spring animations.
 * Uses bounce animation when turning off, spring animation when turning on.
 */
export default function ToggleSwitch({
  initialValue = true,
  onToggle,
  className = "",
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(initialValue)

  const handleToggle = () => {
    const newValue = !isOn
    setIsOn(newValue)
    onToggle?.(newValue)
  }

  return (
    <div className={`flex items-center justify-center flex-col min-h-screen ${className}`}>
      <div
        className={`
          w-20 h-[200px] bg-white/20 flex rounded-[50px] p-2.5 cursor-pointer
          ${isOn ? "items-start" : "items-end"}
        `}
        data-is-on={isOn}
        onClick={handleToggle}
      >
        <motion.div
          className="w-20 h-20 bg-gray-100 rounded-[40px] will-change-transform"
          layout
          transition={isOn ? spring : bounce}
        />
      </div>
    </div>
  )
}

/**
 * ================  Constants  =========================
 */

const bounce: Transition = {
  duration: 1.2,
  ease: bounceEase,
}

const spring: Transition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

/**
 * ================  Utils  =========================
 */

// From https://easings.net/#easeOutBounce
function bounceEase(x: number) {
  const n1 = 7.5625
  const d1 = 2.75

  if (x < 1 / d1) {
    return n1 * x * x
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375
  }
}

