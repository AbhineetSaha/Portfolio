"use client"

import { useState, useEffect } from "react"

interface Confetti {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
}

export function SurpriseConfetti({ trigger }: { trigger: boolean }) {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    if (!trigger) return

    const colors = ["#22c55e", "#84cc16", "#ea580c", "#0891b2", "#ec4899"]
    const newConfetti: Confetti[] = []

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      })
    }

    setConfetti(newConfetti)

    const timer = setTimeout(() => {
      setConfetti([])
    }, 3000)

    return () => clearTimeout(timer)
  }, [trigger])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-bounce"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall 3s linear forwards`,
          }}
        />
      ))}
    </div>
  )
}
