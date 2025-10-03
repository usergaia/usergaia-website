'use client';

import { useState } from 'react';
import { FaUniversity, FaBriefcase, FaAward } from 'react-icons/fa';

const timelineGroups = [
  {
    label: '2000–2010',
    summary: 'Early School & Discovery',
    milestones: [
      {
        year: 2002,
        label: 'Started programming',
        icon: <FaBriefcase className="text-xl text-cyan-400" />,
      },
      {
        year: 2005,
        label: 'First Website',
        icon: <FaAward className="text-xl text-yellow-400" />,
      },
    ],
  },
  {
    label: '2011–2020',
    summary: 'University & Growth',
    milestones: [
      {
        year: 2015,
        label: 'CS Degree',
        icon: <FaUniversity className="text-xl text-green-400" />,
      },
      {
        year: 2018,
        label: 'Internship',
        icon: <FaBriefcase className="text-xl text-cyan-400" />,
      },
    ],
  },
  {
    label: '2021–Now',
    summary: 'Professional Journey',
    milestones: Array.from({ length: 10 }, (_, i) => ({
      year: 2021 + i,
      label: `Professional experience #${i + 1}`,
      icon: <FaBriefcase className="text-xl text-cyan-400" />,
    })),
  },
];

export default function UnifiedCollapsibleTimeline() {
  const [openGroups, setOpenGroups] = useState({});

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#181b21] px-5 py-12">
      <h1 className="mb-10 text-4xl font-black text-cyan-400">My Journey</h1>
      <div className="relative w-full max-w-3xl">
        {/* Vertical line */}
        <div className="absolute top-0 left-6 z-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/70 to-slate-400/10" />
        {/* Timeline with collapsible groups */}
        <ul className="space-y-10">
          {timelineGroups.map((group, gIdx) => (
            <li key={gIdx} className="relative z-10">
              {/* Group Era Header */}
              <div
                onClick={() =>
                  setOpenGroups((o) => ({ ...o, [gIdx]: !o[gIdx] }))
                }
                className="group mb-2 flex cursor-pointer items-center space-x-3"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/30 text-lg font-bold text-cyan-500 transition group-hover:bg-cyan-300/50">
                  {openGroups[gIdx] ? '−' : '+'}
                </div>
                <span className="text-lg font-bold text-cyan-200">
                  {group.label}
                </span>
                <span className="font-mono text-sm text-cyan-300">
                  {group.summary}
                </span>
                {!openGroups[gIdx] && (
                  <span className="ml-3 text-xs text-slate-400">
                    ({group.milestones.length})
                  </span>
                )}
              </div>
              <ul
                className={`space-y-6 overflow-hidden pl-10 transition-all duration-300 ${openGroups[gIdx] ? 'max-h-[1000px]' : 'max-h-0'}`}
              >
                {group.milestones.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center rounded bg-white/90 px-5 py-4 shadow"
                  >
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-900">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-cyan-700">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400">{item.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
