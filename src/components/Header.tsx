"use client";
import { X, ChevronDown } from "lucide-react";
import { useDropDown } from "@/hooks/navHook";
import clsx from "clsx";
import { motion } from "framer-motion";

export function Header() {
  const { open, setOpen } = useDropDown();

  const links: string[] = [
    "Home",
    "Projects",
    "Skills",
    "About",
    "Arcade",
    "Portfolio",
  ];

  return (
    <div className={clsx("nav sticky top-0 z-50 w-full shadow-lg")}>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Mobile Toggle */}
        <div
          className={clsx(
            "nav-text flex cursor-pointer items-center text-2xl font-bold lg:cursor-default"
          )}
          onClick={() => setOpen(!open)}
        >
          ega
          <span className="text-cyan-500">.</span>
          <ChevronDown className={clsx("mt-1 ml-2 text-gray-400 lg:hidden")} />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center space-x-2 lg:flex">
          {links.map((item) => (
            <a
              key={item}
              target={`${item.toLowerCase() === "portfolio" ? "_blank" : "_self"}`}
              rel={`${item.toLowerCase() === "portfolio" ? "noopener noreferrer" : undefined}`}
              href={`${item.toLowerCase() === "home" ? "/" : item.toLowerCase() === "portfolio" ? "/test" : `/${item.toLowerCase()}`}`}
              className="nav-btn"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Connect button (desktop only) */}
        <motion.a
          href="https://www.linkedin.com/in/edgar-rafael-user5777/"
          target="_blank"
          rel="noreferrer noopener"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "button hidden border-slate-500 bg-cyan-400 text-gray-900"
          )}
        >
          Connect
        </motion.a>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center space-y-4 bg-[#0a0a1a]/95 backdrop-blur-lg lg:hidden">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-7 right-6 text-gray-300"
          >
            <X size={32} />
          </button>

          {/* overlay nav items */}
          {links.map((item) => (
            <a
              key={item}
              target={`${item.toLowerCase() === "portfolio" ? "_blank" : "_self"}`}
              rel={`${item.toLowerCase() === "portfolio" ? "noopener noreferrer" : undefined}`}
              href={`${item.toLowerCase() === "home" ? "/" : item.toLowerCase() === "portfolio" ? "/test" : `/${item.toLowerCase()}`}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-6 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-violet-800/40 hover:text-white hover:brightness-125"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
