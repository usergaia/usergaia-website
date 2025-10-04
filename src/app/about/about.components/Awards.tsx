"use client";
import Image from "next/image";
import { awards } from "@/data/Awards";
import { AwardProps } from "@/types/component.types";
import { usePagination } from "@/hooks/paginationHook";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Split array into chunks for pagination
const chunkArray = (arr: AwardProps[], size: number): AwardProps[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export function Awards() {
  const groups = chunkArray(awards, 3); // 3 awards per page
  const { direction, currentIndex, goToGroup, prevGroup, nextGroup } =
    usePagination(groups);
  const currentGroup = groups[currentIndex];
  console.log(awards.length);

  return (
    <section className="section-subpage">
      <h1 className="section-subtitle-h1 mb-12 text-center">
        <span className="section-title-span">Awards & Recognition</span>
      </h1>

      <div className="mt-4 min-h-[400px]">
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
            {currentGroup.map((award) => (
              <div
                key={award.name}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-400 bg-slate-300 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-700"
              >
                {/* Award image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-slate-600">
                  <Image
                    src={award.img}
                    alt={`Screenshot of ${award.name}`}
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-all duration-300 group-hover:scale-105"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>

                {/* Award content */}
                <div className="flex flex-col p-6">
                  {/* Top section: Event */}
                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
                    <span className="inline-flex items-center rounded-lg bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700">
                      {award.event}
                    </span>
                  </div>

                  {/* Main content: Award name */}
                  <div className="flex-1 py-5">
                    <h3 className="text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-cyan-600">
                      {award.name}
                    </h3>
                  </div>

                  {/* Bottom section: Award type + Description */}
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="inline-block rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase">
                      {award.award}
                    </div>
                    {award.desc && (
                      <p className="text-sm leading-relaxed text-gray-600">
                        {award.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {awards.length > 3 && (
        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-6">
          {/* Prev button */}
          <button
            onClick={prevGroup}
            aria-label="Previous group"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-gray-100 transition-transform duration-200 hover:scale-110 hover:bg-slate-500"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Page indicators */}
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

          {/* Next button */}
          <button
            onClick={nextGroup}
            aria-label="Next group"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-gray-100 transition-transform duration-200 hover:scale-110 hover:bg-slate-500"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Page counter */}
      {awards.length > 3 && (
        <div className="mx-auto mt-2 max-w-7xl text-center text-sm text-slate-400">
          {`Page ${currentIndex + 1} of ${groups.length}`}
        </div>
      )}
    </section>
  );
}
