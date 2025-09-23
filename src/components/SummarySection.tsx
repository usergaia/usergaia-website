import Image from 'next/image';

export function S2() {
  return (
    <section className="page m-10 mb-0 items-center">
      <div className="m-5 grid h-auto w-full max-w-6xl auto-rows-[200px] grid-cols-1 gap-4 sm:m-0 md:h-auto md:auto-rows-auto md:grid-cols-3 lg:h-[600px] lg:grid-cols-4 lg:grid-rows-4 lg:gap-3">
        {/* IMAGE CARD */}
        <div className="tall-block-summ col-span-1 row-span-1 hover:border-fuchsia-500/80 hover:shadow-2xl hover:shadow-fuchsia-500/20 md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-4">
          <Image
            className="object-cover transition-transform duration-500 hover:scale-105"
            src="/blob.jpeg"
            alt="Profile picture"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* INTRO / GRADIENT CARD */}
        <div className="tall-block-summ col-span-1 row-span-2 bg-gradient-to-br from-purple-600 to-fuchsia-600 p-6 lg:col-span-2 lg:row-span-2">
          <h1 className="text-3xl font-bold text-gray-100">I&apos;M EDGAR!</h1>
          <p className="section-desc mt-4 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            deleniti, excepturi atque ex quae exercitationem deserunt velit
            ipsum eaque provident inventore assumenda cupiditate, laudantium,
            eveniet harum dolore expedita ipsam corporis.
          </p>
        </div>

        {/* STACK */}
        <div className="short-block-summ col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
          <div className="text-lg font-bold text-gray-100">STACK.</div>
        </div>

        {/* SKILLS */}
        <div className="short-block-summ col-span-1 row-span-1 justify-between md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
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

        {/* RECENT PROJECTS */}
        <div className="short-block-summ col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2">
          <div className="text-lg font-bold text-gray-100">RECENT PROJECTS</div>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <div className="font-semibold text-gray-200">Koncepted</div>
              <div className="text-gray-400">2023-00</div>
              <div className="text-gray-500">Web Design</div>
            </div>
            <div>
              <div className="font-semibold text-gray-200">WeVPN</div>
              <div className="text-gray-400">2021-2024</div>
              <div className="text-gray-500">Web Design</div>
            </div>
          </div>
        </div>

        {/* TIME */}
        <div className="no-scrollbar short-block-summ col-span-1 row-span-1 items-center justify-center md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
          <div className="text-4xl font-bold">8:30</div>
          <div className="text-4xl font-bold text-fuchsia-500">PM</div>
          <div className="mt-2 text-xs text-gray-400">
            MON, SEP 22 IN MANILA
          </div>
        </div>

        {/* LOCATION & CV */}
        <div className="short-block-summ col-span-1 row-span-1 items-center justify-center space-y-3 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
          <div className="text-xs font-bold">📍 Manila, Philippines</div>
          <div className="text-xs text-green-400">
            🟢 Available for projects
          </div>
          <button className="h-10 w-full cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-sm font-semibold text-white transition hover:brightness-110 lg:h-full">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
