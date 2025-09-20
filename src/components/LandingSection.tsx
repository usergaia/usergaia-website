'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function S1() {
  return (
    <section className="flex h-auto items-center justify-center bg-teal-400 px-8 sm:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex w-full max-w-6xl flex-col items-center justify-between"
      >
        {/* Left: Languages */}
        <div className="relative mt-4 mr-auto flex items-start text-4xl font-bold text-white sm:-mt-30 md:text-7xl lg:text-8xl">
          <div>
            Edgar Rafael Jr.
            <span className="text-amber-600">*</span>
          </div>
        </div>

        {/* Right: Name + Description */}

        <div className="-left mr-auto mb-6 max-w-4xl sm:mb-0">
          <h1 className="mt-5 text-2xl font-light tracking-wider text-white sm:text-6xl md:text-4xl">
            I&apos;m a Software Developer.
          </h1>
          <p className="mt-4 text-sm font-thin text-white md:text-2xl">
            Transforming Ideas into Digital Experiences. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Architecto earum totam laborum
            blanditiis reprehenderit omnis at, ad ratione impedit
            exercitationem? Tempore temporibus, ad dolorem consectetur tenetur
            quisquam esse architecto blanditiis.
          </p>
        </div>
        {/* Animated Call-to-Action */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="mt-40 hidden w-full flex-col items-center text-white sm:flex"
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-white/50">See more!</div>
            <ArrowDown />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
