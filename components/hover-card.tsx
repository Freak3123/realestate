"use client"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function HoverCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border bg-card/60 backdrop-blur-sm transition",
        "will-change-transform shadow-sm hover:shadow-md",
        "hover:-translate-y-1",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(29,78,216,0.10), transparent 40%)",
        }}
        onMouseMove={(e) => {
          const el = e.currentTarget as HTMLDivElement
          const rect = el.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          el.style.setProperty("--x", `${x}%`)
          el.style.setProperty("--y", `${y}%`)
        }}
      />
    </div>
  )
}
