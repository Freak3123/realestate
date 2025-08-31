"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function AnimatedSection({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }

  return (
    <motion.section
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  )
}
