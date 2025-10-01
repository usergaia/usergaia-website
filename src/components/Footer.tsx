import { socialLinks } from '@/data/Socials';

export function Footer() {
  return (
    <footer className="relative mt-auto h-auto border-t border-violet-800/50 bg-[#0a0a1a] px-6 py-8 text-white sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-0">
        <div className="text-center sm:text-left">
          <div className="mb-2 text-2xl font-bold text-gray-100">
            ega<span className="text-cyan-500">.</span>
          </div>
          <code className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Edgar Rafael Jr. | All rights
            reserved
          </code>
        </div>

        {/* Quick Access Links */}
        <div className="flex flex-col items-center space-y-3 sm:items-end">
          <p className="text-lg font-semibold text-gray-200">Links</p>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-2xl text-gray-500 sm:justify-end lg:grid lg:grid-cols-3">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon className="cursor-pointer hover:text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
