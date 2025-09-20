import Image from 'next/image';

export function S2() {
  return (
    <section className="flex min-h-screen snap-start items-center justify-center bg-blue-400 p-4">
      <div className="m-5 grid h-auto w-full max-w-6xl auto-rows-[200px] grid-cols-1 gap-5 sm:m-0 md:h-[600px] md:auto-rows-[150px] md:grid-cols-3 md:gap-3 lg:h-[600px] lg:grid-cols-4 lg:grid-rows-4 lg:gap-1">
        {/* Profile Image - Mobile: full width, Desktop: left column spans 4 rows */}
        <div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-3">
          <Image
            className="object-cover"
            src="/test.jpeg"
            alt="Profile picture"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* About Section - Mobile: full width, Desktop: spans 2 columns, 2 rows */}
        <div className="col-span-1 row-span-2 rounded-2xl bg-neutral-900 p-6 text-white sm:overflow-auto lg:col-span-2 lg:row-span-2">
          <h1 className="text-3xl font-bold text-white">I&apos;M EDGAR!</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
            My journey in the world of design began 11 years ago with a
            fascination for the digital realm. From my early days of curiosity
            to today&apos;s expertise, I&apos;ve honed the art of transforming
            ideas into captivating designs, mastering the art of creating design
            solutions that bridge the gap between aesthetics and functionality.
            Let&apos;s craft something remarkable together.
          </p>
        </div>

        {/* Recent Clients - Mobile: full width, Desktop: bottom right */}
        <div className="no-scrollbar col-span-1 row-span-1 grid overflow-auto rounded-2xl bg-neutral-900 p-6 text-white md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
          <div className="text-lg font-bold">STACK.</div>
        </div>

        {/* Skills - Mobile: full width, Desktop: bottom section */}
        <div className="no-scrollbar col-span-1 row-span-1 flex flex-col justify-between overflow-auto rounded-2xl bg-violet-600 p-6 text-white md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">SKILLS</span>
              <span className="text-xl">✨</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>App Design</li>
              <li>Logo Design</li>
              <li>Framer Development</li>
            </ul>
          </div>
        </div>

        {/* Recent Projects - Mobile: full width, Desktop: bottom right */}
        <div className="no-scrollbar col-span-1 row-span-1 overflow-auto rounded-2xl bg-neutral-900 p-6 text-white md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
          <div className="text-lg font-bold">RECENT PROJECTS</div>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <div className="font-semibold">Koncepted</div>
              <div className="text-gray-400">2023-00</div>
              <div className="text-gray-500">Web Design</div>
            </div>
            <div>
              <div className="font-semibold">WeVPN</div>
              <div className="text-gray-400">2021-2024</div>
              <div className="text-gray-500">Web Design</div>
            </div>
            <div>
              <div className="font-semibold">Pillar</div>
              <div className="text-gray-400">2020-00</div>
              <div className="text-gray-500">UI/UX Design</div>
            </div>
          </div>
        </div>

        {/* Time Block - Now placed above Contact Me */}
        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl bg-neutral-900 p-6 text-white md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
          <div className="text-4xl font-bold">8:21</div>
          <div className="text-4xl font-bold">AM</div>
          <div className="mt-2 text-xs text-gray-400">Current local time</div>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-center justify-center space-y-3 rounded-2xl bg-neutral-900 p-6 text-white md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
          <div className="text-xs font-bold">📍 Manila, Philippines</div>
          <div className="text-xs text-gray-400">🟢 Available for projects</div>
          <button className="m-2 h-10 w-full cursor-pointer rounded-full bg-teal-500 text-sm font-semibold text-white hover:bg-blue-600 lg:h-full">
            Download CV Preview
          </button>
        </div>

        {/* Contact Block - Now placed below Time */}
        <div className="col-span-1 row-span-1 rounded-2xl md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
          <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-1 flex h-full w-full flex-col rounded-lg bg-black text-xl font-bold text-white">
              <div className="flex h-1/2 w-full items-center justify-center text-3xl">
                LiN
              </div>
              <div className="flex h-1/2 w-full items-center justify-center text-3xl">
                KS:
              </div>
            </div>

            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              ★
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              G
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              📷
            </div>
            <div className="col-span-1 row-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              📷
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              ★
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              G
            </div>
            <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg bg-gray-700">
              📷
            </div>
            <div className="col-span-4 row-span-1 flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
