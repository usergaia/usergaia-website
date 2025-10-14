"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/Project";
import clsx from "clsx";
import { motion } from "framer-motion";

export function Projects() {
  const [openPopupIdx, setOpenPopupIdx] = useState<number | null>(null); // track which popup is open

  return (
    <div
      className="section-page items-center"
      onClick={() => openPopupIdx !== null && setOpenPopupIdx(null)}
    >
      {/* section header */}
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

      {/* Projects list */}
      <motion.div className="project-card-container grid sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="project-card"
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
                quality={100}
                sizes="(max-width: 640px) 105vw, (max-width: 1024px) 60vw, 44vw"
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

              {/* Popup for GitHub links */}
              {openPopupIdx === idx && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                    onClick={() => setOpenPopupIdx(null)}
                  />

                  {/* popup content */}
                  <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                      className="pointer-events-auto w-full max-w-xs rounded-lg bg-white p-5 shadow-xl transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3 className="mb-4 text-center text-base font-semibold text-gray-800">
                        GitHub Repositories
                      </h3>

                      <div className="space-y-2">
                        {p.gh.map((repo, repoIdx) => (
                          <a
                            key={repoIdx}
                            href={repo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpenPopupIdx(null)}
                            className="block w-full rounded-md border border-gray-300 bg-slate-100 px-4 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-slate-200"
                          >
                            {repo.label || `Repository ${repoIdx + 1}`}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* GitHub and Web Links */}
              <div className="flex items-center gap-3">
                {/* Multiple GitHub Links */}
                {p.gh.length > 1 ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenPopupIdx(openPopupIdx === idx ? null : idx);
                    }}
                    className={clsx(
                      "flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-400 bg-slate-200/50 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-400/10",
                      !p.weblink && "flex-1"
                    )}
                    aria-label="View GitHub Links"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </button>
                ) : (
                  // Single GitHub Link
                  <a
                    href={p.gh[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "flex items-center justify-center gap-2 rounded-lg border border-slate-400 bg-slate-200/50 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-400/10",
                      !p.weblink && "flex-1"
                    )}
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}

                {p.weblink && (
                  <a
                    href={p.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-cyan-600/60 px-4 py-2.5 text-sm font-medium text-cyan-800 transition hover:bg-cyan-400/10"
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
