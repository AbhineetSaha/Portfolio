"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "React", level: 90, color: "#61dafb" },
  { name: "TypeScript", level: 85, color: "#3178c6" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Python", level: 75, color: "#3776ab" },
  { name: "AWS", level: 70, color: "#ff9900" },
  { name: "Docker", level: 65, color: "#2496ed" },
]

export function SkillRadarChart() {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0
              const increment = skill.level / 30
              const timer = setInterval(() => {
                current += increment
                if (current >= skill.level) {
                  current = skill.level
                  clearInterval(timer)
                }
                setAnimatedLevels((prev) => {
                  const newLevels = [...prev]
                  newLevels[index] = current
                  return newLevels
                })
              }, 50)
            }, index * 200)
          })
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("skill-radar")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  const centerX = 150
  const centerY = 150
  const radius = 100

  const getPointPosition = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
    const distance = (level / 100) * radius
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    }
  }

  const getLabelPosition = (index: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
    const distance = radius + 30
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    }
  }

  return (
    <Card id="skill-radar" className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
      <h3 className="text-lg font-semibold gradient-text mb-4 text-center">Technical Skills Radar</h3>

      <div className="flex justify-center">
        <svg width="300" height="300" className="overflow-visible">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((percent) => (
            <circle
              key={percent}
              cx={centerX}
              cy={centerY}
              r={(percent / 100) * radius}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {skills.map((_, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
            const endX = centerX + Math.cos(angle) * radius
            const endY = centerY + Math.sin(angle) * radius
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            )
          })}

          {/* Skill polygon */}
          <polygon
            points={animatedLevels
              .map((level, index) => {
                const pos = getPointPosition(index, level)
                return `${pos.x},${pos.y}`
              })
              .join(" ")}
            fill="hsl(var(--primary))"
            fillOpacity="0.2"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />

          {/* Skill points */}
          {animatedLevels.map((level, index) => {
            const pos = getPointPosition(index, level)
            return (
              <circle key={index} cx={pos.x} cy={pos.y} r="4" fill={skills[index].color} className="animate-pulse" />
            )
          })}

          {/* Skill labels */}
          {skills.map((skill, index) => {
            const pos = getLabelPosition(index)
            return (
              <text
                key={index}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium fill-current"
                style={{ color: skill.color }}
              >
                {skill.name}
              </text>
            )
          })}
        </svg>
      </div>
    </Card>
  )
}
