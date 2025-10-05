import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/Project";
import clsx from "clsx";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <div className="section-page items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        animate={{ y: [0, -5, 0] }}
        className="section-title-h1 mb-12 text-cyan-400"
      >
        All <span className="section-title-span">Projects</span>
      </motion.h1>

      <motion.div className="project-card-container grid sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            key={p.name}
            className="flex h-auto w-full flex-col overflow-hidden rounded-xl border border-slate-400 bg-slate-300 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:border-t-slate-600 hover:shadow-lg hover:shadow-cyan-700 md:h-[460px]"
            style={{ contentVisibility: "auto" }}
          >
            {/* Project image */}
            <div className="relative mb-3 h-[180px] w-full overflow-hidden rounded-t-md bg-slate-600">
              <Image
                src={p.img}
                alt={`Screenshot of ${p.name}`}
                fill
                style={{ objectFit: "cover" }}
                priority={idx < 3}
              />
            </div>

            {/* Project content */}
            <div className="flex h-[60%] flex-col p-6">
              <h3 className="text-base font-semibold text-gray-900">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 font-mono text-sm text-gray-700">
                {p.desc}
              </p>

              <div className="my-4 flex flex-wrap gap-2">
                {p.stack.map((ps, stackIdx) => (
                  <span
                    key={`${p.name}-${ps}-${stackIdx}`}
                    className="rounded-full bg-slate-400/50 px-2 py-1 text-xs text-gray-700"
                  >
                    {ps}
                  </span>
                ))}
              </div>

              {/* ghlink */}
              <div className="flex items-center gap-3">
                <a
                  href={p.ghlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "flex items-center justify-center gap-2 rounded-lg border border-slate-400 bg-slate-200/50 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-400/10",
                    !p.weblink && "flex-1"
                  )}
                  aria-label="View on GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                {/* weblink */}
                {p.weblink && (
                  <a
                    href={p.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-cyan-600/60 px-4 py-2.5 text-sm font-medium text-cyan-800 transition-colors duration-200 hover:bg-cyan-400/10"
                  >
                    <span>Visit</span>
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
