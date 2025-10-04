"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePagination } from "@/hooks/paginationHook";
import { certificates } from "@/data/Certs";
import { CertProps } from "@/types/component.types";

// 3x3 chunk display
const chunkArray = (arr: CertProps[], size: number): CertProps[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export function Certifications() {
  const sortedCerts = [...certificates].sort(
    (a, b) => new Date(b.dateRec).getTime() - new Date(a.dateRec).getTime()
  );

  const groups = chunkArray(sortedCerts, 9);
  const { direction, currentIndex, goToGroup, prevGroup, nextGroup } =
    usePagination(groups);
  const currentGroup = groups[currentIndex];

  return (
    <>
      <h1 className="section-subtitle-h1 mb-5 text-cyan-400">
        <span className="section-title-span">Certifications</span>
      </h1>

      <div className="mt-4 min-h-101">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: string) => ({
                x: dir === "right" ? 50 : -50,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (dir: string) => ({
                x: dir === "right" ? -50 : 50,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentGroup.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${cert.title} from ${cert.provider}`}
                className="group relative flex items-center rounded-md border border-slate-400 bg-slate-300 px-6 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:border-t-slate-600 hover:shadow-lg hover:shadow-cyan-700"
              >
                <div className="flex h-full flex-col items-start justify-between text-left">
                  <div className="flex">
                    <Image
                      src={cert.logo}
                      alt={`${cert.provider} Logo`}
                      width={48}
                      height={48}
                      className="mr-5 object-contain"
                    />
                    <div className="flex min-w-0 flex-col text-cyan-400">
                      <h2 className="text-sm leading-snug font-semibold text-gray-900">
                        {cert.title}
                      </h2>
                      <p className="text-xs text-gray-700">{cert.provider}</p>
                    </div>
                  </div>

                  <div className="mt-2 flex w-full justify-between">
                    <p className="text-xs text-gray-700">
                      {`Received: ${cert.dateRec.toLocaleDateString()}`}
                    </p>
                    <p className="absolute right-0 mr-5 text-xs text-gray-700 group-hover:animate-pulse">
                      View →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-6">
        <button
          onClick={prevGroup}
          aria-label="Previous group"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-gray-100 transition hover:scale-110 hover:bg-slate-500"
        >
          <ChevronLeft className="h-5 w-5 cursor-pointer" />
        </button>

        <div className="flex items-center gap-2">
          {groups.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToGroup(idx)}
              aria-label={`Go to page ${idx + 1}`}
              aria-current={idx === currentIndex ? "true" : undefined}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "h-3 w-8 bg-cyan-500"
                  : "h-3 w-3 bg-slate-400 hover:bg-cyan-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextGroup}
          aria-label="Next group"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-gray-100 transition hover:scale-110 hover:bg-slate-500"
        >
          <ChevronRight className="h-5 w-5 cursor-pointer" />
        </button>
      </div>

      <div className="mx-auto mt-2 max-w-7xl text-center text-sm text-slate-400">
        {`Page ${currentIndex + 1} of ${groups.length}`}
      </div>
    </>
  );
}
