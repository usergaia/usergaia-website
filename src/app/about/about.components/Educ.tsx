"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { elemData, hsData, collData } from "@/data/Educ";

export function Education() {
  const [currentImg, setCurrentImg] = useState(0);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % elemData.length);
  const prevImg = () =>
    setCurrentImg((prev) => (prev - 1 + elemData.length) % elemData.length);
  const current = elemData[currentImg];

  return (
    <section className="flex flex-col justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: -55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h1 className="section-subtitle-h1 text-center text-cyan-400">
          <span className="text-cyan-200">Education</span>
        </h1>

        <p className="m-5 mx-auto flex w-1/2 items-center justify-center text-center text-white">
          This section highlights my educational background from primary school
          through tertiary studies. It reflects the foundation and experiences
          that have guided my academic and personal growth.
        </p>
      </motion.div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 lg:flex-row">
        {/* primary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="project-card relative flex !h-170 w-full flex-col items-center p-4 lg:w-1/5"
        >
          <div className="relative mb-2 h-75 w-full overflow-hidden rounded-lg bg-gray-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden"
              >
                <Image
                  src={current.img}
                  alt={current.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </motion.div>
            </AnimatePresence>

            {/* pagination */}
            <button
              onClick={prevImg}
              className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full bg-slate-600/60 p-2 text-gray-100 transition-all duration-300 hover:scale-110 hover:bg-slate-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImg}
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-slate-600/60 p-2 text-gray-100 transition-all duration-300 hover:scale-110 hover:bg-slate-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col p-6">
            <div className="border-b border-gray-100"></div>

            <div className="flex-1 py-5">
              <h3 className="text-center text-sm leading-tight font-bold text-gray-900 transition-colors duration-300">
                {current.name}
              </h3>
              <code className="flex items-center justify-center text-xs text-gray-500">
                {current.yearIn} - {current.yearOut}{" "}
              </code>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-center rounded-md bg-gray-100 px-1 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase">
                {current.level}
              </div>

              <p className="h-22 text-center text-sm leading-relaxed text-gray-600">
                {current.desc}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="hidden items-center justify-center text-cyan-400 lg:flex"
        >
          <span className="text-2xl">→</span>
        </motion.div>

        {/* hs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="project-card relative flex !h-170 w-full flex-col items-center p-4 lg:w-1/5"
        >
          <div className="relative mb-2 h-75 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src={hsData.img}
              alt={hsData.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
            />
          </div>

          <div className="flex flex-col p-6">
            <div className="border-b border-gray-100"></div>

            <div className="flex-1 py-5">
              <h3 className="text-center text-sm leading-tight font-bold text-gray-900 transition-colors duration-300">
                {hsData.name}
              </h3>
              <code className="flex items-center justify-center text-xs text-gray-500">
                {hsData.yearIn} - {hsData.yearOut}
              </code>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-center rounded-md bg-gray-100 px-1 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase">
                {hsData.level}
              </div>

              <p className="text-center text-sm leading-relaxed text-gray-600">
                {hsData.desc}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="hidden items-center justify-center text-cyan-400 lg:flex"
        >
          <span className="text-2xl">→</span>
        </motion.div>

        {/* college */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="project-card relative flex !h-170 w-full flex-col items-center p-4 lg:w-1/5"
        >
          <div className="relative mb-2 h-75 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src={collData.img}
              alt={collData.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
            />
          </div>
          <div className="flex flex-col p-6">
            <div className="border-b border-gray-100"></div>

            <div className="flex-1 py-5">
              <h3 className="text-center text-sm leading-tight font-bold text-gray-900 transition-colors duration-300">
                {collData.name}
              </h3>
              <code className="flex items-center justify-center text-xs text-gray-500">
                {collData.yearIn} - {collData.yearOut}{" "}
              </code>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-4">
              <div className="flex items-center justify-center rounded-md bg-gray-100 px-1 py-1 text-center text-xs font-semibold tracking-wide text-gray-700 uppercase">
                {collData.level}
              </div>

              <p className="text-center text-sm leading-relaxed text-gray-600">
                {collData.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
