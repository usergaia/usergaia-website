import { FaGithub } from 'react-icons/fa';
import { contrib_projects } from '@/data/Project';

export function Contributor() {
  return (
    <section className="section-subpage">
      <h1 className="section-subtitle-h1">
        <span className="section-title-span">Contributor</span>
      </h1>

      <div className="contrib-card-container mx-auto max-w-5xl space-y-6 px-6 py-8">
        {contrib_projects.map((cp) => (
          <div
            key={cp.name}
            onClick={() => window.open(cp.ghlink, '_blank')} // whole card clickable
            className="group flex cursor-pointer flex-col items-start justify-between gap-6 rounded-md border border-slate-400 bg-slate-300 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:border-t-slate-600 hover:shadow-lg hover:shadow-cyan-700 md:flex-row md:items-center md:gap-8 md:p-8"
          >
            {/* Card Content */}
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-cyan-600">
                  {cp.name}
                </h3>
                <FaGithub className="h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-black hover:text-cyan-600" />
              </div>
              <p className="text-left font-mono text-sm leading-relaxed text-gray-700">
                {cp.desc}
              </p>
            </div>

            {/* Visit button */}
            <a
              href={cp.weblink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent card click from firing
              className="w-full rounded-lg border-2 border-cyan-400/30 px-6 py-3 text-center text-sm font-medium text-cyan-600 transition-all duration-300 group-hover:border-cyan-600/60 hover:scale-105 hover:bg-cyan-400/10 hover:text-cyan-600 md:w-auto"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
