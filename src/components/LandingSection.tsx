'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import clsx from 'clsx';
import TextType from './TextType';

export function S1() {
  return (
    <div className="page">
      <section
        className={clsx(
          'section-page relative flex min-h-screen items-center justify-center bg-[#0a0a1a] px-4 sm:px-8'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex h-full w-full max-w-4xl -translate-y-20 flex-col items-start justify-center text-left"
        >
          <h1 className="text-left text-4xl font-bold text-gray-100 md:text-6xl lg:text-7xl">
            Edgar Rafael Jr
            <span className="text-cyan-400">.</span>{' '}
          </h1>

          <div className="mt-6 w-full max-w-3xl text-left">
            <div className="lg:section-title-h1 flex flex-wrap items-center bg-white bg-clip-text text-left text-2xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl">
              <span className="text-4xl">I</span>{' '}
              <span className="section-title-span ml-1 flex text-4xl">
                <TextType
                  text={[
                    'am a Software Developer.',
                    '... uhh... develop softwares..?',
                    'am sleep-deprived.',
                    'play games... lots of games.',
                    "love coding (i don't)",
                  ]}
                  typingSpeed={100}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </div>

            <p className="mt-4 text-left text-base font-light text-gray-400 md:text-lg">
              Transforming Ideas into Digital Experiences. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Libero laudantium veniam,
              rerum iusto commodi a, saepe id odio officiis ipsa obcaecati
              voluptatibus ducimus aspernatur placeat suscipit quibusdam
              voluptate quod eaque.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-center sm:bottom-40"
        >
          <div className="text-sm text-cyan-400/80">Scroll Down</div>
          <ArrowDown className="mt-1 text-cyan-400" />
        </motion.div>
      </section>
    </div>
  );
}
