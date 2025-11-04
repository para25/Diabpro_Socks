"use client"

import { useState } from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function LazyImage({
  src = "/placeholder.svg",
  alt = "Image",
  width = 400,
  height = 400,
  className = "",
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary to-muted animate-pulse" />
      )}
    </div>
  )
}
