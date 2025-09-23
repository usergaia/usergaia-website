import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

export function Footer() {
  return (
    <>
      <footer className="relative mt-auto h-auto border-t border-violet-800/50 bg-[#0a0a1a] px-6 py-8 text-white sm:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-0">
          {/* Branding / Copyright - Placed on the left */}
          <div className="text-center sm:text-left">
            <div className="mb-2 text-2xl font-bold text-gray-100">
              e_ga_<span className="text-fuchsia-500">.</span>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Edgar Rafael Jr. | All rights
              reserved
            </p>
          </div>

          {/* Quick Access Links - Placed on the right */}
          <div className="flex flex-col items-center space-y-3 sm:items-end">
            <p className="text-lg font-semibold text-gray-200">Links</p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-2xl text-gray-500 sm:justify-end">
              <FaDiscord className="cursor-pointer hover:text-gray-300" />
              <FaGithub className="cursor-pointer hover:text-gray-300" />
              <FaLinkedin className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
              <FaSpotify className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
