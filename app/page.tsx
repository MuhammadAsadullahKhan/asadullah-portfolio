import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.16),_transparent_55%)]">
      <SiteHeader />
      <main className="pb-10 pt-4 sm:pb-16 sm:pt-6">
        <HeroSection />
        <ProjectsGrid />
        <ExperienceTimeline />
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
