"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import clsx from "clsx";
import TextType from "./TextType";

export function Hero() {
  return (
    <div className="page">
      <section
        className={clsx(
          "section-page relative flex min-h-screen items-center justify-center bg-[#0a0a1a] px-4 sm:px-8"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex h-full w-full max-w-4xl -translate-y-20 flex-col items-start justify-center text-left"
        >
          <h1 className="text-left text-4xl font-bold text-gray-100 md:text-6xl lg:text-7xl">
            Edgar Rafael Jr
            <span className="text-cyan-400">.</span>{" "}
          </h1>

          <div className="mt-6 w-full max-w-3xl text-left">
            <div className="lg:section-title-h1 flex flex-wrap items-center bg-white bg-clip-text text-left text-2xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl">
              <span className="text-[20px] md:text-4xl">I</span>{" "}
              <span className="section-title-span ml-1 flex text-[20px] md:text-4xl">
                <TextType
                  text={[
                    "am a Software Developer.",
                    "... uhh... develop softwares..?",
                    "play games... (add me)",
                    "am sleep-deprived.",
                    "(sometimes) love coding ",
                  ]}
                  typingSpeed={100}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </div>

            <p className="mt-4 text-left text-base font-light text-gray-400 md:text-lg">
              I build software that transforms ideas into practical digital
              experiences. I enjoy turning concepts into solutions that work,
              and sometimes surprise. You may want to check out my portfolio for
              a more professional showcase of my work, designed for easy
              navigation.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/test"
              // target="_blank"
              rel="noopener noreferrer"
              className="button mx-auto mb-10 flex w-35 translate-y-5 items-center justify-center border-slate-500 bg-cyan-400 text-center text-gray-900"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute bottom-40 left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex flex-col items-center"
          >
            <div className="text-sm text-cyan-400/80">Scroll Down</div>
            <ArrowDown className="mt-1 text-cyan-400" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
