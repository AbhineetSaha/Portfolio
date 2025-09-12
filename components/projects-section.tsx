"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Users,
  Download,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedCounter } from "@/components/animated-counter";

export function ProjectsSection() {
  const [privateDialogOpen, setPrivateDialogOpen] = useState(false);
  const [privateProjectTitle, setPrivateProjectTitle] = useState<string | null>(
    null
  );

  const projects = [
    {
      title: "PyxTrace",
      description:
        "A real-time system performance monitoring and visualization tool that mirrors the challenges of large-scale financial systems. Built with a focus on clarity and usability.",
      image: "/system-monitoring-dashboard.jpg",
      technologies: ["Python", "Flask", "Plotly", "GitHub"],
      metrics: [
        { icon: Download, label: "Downloads", value: 1800, suffix: "+" },
        {
          icon: TrendingUp,
          label: "Engagement Increase",
          value: 75,
          suffix: "%",
        },
      ],
      links: {
        github: "https://github.com/AbhineetSaha/pyxTrace",
        demo: "https://pypi.org/project/pyxtrace/",
      },
      status: "Mar 2025 - Present",
    },
    {
      title: "InTrain Tech - Customer Sentiment Analysis",
      description:
        "ML pipeline processing 100K+ reviews to uncover actionable insights for customer-focused decision-making. Optimized for 40% faster inference time.",
      image: "/sentiment-analysis-dashboard.jpg",
      technologies: ["Python", "NumPy", "Scikit-Learn", "NLTK"],
      metrics: [
        { icon: Users, label: "Reviews Processed", value: 100, suffix: "K+" },
        {
          icon: TrendingUp,
          label: "Performance Boost",
          value: 40,
          suffix: "%",
        },
      ],
      private: true,
      links: {
        github: "#",
        demo: "#",
      },
      status: "Jan 2024 - Mar 2024",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real-world applications showcasing my expertise in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                system monitoring
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold">
                machine learning
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-semibold">
                performance optimization
              </span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={200 + index * 100}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02] bg-gradient-to-br from-card to-card/50">
                <div className="relative overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "/placeholder.svg?height=200&width=400&query=modern dashboard interface"
                    }
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
                      >
                        <metric.icon className="h-4 w-4 text-primary" />
                        <div>
                          <div className="font-semibold text-sm bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                            <AnimatedCounter
                              end={metric.value}
                              suffix={metric.suffix}
                              duration={1500}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <MagneticButton
                      variant="outline"
                      size="sm"
                      className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 bg-transparent"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                        onClick={(e) => {
                          if ((project as any).private) {
                            e.preventDefault();
                            setPrivateProjectTitle(project.title);
                            setPrivateDialogOpen(true);
                          }
                        }}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </MagneticButton>
                    <MagneticButton
                      size="sm"
                      className="bg-slate-900 hover:bg-slate-800 text-white font-medium border-0"
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                        onClick={(e) => {
                          if ((project as any).private) {
                            e.preventDefault();
                            setPrivateProjectTitle(project.title);
                            setPrivateDialogOpen(true);
                          }
                        }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Dialog open={privateDialogOpen} onOpenChange={setPrivateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Private Project</DialogTitle>
            <DialogDescription>
              {privateProjectTitle
                ? `${privateProjectTitle} is part of a private company or NDA-bound repository.`
                : "This project is private."}{" "}
              Source code and live demo are not publicly accessible. I’m happy
              to provide a walkthrough, architecture overview, or sanitized
              screenshots on request.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
