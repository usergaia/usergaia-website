"use client";
import { motion } from "framer-motion";
export function PseudoFooter() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        animate={{ y: [0, -5, 0] }}
        className="flex w-full flex-col items-center justify-center border-t border-violet-800/50 bg-[#121228] p-8 text-center text-white"
      >
        <h1 className="mr-2 mb-4 text-left text-7xl font-bold">
          Shall we<span className="text-cyan-400">?</span>
        </h1>

        <p className="section-desc">
          Always down to build cool stuff, try new stacks, or just talk games.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:etrafael.dev@gmail.com"
          rel="noopener noreferrer"
          className="button w-40 border-cyan-400 bg-cyan-400 text-gray-900"
        >
          Email me
        </motion.a>
      </motion.div>
    </>
  );
}
