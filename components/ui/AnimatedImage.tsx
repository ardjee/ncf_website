"use client"

import Image from 'next/image'
import { motion } from 'motion/react'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export default function AnimatedImage({ src, alt, className = "" }: AnimatedImageProps) {
  return (
    <motion.div 
      className={`relative w-full aspect-square rounded-lg overflow-hidden shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </motion.div>
    </motion.div>
  )
}

