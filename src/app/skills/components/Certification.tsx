'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePagination } from '@/hooks/paginationHook';
import { certificates } from '@/data/Certs';
import { CertProps } from '@/types/component.types';

// 3x3 chunk display
const chunkArray = (arr: CertProps[], size: number): CertProps[][] => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export function Certifications() {
  const groups = chunkArray(certificates, 9);
  const { direction, currentIndex, goToGroup, prevGroup, nextGroup } =
    usePagination(groups);
  const currentGroup = groups[currentIndex];

  return (
    <>
      <h1 className="section-subtitle-h1 mb-5 text-cyan-400">
        <span className="section-title-span">My Certifications</span>
      </h1>
      <div className="mt-4 min-h-99">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: string) => ({
                x: dir === 'right' ? 50 : -50,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (dir: string) => ({
                x: dir === 'right' ? -50 : 50,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentGroup.map((cert) => (
              <div
                key={cert.title}
                className="Hey relative flex items-center rounded-md border border-cyan-700 bg-gray-800 px-6 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-red-400"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 transition"
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
                      <div className="flex min-w-0 flex-col text-cyan-300">
                        <h2 className="text-sm leading-snug font-semibold">
                          {cert.title}
                        </h2>
                        <p className="text-xs text-gray-400">{cert.provider}</p>
                      </div>
                    </div>

                    <div className="mt-2 flex w-full justify-between">
                      <p className="text-xs text-gray-500">{`Received: ${cert.dateRec.toLocaleDateString()}`}</p>
                      <p className="absolute right-0 mr-5">View →</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-6">
        <button
          onClick={prevGroup}
          disabled={currentIndex === 0}
          aria-label="Previous group"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:scale-110 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5 cursor-pointer" />
        </button>

        <div className="flex items-center gap-2">
          {groups.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToGroup(idx)}
              aria-label={`Go to page ${idx + 1}`}
              aria-current={idx === currentIndex ? 'true' : undefined}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'h-3 w-8 bg-cyan-500'
                  : 'h-3 w-3 bg-gray-600 hover:bg-cyan-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextGroup}
          disabled={currentIndex === groups.length - 1}
          aria-label="Next group"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:scale-110 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5 cursor-pointer" />
        </button>
      </div>

      <div className="mx-auto mt-2 max-w-7xl text-center text-sm text-gray-400">{`Page ${currentIndex + 1} of ${groups.length}`}</div>
    </>
  );
}
