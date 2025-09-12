import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Users, Github } from "lucide-react";

export function CertificationsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Microsoft Certified: Azure AI Engineer Associate",
      type: "Professional Certification",
      description:
        "Expertise in designing and implementing AI solutions on Microsoft Azure platform",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Github,
      title: "GitHub Foundations",
      type: "Technical Certification",
      description:
        "Proficiency in version control, collaboration, and GitHub workflows",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Trophy,
      title: "Google Dev Sprint '25 Finalist",
      type: "Competition Achievement",
      description:
        "Created and presented scalable prototype showcasing creativity and technical execution",
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      icon: Users,
      title: "Technical Lead - Mozilla OSS Community",
      type: "Leadership Role",
      description:
        "Led cross-functional team of 12+ developers, mentoring on GitHub workflows and architecture",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and leadership achievements that
            demonstrate my commitment to continuous learning and community
            contribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${achievement.color} group-hover:scale-110 transition-transform`}
                  >
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-balance">
                        {achievement.title}
                      </h3>
                      <Badge variant="secondary" className="ml-2">
                        {achievement.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-pretty">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
