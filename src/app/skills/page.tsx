import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TechStacks } from "./skills.components/TechStacks";
import { Certifications } from "./skills.components/Certification";

export default function SkillsPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="section-page">
          <Certifications />
        </section>
        <TechStacks />
      </main>
      <Footer />
    </div>
  );
}
