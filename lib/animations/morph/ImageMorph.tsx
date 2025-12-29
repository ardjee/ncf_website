"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

interface ImageMorphProps {
  /**
   * Array of image sources to morph between
   */
  images: string[]
  /**
   * Alt text for the images
   */
  alt: string
  /**
   * Duration of each image display in seconds
   * @default 3
   */
  duration?: number
  /**
   * Transition duration in seconds
   * @default 1
   */
  transitionDuration?: number
  /**
   * Width of the image container
   * @default 800
   */
  width?: number
  /**
   * Height of the image container
   * @default 600
   */
  height?: number
  /**
   * Image object fit style
   * @default "cover"
   */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  /**
   * Additional CSS classes for the container
   */
  className?: string
  /**
   * Enable scale animation on morph
   * @default true
   */
  enableScale?: boolean
}

export default function ImageMorph({
  images,
  alt,
  duration = 3,
  transitionDuration = 1,
  width = 800,
  height = 600,
  objectFit = "cover",
  className = "",
  enableScale = true,
}: ImageMorphProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [images.length, duration])

  if (images.length === 0) return null

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height, maxWidth: width }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            scale: enableScale ? 1.1 : 1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: enableScale ? 0.9 : 1,
          }}
          transition={{
            duration: transitionDuration,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className={objectFitClass}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

