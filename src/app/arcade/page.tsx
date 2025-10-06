"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { games } from "@/data/Games";
import { FaCopy } from "react-icons/fa";

export default function ArcadePage() {
  // logic for copying text
  const CopyBtn = ({ textToCopy }: { textToCopy: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

    return (
      // copy btn
      <button
        onClick={handleCopy}
        className={`-translate-y-1 rounded px-2 py-1 text-xs ${
          copied
            ? "cursor-default text-green-500 shadow-none"
            : "cursor-pointer bg-cyan-600 text-white shadow-md hover:bg-cyan-500"
        } transition-all`}
      >
        {copied ? "Copied!" : <FaCopy className="text-white" />}
      </button>
    );
  };

  // sort alphabetically
  const sortedGames = [...games].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="page flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 px-4 py-8 md:px-0">
        <div className="my-8 border-b border-white/10 pb-5 text-center">
          <h1 className="section-title-h1 text-5xl font-extrabold tracking-tight">
            <span className="section-title-span">Arcade</span>
          </h1>
          <p className="section-desc mx-auto mt-6 max-w-2xl text-gray-300">
            A small collection of games I enjoy. From fast-paced action to
            relaxing adventures, these are the games I spend time on in my free
            time.
          </p>
        </div>

        <h1 className="section-subtitle-h1 my-7 text-center">
          <span className="text-cyan-200">Some Games I Play</span>
        </h1>

        {/* Game Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedGames.map((game, idx) => (
            <motion.div
              key={game.uid + game.name}
              style={{ contentVisibility: "auto" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="project-card !h-auto"
            >
              {/* Game Image */}
              <div className="relative h-[180px] w-full overflow-hidden rounded-t-xl bg-slate-600 transition-transform duration-300">
                <Image
                  src={game.img}
                  alt={`${game.name} thumbnail`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
                  priority={idx < 3}
                />
              </div>

              {/* Game Info */}
              <div className="flex flex-grow flex-col p-4">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {game.name}
                </h3>

                {/* UID & Copy */}
                <div className="flex min-h-10 gap-2 py-2 pr-2">
                  {game.uid && (
                    <>
                      <p className="text-xs text-gray-900">
                        UID:{" "}
                        <span className="rounded bg-gray-200 px-1 py-0.5">
                          {game.uid}
                        </span>
                      </p>
                      <CopyBtn textToCopy={game.uid} />
                    </>
                  )}
                </div>

                {/* Genres & Visit */}
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-gray-500/40 pt-2 text-sm">
                  <div className="flex flex-wrap gap-2">
                    {game.genre
                      .sort((a, b) => a.localeCompare(b))
                      .map((gg, genreIdx) => (
                        <span
                          key={`${game.name}-${gg}-${genreIdx}`}
                          className="rounded-full bg-slate-400/50 px-2 py-1 text-xs text-gray-700"
                        >
                          {gg}
                        </span>
                      ))}
                  </div>

                  {/*  visit link */}
                  {game.link && (
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 font-medium text-white shadow-md transition-all hover:bg-cyan-500"
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
