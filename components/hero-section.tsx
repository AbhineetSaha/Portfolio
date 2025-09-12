"use client"
import { ArrowDown, Github, Linkedin, Mail, Code, Zap } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-background">
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse-glow hover:scale-110 transition-transform duration-300" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rotate-45 animate-bounce hover:rotate-90 transition-transform duration-500" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/15 rounded-full animate-pulse hover:bg-accent/30 transition-colors duration-300" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal direction="scale" delay={200}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors duration-300">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance">
            Hi, I'm <span className="gradient-text">Abhineet Saha</span>
          </h1>

          <div className="text-2xl md:text-3xl lg:text-4xl mb-10 h-20 font-medium">
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer 🚀",
                  2000,
                  "Cloud Computing Expert ☁️",
                  2000,
                  "AI/ML Engineer 🤖",
                  2000,
                  "Tech Innovation Leader 💡",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            Computer Science student at <span className="text-primary font-semibold">VIT</span> with a
            <span className="text-primary font-bold">
              {" "}
              <AnimatedCounter end={9.15} suffix=" CGPA" />{" "}
            </span>
            . Passionate about designing technology that enriches everyday experiences through elegant, user-centric
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <MagneticButton
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 animate-pulse-glow text-white font-medium"
            >
              <a href="#projects">Explore My Work</a>
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              className="text-xl px-12 py-6 border-2 border-primary bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white bg-transparent"
            >
              <a href="#contact">Let's Connect</a>
            </MagneticButton>
          </div>

          <div className="flex items-center justify-center gap-8">
            <MagneticButton
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <a href="https://github.com/AbhineetSaha" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <a href="https://linkedin.com/in/abhineetsaha" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <a href="mailto:abhineetsaha.2004@gmail.com">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={800}>
          <div className="fixed -bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors duration-300">
              <ArrowDown className="h-6 w-6 text-primary" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
