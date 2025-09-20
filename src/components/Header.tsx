'use client';
import { X, ChevronDown } from 'lucide-react';
import { useDropDown } from '@/hooks/hbgHook';

export function Header() {
  const { open, setOpen } = useDropDown();

  const links = [
    'Home',
    'Projects',
    'Skills',
    'Experience',
    'Advocacy',
    'About',
    'Arcade',
  ];

  return (
    <div className="relative z-50 w-full snap-start bg-teal-400 sm:p-6">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Toggle */}
        <div
          className="relative top-1/2 left-1/2 mt-4 flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center text-2xl font-bold text-white sm:top-0 sm:cursor-default lg:left-0"
          onClick={() => setOpen(!open)}
        >
          e_ga_<span className="text-red-400">.</span>
          <ChevronDown className="mt-3 ml-2 lg:hidden" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden space-x-6 lg:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase() === 'home' ? '/' : item.toLowerCase()}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-700/70 hover:shadow-md"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Connect button (desktop only) */}
        <a
          href="#connect"
          className="hidden rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-red-600 md:block"
        >
          Connect
        </a>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 bg-teal-400 backdrop-blur-md lg:hidden">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-6 py-3 text-lg font-medium text-white transition hover:bg-violet-700/70"
            >
              {item}
            </a>
          ))}

          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-red-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:scale-105 hover:bg-red-600"
          >
            Connect
          </a>
        </div>
      )}
    </div>
  );
}
