import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Target, Zap, Trophy } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "B.Tech CSE at VIT with 9.15 CGPA",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Microsoft Azure AI Engineer Associate",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led 12+ developers in Mozilla OSS Community",
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  const achievements = [
    { icon: Target, number: "1.8K+", label: "PyxTrace Downloads" },
    { icon: Zap, number: "100K+", label: "Reviews Processed" },
    { icon: Trophy, number: "75%", label: "Performance Boost" },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Passionate about creating technology solutions that make a real impact. Currently pursuing Computer Science
            at <span className="text-primary font-semibold">VIT</span> while building innovative projects and leading
            technical communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${highlight.gradient} border-2 border-primary/10 animate-scale-in`}
            >
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 animate-pulse-glow">
                  <highlight.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground text-lg">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-slide-in-right">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4">
                <achievement.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-muted-foreground font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card via-background to-card border-2 border-primary/10 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <h3 className="text-3xl font-bold mb-6 text-secondary">My Journey</h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    As a Computer Science student at{" "}
                    <span className="text-primary font-semibold">Vellore Institute of Technology</span>, I've maintained
                    a strong academic record while actively contributing to real-world projects. My experience spans
                    from building performance monitoring tools to developing ML pipelines that process hundreds of
                    thousands of data points.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Beyond academics, I've taken on leadership roles in the{" "}
                    <span className="text-secondary font-semibold">Mozilla Open Source Community</span>, mentoring
                    fellow developers and contributing to global projects. I'm also a{" "}
                    <span className="text-accent font-semibold">Google Dev Sprint '25 finalist</span>, showcasing my
                    ability to innovate under pressure.
                  </p>
                </div>

                <div className="space-y-8 animate-slide-in-right">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg">Full-Stack Development</span>
                      <span className="text-primary font-bold text-xl">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full animate-pulse-glow"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg">Cloud Computing</span>
                      <span className="text-secondary font-bold text-xl">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full animate-pulse-glow"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg">Data Analytics & ML</span>
                      <span className="text-accent font-bold text-xl">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent to-primary h-3 rounded-full animate-pulse-glow"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
