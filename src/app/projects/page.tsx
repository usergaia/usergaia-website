'use client';

import { Header } from '@/components/Header';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Contributor } from '@/app/projects/Contributor';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/Project';

export default function ProjectsPage() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="section-page items-center">
          <h1 className="section-title-h1 mb-12">
            All <span className="section-title-span">Projects</span>
          </h1>
          <div className="project-card-container">
            {projects.map((p, idx) => (
              <div
                key={p.name}
                className="project-card group flex h-[460px] w-full flex-col overflow-hidden rounded-xl text-left"
              >
                <div
                  className="relative h-[40%] w-full overflow-hidden bg-gray-700"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <Image
                    src={p.img}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-all duration-300 group-hover:scale-105"
                    style={{
                      objectFit: 'cover',
                      opacity: 0,
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1'; // Fade in when loaded
                    }}
                  />
                </div>

                <div className="flex h-[60%] flex-col p-6">
                  <h3 className="text-xl font-semibold text-gray-100 transition-colors duration-300 group-hover:text-cyan-400">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 font-mono text-sm text-gray-300">
                    {p.desc}
                  </p>

                  <div className="my-4 flex flex-wrap gap-2">
                    {p.stack.map((ps, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
                      >
                        {ps}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={p.ghlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 rounded-lg border-2 border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gray-400 hover:bg-gray-700 ${p.weblink ? 'flex-1' : 'w-full'}`}
                      aria-label="View on GitHub"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>

                    {p.weblink && (
                      <a
                        href={p.weblink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-cyan-400/30 px-4 py-2.5 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                      >
                        <span>Visit</span>
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Contributor />
      </div>
      <Footer />
    </>
  );
}
