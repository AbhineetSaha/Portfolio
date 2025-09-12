"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-600" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Python", level: 95, color: "bg-yellow-500" },
  { name: "Next.js", level: 88, color: "bg-gray-800" },
  { name: "MongoDB", level: 75, color: "bg-green-600" },
  { name: "AWS", level: 70, color: "bg-orange-500" },
  { name: "Docker", level: 65, color: "bg-blue-400" },
]

export function InteractiveSkillBubbles() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map((skill) => skill.name))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div
            className={`
              relative w-20 h-20 mx-auto rounded-full flex items-center justify-center
              transition-all duration-500 transform
              ${animatedSkills.includes(skill.name) ? "scale-100 opacity-100" : "scale-0 opacity-0"}
              ${hoveredSkill === skill.name ? "scale-110 shadow-lg" : ""}
              bg-gradient-to-br from-primary to-secondary
            `}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <span className="text-white font-bold text-xs text-center px-2">{skill.name}</span>

            {/* Skill Level Ring */}
            <div className="absolute inset-0 rounded-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${skill.level}, 100`}
                  strokeLinecap="round"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{
                    strokeDasharray: animatedSkills.includes(skill.name) ? `${skill.level}, 100` : "0, 100",
                    transition: "stroke-dasharray 1s ease-in-out 0.5s",
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Skill Level Badge */}
          {hoveredSkill === skill.name && (
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-scale-in bg-primary text-primary-foreground">
              {skill.level}%
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}
