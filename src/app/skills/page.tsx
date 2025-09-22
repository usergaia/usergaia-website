import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TechStacks } from './components/TechStacks';
import { Certifications } from './components/Certification';

export default function SkillsPage() {
  return (
    <div className="page">
      <Header />
      <main>
        {/* Section 1: Capabilities */}
        <section className="section-page">
          <h1 className="section-title-h1">
            <span className="section-title-span">Specialization</span>
          </h1>
          <p className="section-desc mt-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est,
            quia modi repudiandae quae inventore molestiae dolor! Cumque,
            perferendis eligendi quas quibusdam optio officiis facilis ad id
            atque explicabo harum.
          </p>
        </section>

        {/* Section 2: Tech Stack */}
        <TechStacks />

        {/* Section 3: Certifications & Badges */}
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
