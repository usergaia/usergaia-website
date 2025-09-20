import { Header } from '@/components/Header';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex w-full items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-2xl text-center">
          <h1 className="mb-8 text-left text-3xl font-bold text-gray-800">
            All Projects
          </h1>

          <div className="space-y-6">
            {/* Engine Project */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-700">
                - Engine
              </h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {['Rpm', 'Webflow', 'WebflowCMS', 'jQuery', 'FSAttributes'].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded bg-blue-100 px-3 py-2 text-sm text-blue-800"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Mobeldesignmuseum Project */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                - Mobeldesignmuseum
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
