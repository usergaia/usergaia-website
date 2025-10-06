"use client";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code2, TrendingUp, Shield } from "lucide-react";
import Image from "next/image";
export default function AdvocacyPage() {
  return (
    <div className="page">
      <main>
        <Header />

        <section className="section-page min-h-screen overflow-x-hidden">
          <div className="mx-auto flex h-full max-w-7xl -translate-y-5 flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* gif */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mr-6 flex w-full flex-1 items-center justify-center lg:w-auto"
            >
              <div className="relative z-1 aspect-square w-full max-w-md overflow-hidden border border-cyan-600/30 bg-gradient-to-br shadow-2xl md:block lg:aspect-[3/4] lg:h-[600px]">
                <Image
                  src="/adv.gif"
                  alt="Animated Illustration"
                  width={30}
                  height={30}
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="absolute aspect-square w-full max-w-md translate-x-6 -translate-y-6 overflow-hidden border border-cyan-600/30 bg-cyan-400/50 bg-gradient-to-br shadow-2xl md:block lg:aspect-[3/4] lg:h-[600px]"></div>
            </motion.div>

            {/* right content */}
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <div className="w-full space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <h1 className="mb-6 text-3xl leading-tight font-medium text-gray-100 lg:text-5xl">
                    Simple<span className="text-amber-600">.</span> Stable
                    <span className="text-green-600">.</span> Scalable
                    <span className="text-fuchsia-600">.</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-gray-400 lg:text-xl">
                    When coding, I strive to keep a clear set of guiding
                    principles in mind. They help me stay focused and
                    intentional in my work.
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex flex-col items-center rounded-md border border-slate-400 bg-slate-300 px-6 py-5 backdrop-blur-md"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Code2 className="h-6 w-6 text-amber-600" />
                      <h3 className="text-xl font-semibold text-amber-600">
                        Simple
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Avoid making things complicated, especially if their value
                      doesn&apos;t justify the complexity, and focus instead on
                      keeping the codebase clear, understandable, and readable.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex flex-col items-center rounded-md border border-slate-400 bg-slate-300 px-6 py-5 backdrop-blur-md"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-green-600">
                        Stable
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Build systems that are stable and reliable, consistently
                      meeting their intended functionality.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="relative flex flex-col items-center rounded-md border border-slate-400 bg-slate-300 px-6 py-5 backdrop-blur-md"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-fuchsia-600" />
                      <h3 className="text-xl font-semibold text-fuchsia-600">
                        Scalable
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Design systems that are easy to maintain and scalable,
                      capable of handling new sets of data with little to no
                      hassle.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
