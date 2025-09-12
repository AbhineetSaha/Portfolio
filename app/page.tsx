import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingParticles } from "@/components/floating-particles"
import { FloatingCursorTrail } from "@/components/floating-cursor-trail"

export default function Portfolio() {
  return (
    <main className="min-h-screen relative scroll-snap-type-y-mandatory">
      <FloatingParticles />
      <FloatingCursorTrail />
      <Navigation />
      <div className="snap-section">
        <HeroSection />
      </div>
      <div className="snap-section">
        <AboutSection />
      </div>
      <div className="snap-section">
        <SkillsSection />
      </div>
      <div className="snap-section">
        <ProjectsSection />
      </div>
      <div className="snap-section">
        <CertificationsSection />
      </div>
      <div className="snap-section">
        <ContactSection />
      </div>
    </main>
  )
}
