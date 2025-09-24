import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Education } from './components/Education';
import { Hobby } from './components/Hobby';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center border-b border-cyan-400/20 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.1),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.05),_transparent_50%)] px-6 py-20 text-center sm:py-10">
          <div className="mx-auto flex w-auto flex-col items-center gap-8 sm:flex-row">
            {/* --- Profile Image --- */}
            {/* Updated border and shadow to use the cyan theme colors for a cohesive look. */}
            <div
              className="relative flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-800 p-2 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              style={{ width: '18rem', height: '18rem' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/2.png"
                  alt="Profile picture"
                  fill
                  className="rounded-full object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* --- Text Content --- */}
            <div className="mt-4 flex flex-col items-center justify-center px-6 sm:items-start">
              <h1 className="section-title-h1 text-center sm:text-left">
                <span className="section-title-span text-4xl sm:text-5xl">
                  Behind the Code
                </span>
              </h1>
              <p className="section-desc mt-6 text-center text-gray-400 sm:text-left">
                I&apos;m a passionate developer and designer with a knack for
                turning complex ideas into beautiful, intuitive digital
                experiences. I specialize in building exceptional, high-quality
                websites and applications for the web.
              </p>
            </div>
          </div>
        </section>
        <Education />
        <Hobby />
      </main>
      <Footer />
    </div>
  );
}
