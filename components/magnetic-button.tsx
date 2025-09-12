"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "default",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const distance = Math.sqrt(x * x + y * y)
    const maxDistance = 50

    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      const moveX = x * strength * 0.3
      const moveY = y * strength * 0.3

      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`
    }
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = "translate(0px, 0px) scale(1)"
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`transition-all duration-200 ease-out ${className} ${isHovered ? "shadow-lg" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
