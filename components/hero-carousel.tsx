"use client";

import * as React from "react";
import { useReducedMotion, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "/07.jpg", alt: "Modern residential development render",
  },
  { src: "/23.jpg", alt: "Premium shopping mall exterior" },
  { src: "/36.jpg", alt: "Coastal mixed-use towers" },
];

export function HeroCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const autoplay = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, duration: prefersReducedMotion ? 10 : 20 },
    prefersReducedMotion ? [] : [autoplay.current]
  );

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      <div
        className="h-[68vh] w-full"
        ref={emblaRef}
        aria-label="Featured project visuals"
      >
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={s.src || "/placeholder.svg"}
                alt={s.alt}
                width={1000}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="pointer-events-auto max-w-2xl">
            <motion.h1
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-pretty text-3xl font-semibold md:text-5xl"
            >
              Shaping skylines with precision, quality, and trust.
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 max-w-xl mx-auto text-base leading-relaxed text-slate-200 md:text-lg"
            >
              Premium residential and mixed-use developments delivered on time
              with rigorous quality standards.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-6 flex justify-center flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View Projects
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
