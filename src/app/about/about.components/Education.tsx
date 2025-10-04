import { educ } from "@/data/Educ";

export function Education() {
  return (
    <section className="flex flex-col justify-center px-6 py-20">
      <h1 className="section-subtitle-h1 mb-10 text-center text-cyan-400">
        <span className="text-cyan-200">My Origin</span>
      </h1>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-10 lg:flex-row">
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <p className="text-center text-white lg:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              aperiam perferendis incidunt iure rerum ad sequi doloremque at
              velit tempora fuga illo voluptate itaque, dolorem nesciunt
              doloribus sint quas magnam!
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="flex h-auto w-auto items-center justify-center sm:mx-auto sm:w-full lg:w-210">
            <div className="relative m-5">
              <div className="absolute top-0 h-full w-[4px] translate-x-2 bg-cyan-100/50"></div>
              {educ.map((e, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-start gap-2 overflow-x-auto"
                >
                  <div className="absolute flex h-5 w-5 translate-y-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#0a0a1a]"></div>
                  <div className="m-10 mt-0 mr-0 flex w-auto max-w-4xl flex-col items-start justify-center overflow-x-auto rounded-2xl border-2 border-slate-400 bg-slate-300 p-5 text-white">
                    <code className="educ-role text-cyan-700">{e.role}</code>
                    <p className="educ-name text-right text-black">{e.name}</p>
                    <p className="educ-year text-black">
                      {e.yearStart} - {e.yearEnd}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-start justify-start gap-2 overflow-x-auto">
                <div className="absolute flex h-5 w-5 translate-y-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#0a0a1a]"></div>
                <div className="m-10 mt-0 mr-0 flex w-auto max-w-4xl flex-col items-start justify-center overflow-x-auto rounded-2xl border-2 border-slate-400 bg-slate-300 p-5 text-white">
                  <code className="educ-role text-cyan-700/30">
                    More coming soon...
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
