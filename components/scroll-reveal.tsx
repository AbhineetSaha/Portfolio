"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-8"
        case "down":
          return "opacity-0 -translate-y-8"
        case "left":
          return "opacity-0 translate-x-8"
        case "right":
          return "opacity-0 -translate-x-8"
        case "scale":
          return "opacity-0 scale-95"
        default:
          return "opacity-0 translate-y-8"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100"
  }

  return (
    <div ref={elementRef} className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
