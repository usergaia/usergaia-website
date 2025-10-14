"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useKeyboard } from "@/hooks/cliHook";

export function CLI() {
  const { handleEnter, terminalBodyRef, output, input, setInput } =
    useKeyboard();

  return (
    <section className="relative flex items-center justify-center px-4 py-20 md:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/40 via-gray-950 to-fuchsia-900/40" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      {/* Section Header */}
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl">
            Nice to meet you<span className="section-title-span">!</span>
          </h1>
          <p className="sm:text-md mt-2 text-lg text-gray-400">
            Learn more about me by typing a few commands… or skip straight to my
            projects — your call!
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="button border-cyan-400 bg-cyan-400 text-gray-900"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <div className="grid w-full -translate-y-8 grid-cols-1 gap-2 lg:grid-cols-3">
          {/* --- CLI TERMINAL --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex h-[500px] flex-col overflow-hidden rounded-2xl bg-gray-900/70 shadow-2xl backdrop-blur-md lg:col-span-2"
          >
            {/* Terminal Header */}
            <div className="flex items-center rounded-t-2xl bg-gray-800/80 px-4 py-3">
              <div className="mr-2 h-3 w-3 rounded-full bg-red-500" />
              <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <p className="flex-grow text-center text-xs font-light text-gray-400">
                /Users/edgar/Portfolio
              </p>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              className="hide-scrollbar flex-1 overflow-y-auto p-6 font-mono text-sm"
            >
              <div className="mb-6 text-gray-500">
                <p>
                  Welcome to <span className="text-fuchsia-500">ega-cli</span>!
                </p>
                <p className="mt-2">Type `cmd` to see available commands</p>
              </div>

              {/* Logs */}
              <div className="space-y-4">
                {output.map((line, idx) => (
                  <div key={idx}>
                    <div className="flex items-center text-gray-200">
                      <span className="text-green-400">→</span>
                      <span className="ml-2">{line.cmd}</span>
                    </div>
                    <div className="mt-1 leading-relaxed whitespace-pre-wrap text-gray-300">
                      {line.res}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Line */}
              <div className="mt-4 flex items-center">
                <span className="text-green-400">→</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleEnter}
                  className="ml-2 w-full bg-transparent text-green-400 focus:outline-none"
                  placeholder="type a command..."
                />
              </div>
            </div>
          </motion.div>

          {/* --- IMAGE CARD --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative hidden h-full min-h-[450px] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              src="/blob.jpeg"
              alt="Profile placeholder"
              fill
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
