import { NavBar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/subsystems-section"; 
import { EducationSection } from "@/components/sections/education-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { InternshipSection } from "@/components/sections/internship-section";
import { Footer } from "@/components/footer"; // <-- 1. ADDED IMPORT

export default function PortfolioPage() {
  return (
    // Added flex and flex-col to main so the footer sits correctly at the bottom
    <main className="min-h-screen bg-zinc-50 bg-[linear-gradient(to_right,rgba(34,197,94,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.25)_1px,transparent_1px)] bg-[size:14px_24px] text-zinc-900 font-sans selection:bg-cyan-500/30 flex flex-col">
      
      <NavBar /> 

      {/* Added flex-grow so this section expands and pushes the footer down */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 flex flex-col pt-16 flex-grow">
        <HeroSection />
        <ExperienceSection />
        <InternshipSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      <Footer /> {/* <-- 2. ADDED FOOTER COMPONENT */}
    </main>
  );
}