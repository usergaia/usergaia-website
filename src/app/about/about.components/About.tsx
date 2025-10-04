import Image from 'next/image';

export function About() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center border-b border-cyan-400/20 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.1),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.05),_transparent_50%)] px-6 py-20 text-center sm:py-10">
        <div className="mx-auto flex w-auto flex-col items-center gap-8 sm:flex-row">
          {/* --- Profile Image --- */}

          <div
            className="relative flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-800 p-2 shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            style={{ width: '18rem', height: '18rem' }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/me2.png"
                alt="Profile picture"
                fill
                className="rounded-full object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- Text Content --- */}
          <div className="mt-4 flex flex-col items-center justify-center px-6 sm:items-start">
            <h1 className="section-title-h1 text-center sm:text-left">
              <span className="section-title-span text-4xl sm:text-5xl">
                Behind the Code
              </span>
            </h1>
            <p className="section-desc mt-6 text-center text-gray-400 sm:text-left">
              Edgar is a simple human. His life was once only filled with
              rainbows and questionable life choices, until he discovered{' '}
              <b className="text-fuchsia-400">programming</b>. Now it’s mostly
              questionable life choices accompanied with blind optimism,
              expressed in different programming languages.
            </p>
            <code className="mt-6 block text-center text-sm text-gray-400 italic sm:text-left">
              Life used to be so simple when bugs didn’t require documentation.
            </code>
          </div>
        </div>
      </section>
    </>
  );
}
