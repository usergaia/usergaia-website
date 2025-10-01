import React from 'react';
import { techStack } from '@/data/Stack';

export default function Test() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-12">
      {techStack.map(({ name, icon, color }) => (
        <div
          key={name}
          className={`group flex h-16 w-16 items-center rounded-full bg-green-400 ${color} cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:w-48`}
          style={{ minWidth: '4rem' }}
        >
          <span className="flex h-16 w-16 items-center justify-center text-2xl">
            {icon}
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
