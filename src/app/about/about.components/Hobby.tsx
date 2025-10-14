"use client";
import { motion } from "framer-motion";

export function Hobby() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="section-subpage"
      >
        {/* section header */}
        <h1 className="section-subtitle-h1">
          <span className="section-title-span">Beyond the Code</span>
        </h1>

        {/* section content */}
        <p className="m-5 mx-auto flex w-1/2 items-center justify-center text-center text-white">
          When I&apos;m not coding, I play video games. I explore different
          genres and occasionally replay old favorites. It’s something I do to
          take a break and enjoy quietly in my free time.
        </p>

        {/* redirect link */}
        <motion.a
          className="button mx-auto mb-10 flex w-35 translate-y-5 items-center justify-center bg-cyan-400 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          rel="noopener noreferrer"
          href="/arcade"
        >
          View Arcade
        </motion.a>
      </motion.section>
    </>
  );
}
