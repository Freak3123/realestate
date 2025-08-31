"use client"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

type Props = {
  className?: string
  size?: number
}

export default function AnimatedLogo({ className, size = 40 }: Props) {
  const prefersReduced = useReducedMotion()
  const initial = prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8, rotate: -5 }
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={className}
      aria-label="Lifespark Infra & Consulting"
    >
      <Image
        src="/images/lifespark-logo.jpg"
        alt="Lifespark Infra & Consulting logo"
        width={size * 6}
        height={size * 2}
        priority
      />
    </motion.div>
  )
}
