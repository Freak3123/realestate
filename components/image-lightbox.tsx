"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"

type ImageLightboxProps = {
  images: string[]
  initialIndex?: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageLightbox({ images, initialIndex = 0, open, onOpenChange }: ImageLightboxProps) {
  const [index, setIndex] = React.useState(initialIndex)

  React.useEffect(() => {
    if (open) setIndex(initialIndex)
  }, [open, initialIndex])

  const hasNext = index < images.length - 1
  const hasPrev = index > 0

  const next = React.useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : i))
  }, [images.length])

  const prev = React.useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, next, prev])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-5xl">
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          {/* image */}
          <img
            src={images[index] || "/placeholder.svg"}
            alt={`Property image ${index + 1} of ${images.length}`}
            className="h-full w-full object-contain bg-black"
          />
          {/* controls */}
          <button
            aria-label="Previous image"
            onClick={prev}
            disabled={!hasPrev}
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-slate-900 h-10 w-10 grid place-items-center transition",
              !hasPrev && "opacity-40 cursor-not-allowed",
            )}
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            disabled={!hasNext}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-slate-900 h-10 w-10 grid place-items-center transition",
              !hasNext && "opacity-40 cursor-not-allowed",
            )}
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/40 rounded-full px-3 py-1">
            {index + 1} / {images.length}
          </div>
          <button
            aria-label="Close"
            onClick={() => onOpenChange(false)}
            className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white text-slate-900 h-9 w-9 grid place-items-center"
          >
            ✕
          </button>
        </div>
    <DialogTitle/>
      </DialogContent>
    </Dialog>
  )
}
