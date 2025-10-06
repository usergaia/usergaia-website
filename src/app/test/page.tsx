"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="page">
      <section
        className={clsx(
          "section-page relative flex min-h-screen items-center justify-center bg-[#0a0a1a] px-4 sm:px-8"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex h-full w-full max-w-4xl flex-col items-center justify-center text-center"
        >
          <Construction className="mb-6 h-16 w-16 text-cyan-400" />
          <h1 className="text-4xl font-bold text-gray-100 md:text-6xl lg:text-7xl">
            🚧 Under Construction 🚧
          </h1>
          <p className="mt-4 max-w-xl text-base font-light text-gray-400 md:text-lg">
            This page is currently under construction. Come back soon to see
            something awesome!
          </p>
          <motion.a
            href="/"
            className="button mt-8 flex items-center justify-center rounded-md bg-cyan-400 px-6 py-3 font-semibold text-gray-900 shadow-lg shadow-cyan-500/20 transition duration-300 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back Home
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
