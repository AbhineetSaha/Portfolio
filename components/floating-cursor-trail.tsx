"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function FloatingCursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let animationId: number
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setIsActive(true)
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      }

      setTrail((prev) => [...prev.slice(-8), newPoint])
    }

    const handleMouseLeave = () => {
      setIsActive(false)
      setTrail([])
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: ((index + 1) / trail.length) * 0.6,
            animationDelay: `${index * 50}ms`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  )
}
