'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { techStack } from '@/data/Stack';
import { motion, AnimatePresence } from 'framer-motion';
import { usePagination } from '@/hooks/paginationHook';

export function TechStacks() {
  const groups = [
    'UI',
    'Machine Learning',
    'Framework',
    'Language',
    'DevTools',
  ];
  const { direction, currentIndex, goToGroup, prevGroup, nextGroup } =
    usePagination(groups);

  const currentGroup = groups[currentIndex];

  return (
    <section className="section-subpage">
      <h1 className="section-subtitle-h1">
        <span className="section-title-span">Tech Stacks</span>
      </h1>

      <div className="mt-8 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-200">{currentGroup}</h2>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentGroup}
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
            className="flex flex-wrap items-center justify-center gap-5 py-6"
          >
            {techStack
              .filter((item) => item.group === currentGroup)
              .map(({ name, icon: Icon, color, bgColor }) => (
                <motion.div
                  key={name}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className={`group flex h-16 w-16 items-center rounded-full ${bgColor} ${color} cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:w-48 hover:shadow-xl`}
                    style={{ minWidth: '4rem' }}
                  >
                    <span className="flex h-16 w-16 items-center justify-center text-2xl">
                      <Icon />
                    </span>
                    <span className="hidden max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 md:inline-block">
                      {name}
                    </span>
                  </div>
                  <span className="mt-2 text-sm text-white md:hidden">
                    {name}
                  </span>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <button
            onClick={prevGroup}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-all hover:scale-110 hover:bg-gray-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Previous group"
          >
            <ChevronLeft className="h-5 w-5 cursor-pointer" />
          </button>

          <div className="flex items-center gap-2">
            {groups.map((group, index) => (
              <button
                key={group}
                onClick={() => goToGroup(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'h-3 w-8 bg-cyan-500'
                    : 'h-3 w-3 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to ${group}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            onClick={nextGroup}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-all hover:scale-110 hover:bg-gray-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Next group"
          >
            <ChevronRight className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <div className="text-sm text-gray-400">
          Page {currentIndex + 1} of {groups.length}
        </div>
      </div>
    </section>
  );
}
