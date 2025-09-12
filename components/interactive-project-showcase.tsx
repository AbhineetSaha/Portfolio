"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization with machine learning insights",
    image: "/system-monitoring-dashboard.jpg",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    github: "#",
    live: "#",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Sentiment Analysis Platform",
    description: "NLP-based sentiment analysis for social media monitoring",
    image: "/sentiment-analysis-dashboard.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "OpenAI"],
    github: "#",
    live: "#",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "Scalable microservices architecture with Docker & Kubernetes",
    image: "/microservices-architecture.png",
    tech: ["Docker", "Kubernetes", "Go", "PostgreSQL"],
    github: "#",
    live: "#",
    color: "from-orange-500 to-red-600",
  },
]

export function InteractiveProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsFlipped(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsFlipped(false)
  }

  const project = projects[currentProject]

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold gradient-text">Featured Projects</h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={prevProject}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={nextProject}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="perspective-1000">
        <Card
          className={`relative h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d hover-lift ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover mix-blend-overlay"
            />
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm opacity-90 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-primary/20 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 gradient-text">{project.title}</h4>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="mb-6">
              <h5 className="font-semibold mb-3">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <Button size="sm" className="flex-1">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Project indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentProject(index)
              setIsFlipped(false)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentProject ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  )
}
