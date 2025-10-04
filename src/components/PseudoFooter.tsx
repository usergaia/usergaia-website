export function PseudoFooter() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center border-t border-violet-800/50 bg-[#121228] p-8 text-center text-white">
        <h1 className="mr-2 mb-4 text-left text-7xl font-bold">
          <span className="section-title-span">Shall we?</span>
        </h1>

        <p className="section-desc text-left">
          Always down to build cool stuff, try new stacks, or just talk games.
        </p>

        <a href="mailto:etrafael.dev@gmail.com" className="button w-40">
          Email Me
        </a>
      </div>
    </>
  );
}
