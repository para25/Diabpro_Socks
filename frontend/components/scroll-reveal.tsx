"use client"

import type React from "react"
import { useLazyLoad } from "@/hooks/use-lazy-load"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "slide-up" | "slide-in-left" | "slide-in-right" | "scale-in" | "fade-in"
}

export function ScrollReveal({ children, className = "", delay = 0, animation = "slide-up" }: ScrollRevealProps) {
  const { ref, isVisible } = useLazyLoad()

  const animationClasses = {
    "slide-up": "animate-slide-up",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
    "fade-in": "animate-fade-in",
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : "opacity-0"} transition-opacity`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
