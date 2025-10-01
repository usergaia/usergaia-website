import { educ } from '@/data/Educ';

export function Education() {
  return (
    <div className="section-subpage">
      <div className="h-auto w-auto border border-blue-400 sm:mx-auto sm:w-full lg:w-250">
        <div className="relative m-5">
          <div className="absolute top-0 h-full w-[4px] translate-x-2 bg-fuchsia-100/50"></div>

          {educ.map((e, idx) => (
            <div
              key={idx}
              className="flex items-start justify-start gap-2 overflow-x-auto"
            >
              <div className="absolute flex h-5 w-5 translate-y-6 items-center justify-center rounded-full border-2 border-fuchsia-400 bg-[#0a0a1a]"></div>
              <div className="m-10 mt-0 mr-0 flex max-w-4xl flex-col items-start justify-center overflow-x-auto rounded-2xl border-y-purple-700 bg-red-100 p-5 text-white">
                <div className="flex w-full items-center justify-between">
                  <code className="educ-role text-cyan-400">{e.role}</code>
                  <p className="educ-name text-right text-black">{e.name}</p>
                </div>

                <p className="educ-year text-black">
                  {e.yearStart} - {e.yearEnd}
                </p>
                <p className="educ-desc text-black">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
