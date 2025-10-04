import Image from "next/image";

export function S4() {
  const pjt: string[] = ["Project A", "Project B", "Project C", "Project D"];

  return (
    <>
      <section className="flex h-auto justify-center bg-[#0a0a1a] text-center text-3xl text-white lg:h-auto">
        <div className="max-w-8xl w-full px-2 sm:px-4">
          <div className="flex flex-col items-center justify-center gap-4 overflow-x-auto pb-4 text-center lg:flex-row lg:gap-0">
            <div className="mt-4 flex h-64 w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 p-4 sm:h-80 sm:p-6 lg:mr-6 lg:h-98 lg:w-auto">
              <div className="mb-2 flex flex-col items-center justify-center text-5xl font-bold text-white sm:flex-row sm:text-6xl lg:text-7xl">
                <span className="mb-2 sm:mb-0">Some</span>
                <div className="flex items-center justify-center sm:mt-2 sm:ml-4 sm:flex-col sm:items-start">
                  <span className="mr-2 text-2xl leading-none sm:text-3xl lg:text-4xl">
                    of
                  </span>
                  <span className="text-2xl leading-none sm:text-3xl lg:text-4xl">
                    my
                  </span>
                </div>
              </div>
              <div className="text-5xl font-bold text-white sm:text-7xl lg:text-8xl">
                Works.
              </div>
            </div>

            <div className="mt w-full justify-center lg:flex-1">
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                {pjt.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded border border-violet-800/50 bg-[rgba(23,23,39,0.6)]"
                  >
                    <Image
                      src="/test.jpeg"
                      alt="Profile picture"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                ))}
              </div>

              <div className="no-scrollbar hidden snap-x space-x-4 overflow-x-auto pb-2 sm:flex lg:max-w-5xl lg:snap-proximity">
                {pjt.map((item, index) => (
                  <div
                    className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center rounded border border-violet-800/50 bg-[rgba(23,23,39,0.6)] p-94 font-semibold text-white sm:h-48 sm:w-48 lg:mt-6 lg:h-60 lg:w-60 lg:p-50"
                    key={index}
                  >
                    <Image
                      src="/test.jpeg"
                      alt="Profile picture"
                      fill
                      className="rounded object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
