"use client";
import { educ } from "@/data/Educ";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="flex flex-col justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="section-subtitle-h1 mb-10 text-center text-cyan-400"
      >
        <span className="text-cyan-200">Milestone</span>
      </motion.h1>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-10 lg:flex-row">
        {/* Left Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <div className="sticky top-24">
            <p className="text-center text-white lg:text-left">
              From curiosity to code, this is where I started piecing together
              the logic behind everything. A growing story of challenges,
              breakthroughs, and the lessons that continue to define me.
            </p>
          </div>
        </motion.div>

        {/* Right Timeline */}
        <div className="lg:w-2/3">
          <div className="flex h-auto w-auto items-center justify-center sm:mx-auto sm:w-full lg:w-210">
            <div className="relative m-5">
              {/* Vertical Timeline Line */}
              <div className="absolute top-0 h-full w-[4px] translate-x-2 bg-cyan-100/50"></div>

              {educ.map((e, idx) => (
                <div key={idx} className="flex items-start justify-start gap-2">
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute flex h-5 w-5 translate-y-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#0a0a1a]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="m-10 mt-0 mr-0 flex w-auto max-w-4xl flex-col items-start justify-center rounded-2xl border-2 border-slate-400 bg-slate-300 p-5 text-white"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <code className="educ-role text-cyan-700">{e.role}</code>
                    <p className="educ-name text-right text-black">{e.name}</p>
                    <p className="educ-year text-black">
                      {e.yearStart} - {e.yearEnd}
                    </p>
                  </motion.div>
                </div>
              ))}

              <div className="flex items-start justify-start gap-2">
                <motion.div
                  className="absolute flex h-5 w-5 translate-y-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#0a0a1a]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                />
                <motion.div
                  className="m-10 mt-0 mr-0 flex w-auto max-w-4xl flex-col items-start justify-center rounded-2xl border-2 border-slate-400 bg-slate-300 p-5 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <code className="educ-role text-cyan-700/30">
                    More coming soon...
                  </code>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
