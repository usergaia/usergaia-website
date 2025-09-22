import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { About } from './components/About';
import { Education } from './components/Education';
import { Hobby } from './components/Hobby';

export default function SkillsPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="section-page">
          <h1 className="section-title-h1">
            <span className="section-title-span">Specialization</span>
          </h1>
          <p className="section-desc mt-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            assumenda iure sit incidunt voluptatem voluptas autem vel, ab
            deleniti nulla doloribus natus eaque ipsam. Natus ex magni dolorum
            omnis quae!
          </p>
        </section>
        <About />
        <Education />
        <Hobby />
      </main>
      <Footer />
    </div>
  );
}
