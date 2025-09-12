import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Wrench, BarChart3, Layers } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { InteractiveSkillBar } from "@/components/interactive-skill-bar"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 82 },
      ],
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      barColor: "bg-primary",
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "ReactJS", level: 87 },
        { name: "ExpressJS", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 85 },
      ],
      gradient: "from-secondary/20 to-secondary/5",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
      barColor: "bg-secondary",
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Matplotlib", level: 82 },
        { name: "Power BI", level: 78 },
        { name: "Plotly", level: 85 },
      ],
      gradient: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      barColor: "bg-accent",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Azure", level: 80 },
        { name: "GitHub Actions", level: 75 },
        { name: "REST APIs", level: 88 },
        { name: "Docker", level: 70 },
      ],
      gradient: "from-chart-4/20 to-chart-4/5",
      iconBg: "bg-chart-4/20",
      iconColor: "text-chart-4",
      barColor: "bg-chart-4",
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Azure SQL", level: 82 },
      ],
      gradient: "from-chart-5/20 to-chart-5/5",
      iconBg: "bg-chart-5/20",
      iconColor: "text-chart-5",
      barColor: "bg-chart-5",
    },
    {
      title: "Tools & Concepts",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 85 },
      ],
      gradient: "from-chart-3/20 to-chart-3/5",
      iconBg: "bg-chart-3/20",
      iconColor: "text-chart-3",
      barColor: "bg-chart-3",
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A comprehensive toolkit spanning{" "}
              <span className="text-primary font-semibold">full-stack development</span>,{" "}
              <span className="text-secondary font-semibold">cloud computing</span>, and{" "}
              <span className="text-accent font-semibold">data analytics</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card
                className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${category.gradient} border-2 border-primary/10 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 ${category.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <InteractiveSkillBar
                      key={skillIndex}
                      skill={skill.name}
                      percentage={skill.level}
                      color={category.barColor}
                      delay={index * 100 + skillIndex * 50}
                    />
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
