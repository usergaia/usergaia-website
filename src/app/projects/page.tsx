import { Header } from '@/components/Header';
import Image from 'next/image';
import { Footer } from '@/components/Footer';

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
        <div className="flex w-full items-start justify-center bg-[#0a0a1a] bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1),_transparent_40%)] p-8">
          <div className="w-full max-w-4xl">
            <h1 className="section-title-h1 mb-12">
              All <span className="section-title-span">Projects</span>
            </h1>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="group h-auto w-full overflow-hidden rounded-xl border border-violet-800/50 bg-[rgba(23,23,39,0.6)] backdrop-blur-md transition-all duration-300 hover:border-purple-500/80 hover:shadow-2xl hover:shadow-purple-500/20 md:flex"
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
                          className="rounded-full bg-[#3b0764] px-3 py-1 text-sm font-medium text-purple-200"
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
