"use client";
import { ChevronDown } from "lucide-react";
import { useDropDown } from "@/hooks/navHook";
import clsx from "clsx";
import { motion } from "framer-motion";

export function Header() {
  const { open, setOpen } = useDropDown();

  const links: string[] = [
    "Home",
    "About",
    // "Skills",
    // "Projects",
    "Advocacy",
    "Portfolio",
    "Arcade",
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
              href={`${item.toLowerCase() === "home" ? "/" : item.toLowerCase() === "portfolio" ? "https://etrafaeldev.vercel.app/" : `/${item.toLowerCase()}`}`}
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
            "button hidden border-cyan-400 bg-cyan-400 text-gray-900"
          )}
        >
          Connect
        </motion.a>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="items-left absolute right-0 left-0 z-50 mt-1 ml-4 flex w-30 flex-col rounded-b-lg bg-[#0a0a1a]/95 backdrop-blur-md lg:hidden">
          {/* Overlay nav items */}
          {links.map((item) => (
            <a
              key={item}
              target={`${item.toLowerCase() === "portfolio" ? "_blank" : "_self"}`}
              rel={`${item.toLowerCase() === "portfolio" ? "noopener noreferrer" : undefined}`}
              href={`${
                item.toLowerCase() === "home"
                  ? "/"
                  : item.toLowerCase() === "portfolio"
                    ? "https://etrafaeldev.vercel.app/"
                    : `/${item.toLowerCase()}`
              }`}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-left text-sm"
            >
              {item}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/edgar-rafael-user5777/"
            target="_blank"
            rel="noreferrer noopener"
            className={clsx(
              "button border-cyan-400 bg-cyan-400 text-center text-gray-900"
            )}
          >
            Connect
          </a>
        </div>
      )}
    </div>
  );
}
