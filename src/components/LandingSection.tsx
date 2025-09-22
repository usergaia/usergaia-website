'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import clsx from 'clsx';

export function S1() {
  return (
    //     .section-page {
    //   @apply grid w-full flex-col items-center border-b border-violet-800/50 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1),_transparent_40%)] px-6 py-20 text-center sm:py-24;
    // }
    <div className="page">
      <section
        className={clsx(
          'section-page relative flex min-h-screen justify-center bg-[#0a0a1a] sm:px-8'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="-mt-30 flex h-full w-full max-w-4xl flex-col items-center justify-center text-center"
        >
          {/* Name */}
          <div className="text-4xl font-bold text-gray-100 md:text-6xl lg:text-7xl">
            Edgar Rafael Jr
            <span className="text-fuchsia-500">.</span>
          </div>

          {/* Headline + Description */}
          <div className="mt-6 max-w-3xl">
            <h1 className="lg:section-title-h1 bg-white bg-clip-text text-2xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl">
              I&apos;m a{' '}
              <span className="section-title-span">Software Developer</span>
            </h1>
            <p className="mt-4 text-base font-light text-gray-400 md:text-lg">
              Transforming Ideas into Digital Experiences. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Libero laudantium veniam,
              rerum iusto commodi a, saepe id odio officiis ipsa obcaecati
              voluptatibus ducimus aspernatur placeat suscipit quibusdam
              voluptate quod eaque.
            </p>
          </div>
        </motion.div>

        {/* Animated Call-to-Action at bottom */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5, // total cycle
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="absolute bottom-25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
        >
          <div className="text-sm text-purple-400/80">Scroll Down</div>
          <ArrowDown className="mt-1 text-purple-400" />
        </motion.div>
      </section>
    </div>
  );
}
