'use client';
import Image from 'next/image';
import React from 'react';

export function CLI() {
  const skills: string[] = [
    'UI/UX & Web Design',
    'React & Next.js',
    'App Prototyping',
    'Framer Motion',
    'Tailwind CSS',
  ];

  const stack: string[] = [
    'TypeScript',
    'Node.js',
    'Python',
    'Figma',
    'Vercel',
  ];

  return (
    <section className="relative flex items-center justify-center px-4 py-20 md:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/40 via-gray-950 to-fuchsia-900/40" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nice to meet you!
            {/* <span className="text-fuchsia-400">ega-cli</span> */}
          </h1>
          <p className="mt-4 text-lg text-gray-400 sm:text-xl">
            Learn more about me by entering the following command.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="projects" className="button">
              View Work
            </a>
            {/* <a
              href="#contact"
              className="rounded-lg border border-gray-600 px-5 py-2 text-sm font-medium text-gray-300 transition hover:border-fuchsia-500 hover:text-fuchsia-400"
            >
              Get in Touch
            </a> */}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-gray-900/70 shadow-2xl backdrop-blur-md lg:col-span-2">
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
            <div className="flex-grow p-6 font-mono text-sm">
              <div className="mb-6">
                <div className="flex items-center text-gray-200">
                  <span className="text-green-400">→</span>
                  <span className="ml-2 font-bold">whoami</span>
                </div>
                <div className="mt-2 pl-6 leading-relaxed text-gray-300">
                  I&apos;m a passionate developer and designer with a knack for
                  turning complex ideas into beautiful, intuitive digital
                  experiences.
                </div>
              </div>

              {/* -- Skills -- */}
              <div className="mb-6">
                <div className="flex items-center text-gray-200">
                  <span className="text-green-400">→</span>
                  <span className="ml-2 font-bold">cat skills.txt</span>
                </div>
                <ul className="mt-2 grid grid-cols-2 gap-x-6 pl-6 leading-relaxed text-gray-300">
                  {skills.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
              </div>

              {/* -- Stack -- */}
              <div>
                <div className="flex items-center text-gray-200">
                  <span className="text-green-400">→</span>
                  <span className="ml-2 font-bold">ls stack/</span>
                </div>
                <ul className="mt-2 grid grid-cols-2 gap-x-6 pl-6 leading-relaxed text-gray-300">
                  {stack.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* --- IMAGE CARD --- */}
          <div className="relative hidden h-full min-h-[450px] overflow-hidden rounded-2xl lg:block">
            <Image
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              src="/blob.jpeg"
              alt="Profile placeholder"
              fill
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
