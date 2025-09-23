import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Education } from './components/Education';
import { Hobby } from './components/Hobby';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="flex w-full flex-col items-center justify-center border-b border-violet-800/50 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(255,0,150,0.1),_transparent_50%)] px-6 py-20 text-center sm:py-10">
          <div className="mx-auto flex w-auto grid-cols-2 flex-col items-center gap-0 sm:flex-row">
            <div
              className="relative overflow-hidden rounded-full border-8 border-white shadow-[0_0_20px_rgba(0,0,0,0.3)] shadow-fuchsia-500"
              style={{ width: '19rem', height: '19rem' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                <Image
                  src="/2.png"
                  alt="Profile picture"
                  fill
                  className="rounded-full object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center px-6">
              <h1 className="section-title-h1">
                <span className="section-title-span text-3xl sm:text-6xl">
                  Behind the Code
                </span>
              </h1>
              <p className="section-desc mt-6 text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore assumenda iure sit incidunt voluptatem voluptas autem
                vel, ab deleniti nulla doloribus natus eaque ipsam. Natus ex
                magni dolorum omnis quae!
              </p>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg text-shadow-fuchsia-700 md:h-48 md:w-48">
              <Image
                src="/me.png"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
          </div> */}
        </section>
        <Education />
        <Hobby />
      </main>
      <Footer />
    </div>
  );
}
