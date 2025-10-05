import { FaGithub } from "react-icons/fa";
import { contrib_projects } from "@/data/Project";
import { motion } from "framer-motion";

export function Contributor() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -55 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="section-subpage"
    >
      <h1 className="section-subtitle-h1">
        <span className="section-title-span">Contributor</span>
      </h1>

      <div className="contrib-card-container mx-auto max-w-5xl space-y-6 px-6 py-8">
        {contrib_projects.map((cp) => (
          <div
            key={cp.name}
            onClick={() => window.open(cp.ghlink, "_blank")}
            className="group flex cursor-pointer flex-col items-start justify-between gap-6 rounded-md border border-slate-400 bg-slate-300 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:border-t-slate-600 hover:shadow-lg hover:shadow-cyan-700 md:flex-row md:items-center md:gap-8 md:p-8"
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-medium text-gray-900">
                  {cp.name}
                </h3>
                <FaGithub className="h-5 w-5 text-gray-600" />
              </div>
              <p className="text-left font-mono text-sm leading-relaxed text-gray-700">
                {cp.desc}
              </p>
            </div>

            <a
              href={cp.weblink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // prevents button click from triggering parent card click
              className="w-full rounded-lg border border-cyan-600/60 px-6 py-3 text-center text-sm font-medium text-cyan-600 transition-colors duration-200 hover:bg-cyan-400/10 md:w-auto"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
