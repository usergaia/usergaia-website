export function Education() {
  const educ: {
    name: string;
    yearStart: number;
    yearEnd: number | string;
    role: string;
    desc: string;
  }[] = [
    {
      name: 'FEU Institute of Technology',
      yearStart: 2022,
      yearEnd: 2027,
      role: 'BSCSSE',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi ullam doloribus culpa! Harum reiciendis tenetur odit veritatis nostrum sed, nesciunt unde quod consectetur incidunt esse expedita, dicta quam vitae?',
    },
    {
      name: 'FEU Institute of Technology',
      yearStart: 2027,
      yearEnd: 2029,
      role: 'AI Developer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi ullam doloribus culpa! Harum reiciendis tenetur odit veritatis nostrum sed, nesciunt unde quod consectetur incidunt esse expedita, dicta quam vitae?',
    },
    {
      name: 'FEU Institute of Technology',
      yearStart: 2030,
      yearEnd: 'Present',
      role: 'Punk Rock Artist',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi ullam doloribus culpa! Harum reiciendis tenetur odit veritatis nostrum sed, nesciunt unde quod consectetur incidunt esse expedita, dicta quam vitae?',
    },
  ];

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
              <div className="m-10 mt-0 mr-0 flex max-w-4xl flex-col items-start justify-center overflow-x-auto rounded-2xl border-y-purple-700 bg-red-400 p-5 text-white">
                <p className="educ-role">{e.role}</p>
                <p className="educ-name">{e.name}</p>
                <p className="educ-year">
                  {e.yearStart} - {e.yearEnd}
                </p>
                <p className="educ-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
