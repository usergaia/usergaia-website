import { Header } from '@/components/Header';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Contributor } from '@/app/projects/Contributor';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Engine Project',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut excepturi quis commodi? Vitae veritatis numquam commodi nihil, nesciunt quae nemo deserunt, rerum consequatur omnis fuga earum minus labore. Ex?',
      img: '/test.jpeg',
      stack: ['Rpm', 'Webflow', 'WebflowCMS', 'jQuery', 'FSAttributes'],
    },
    {
      name: 'Mobeldesignmuseum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut excepturi quis commodi? Vitae veritatis numquam commodi nihil, nesciunt quae nemo deserunt, rerum consequatur omnis fuga earum minus labore. Ex?',
      img: '/test.jpeg',
      stack: ['Next.js', 'Tailwind', 'Design System'], // example stack
    },
    {
      name: 'Another Project',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut excepturi quis commodi? Vitae veritatis numquam commodi nihil, nesciunt quae nemo deserunt, rerum consequatur omnis fuga earum minus labore. Ex?',
      img: '/test.jpeg',
      stack: ['React', 'TypeScript', 'Node.js'],
    },
  ];

  return (
    <>
      <div className="page">
        <Header />
        <div className="section-page items-center">
          <h1 className="section-title-h1 mb-12">
            All <span className="section-title-span">Projects</span>
          </h1>
          <div className="project-card-container">
            {projects.map((p) => (
              <div
                key={p.name}
                className="project-card group flex h-115 w-full flex-col overflow-hidden rounded-xl border border-cyan-400/20 bg-[rgba(23,23,39,0.6)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                {/* Image on top, upper half */}
                <div className="relative h-1/2 w-full">
                  <Image
                    src={p.img}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text below, lower half */}
                <div className="flex h-2/3 flex-col p-6">
                  <h3 className="font-bold text-gray-100">{p.name}</h3>
                  <p className="mt-2 flex-1 text-gray-300">{p.desc}</p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {p.stack.map((ps, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-700 px-2 py-1 text-[12px] text-gray-300"
                      >
                        {ps}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mx-auto w-full max-w-5xl space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group h-100 w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-[rgba(23,23,39,0.6)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20 md:flex"
              >
                <div
                  className={`flex flex-col p-6 md:w-1/2 ${index % 2 !== 0 ? 'md:order-last' : ''}`}
                >
                  <h2 className="mb-4 text-2xl font-bold text-gray-100">
                    {project.name}
                  </h2>
                  <p className="section-desc text-white">{project.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <div
                        key={item}
                        className="rounded-full bg-[#0b3c45] px-3 py-1 text-sm font-medium text-cyan-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 w-full md:h-auto md:w-1/2">
                  <Image
                    src={`${project.img}`}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <Contributor />
      </div>
      <Footer />
    </>
  );
}
