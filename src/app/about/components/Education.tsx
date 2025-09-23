export function Education() {
  const educ: {
    name: string;
    yearStart: number;
    yearEnd: number | string;
    role: string;
  }[] = [
    {
      name: 'FEU Institute of Technology',
      yearStart: 2022,
      yearEnd: 2027,
      role: 'BSCSSE',
    },
    {
      name: 'FEU Institute of Technology',
      yearStart: 2027,
      yearEnd: 2029,
      role: 'AI Developer',
    },
    {
      name: 'FEU Institute of Technology',
      yearStart: 2030,
      yearEnd: 'Present',
      role: 'Punk Rock Artist',
    },
  ];

  return (
    <div className="section-subpage">
      <div className="h-auto w-auto border border-white sm:mx-auto sm:w-250">
        <div className="m-2">
          {educ.map((e, idx) => (
            <div
              key={idx}
              className="mt-5 ml-4 flex items-start justify-start gap-2 overflow-x-auto"
            >
              <h1 className="flex items-center justify-center text-red-400">
                test
              </h1>
              <div className="flex flex-col items-start justify-center overflow-x-auto text-white">
                <p className="educ-role">{e.role}</p>
                <p className="educ-name">{e.name}</p>
                <p className="educ-year">
                  {e.yearStart} - {e.yearEnd}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
