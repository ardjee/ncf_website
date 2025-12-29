"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useEffect, useRef } from "react"
import Image from "next/image"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

interface ImageProps {
    id: number
    imagePath?: string
    imageAlt?: string
}

function Image({ id, imagePath, imageAlt }: ImageProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    const defaultImagePath = `/photos/cityscape/${id}.jpg`
    const defaultAlt = `Image ${id}`

    return (
        <section className="h-screen snap-start flex justify-center items-center relative">
            <div className="relative w-[300px] h-[400px] my-5 bg-grey-light overflow-hidden max-[500px]:w-[150px] max-[500px]:h-[200px]">
                <Image
                    src={imagePath || defaultImagePath}
                    alt={imageAlt || defaultAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 500px) 150px, 300px"
                    loading="lazy"
                />
            </div>
            <motion.h2
                className="text-water-deep m-0 font-sans text-[50px] font-bold tracking-[-3px] leading-[1.2] absolute inline-block top-[calc(50%-25px)] left-[calc(50%+120px)]"
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}</motion.h2>
        </section>
    )
}

interface ParallaxProps {
    /**
     * Array of image IDs to display
     * @default [1, 2, 3, 4, 5]
     */
    imageIds?: number[]
    /**
     * Custom image path function that takes an ID and returns a path
     */
    getImagePath?: (id: number) => string
    /**
     * Custom alt text function that takes an ID and returns alt text
     */
    getImageAlt?: (id: number) => string
    /**
     * Additional CSS classes for the container
     */
    className?: string
}

export default function Parallax({
    imageIds = [1, 2, 3, 4, 5],
    getImagePath,
    getImageAlt,
    className = "",
}: ParallaxProps) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    // Apply scroll-snap to html element when component mounts
    useEffect(() => {
        document.documentElement.classList.add("snap-y-mandatory")
        return () => {
            document.documentElement.classList.remove("snap-y-mandatory")
        }
    }, [])

    return (
        <div className={className}>
            {imageIds.map((imageId) => (
                <Image
                    key={imageId}
                    id={imageId}
                    imagePath={getImagePath?.(imageId)}
                    imageAlt={getImageAlt?.(imageId)}
                />
            ))}
            <motion.div
                className="fixed left-0 right-0 h-[5px] bg-water-light bottom-[50px] origin-left"
                style={{ scaleX }}
            />
        </div>
    )
}

