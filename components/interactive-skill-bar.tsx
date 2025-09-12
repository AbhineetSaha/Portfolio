"use client"

import { useEffect, useState, useRef } from "react"

interface InteractiveSkillBarProps {
  skill: string
  percentage: number
  color?: string
  delay?: number
}

export function InteractiveSkillBar({ skill, percentage, color = "bg-primary", delay = 0 }: InteractiveSkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.5 },
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

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const duration = 1500

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentPercentage = percentage * easeOutCubic

      setAnimatedPercentage(currentPercentage)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, percentage])

  return (
    <div ref={elementRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{Math.round(animatedPercentage)}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300 relative overflow-hidden`}
          style={{ width: `${animatedPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
