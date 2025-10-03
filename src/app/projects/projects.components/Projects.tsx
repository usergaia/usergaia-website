import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/Project';

export function Projects() {
  return (
    <div className="section-page items-center">
      <h1 className="section-title-h1 mb-12 text-cyan-400">
        All <span className="section-title-span">Projects</span>
      </h1>

      <div className="project-card-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div
            key={p.name}
            className="group flex h-auto w-full flex-col overflow-hidden rounded-xl border border-slate-400 bg-slate-300 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:border-t-slate-600 hover:shadow-xl hover:shadow-cyan-700 md:h-[460px]"
          >
            {/* Project image */}
            <div
              className="relative h-[40%] w-full overflow-hidden bg-slate-600"
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
                  e.currentTarget.style.opacity = '1'; // fade in when loaded
                }}
              />
            </div>

            {/* Project content */}
            <div className="flex h-[60%] flex-col p-6">
              <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-cyan-600">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 font-mono text-sm text-gray-700">
                {p.desc}
              </p>

              <div className="my-4 flex flex-wrap gap-2">
                {p.stack.map((ps, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-400/50 px-2 py-1 text-xs text-gray-700"
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
                  className={`flex items-center justify-center gap-2 rounded-lg border border-slate-400 bg-slate-200/50 px-4 py-2.5 text-sm font-medium text-gray-700 transition duration-300 hover:border-gray-400/60 hover:bg-gray-400/10 hover:text-gray-500 ${p.weblink ? 'flex-1' : 'w-full'}`}
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
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-cyan-600/60 px-4 py-2.5 text-sm font-medium text-cyan-800 transition duration-300 hover:border-cyan-600/60 hover:bg-cyan-400/10"
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
  );
}
