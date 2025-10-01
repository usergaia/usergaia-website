import { FaGithub } from 'react-icons/fa';
import { contrib_projects } from '@/data/Project';
export function Contributor() {
  return (
    <>
      <section className="section-subpage">
        <h1 className="section-subtitle-h1">
          <span className="section-title-span">Contributor</span>
        </h1>
        <div className="contrib-card-container mx-auto max-w-5xl space-y-6 px-6 py-8">
          {contrib_projects.map((cp) => (
            <div
              key={cp.name}
              className="contrib-card group flex flex-col items-start justify-between gap-6 border border-cyan-400/20 p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 md:flex-row md:items-center md:gap-8 md:p-8"
            >
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-medium text-gray-100 transition-colors duration-300 group-hover:text-cyan-400">
                    {cp.name}
                  </h3>
                  <a
                    href={cp.ghlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400/60 transition-colors duration-300 hover:text-cyan-400"
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:animate-pulse group-hover:text-gray-300 hover:animate-none hover:text-white" />
                  </a>
                </div>
                <p className="text-left font-mono text-sm leading-relaxed text-gray-300">
                  {cp.desc}
                </p>
              </div>

              <a
                href={cp.weblink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg border-2 border-cyan-400/30 px-6 py-3 text-center text-sm font-medium text-cyan-400 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/60 hover:border-cyan-400 hover:bg-cyan-400/10 md:w-auto"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
