"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function AnimatedCounter({
  value,
  duration = 1200,
  suffix = "",
  className,
}: {
  value: number
  duration?: number
  suffix?: string
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [value, duration, prefersReducedMotion])

  return (
    <span className={className}>
      {display.toLocaleString()} {suffix}
    </span>
  )
}
