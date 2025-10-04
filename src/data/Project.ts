import { ProjectProps, ContribProps } from "@/types/component.types";

export const projects: ProjectProps[] = [
  {
    name: "e-Xtract",
    desc: "A YOLO-based mobile app for identifying e-waste components from electronic devices. Provides dismantling guides, part valuations, and locates nearby disposal facilities using the Haversine algorithm.",
    img: "/test.jpeg",
    stack: ["Flutter", "Dart", "Firebase", "YOLOv11"],
    weblink: null,
    ghlink: "https://github.com/Thesis-Phaethon/extract_app",
  },
  {
    name: "ERVirus",
    desc: "Evolve your digital virus in this incremental web game. Upgrade abilities, manage infection spread, and defend against debugging attempts to keep your campaign growing and maximize data generated.",
    img: "/test.jpeg",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    weblink: "https://ervirus.vercel.app/",
    ghlink: "https://github.com/FuseBucks/ervirus",
  },
  {
    name: "FoodCase",
    desc: "A mobile app that uses your chosen location to randomly select nearby food establishments within a category of your choosing. Incorporates geolocation and a randomization to provide objective, category-based dining options in your vicinity.",
    img: "/test.jpeg",
    stack: ["React Native", "JavaScript"],
    weblink: null,
    ghlink: "https://github.com/FuseBucks/food-case",
  },
  {
    name: "CronCalc",
    desc: "Web application that calculates Cronbach's alpha with support for file upload or manual data entry. Shows detailed step-by-step computations.",
    img: "/test.jpeg",
    stack: ["Vite", "JavaScript", "TailwindCSS"],
    weblink: "https://croncalc.vercel.app/",
    ghlink: "https://github.com/usergaia/cronbach-calc",
  },
  {
    name: "Tickr",
    desc: "A web dashboard tracking software and technology sector stock prices. Implements end-of-day price monitoring, top gainer identification, and highest closing price analytics with visual data representation.",
    img: "/test.jpeg",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
    // weblink: 'https://tickr-alpha.vercel.app/',
    weblink: null,

    ghlink: "https://github.com/usergaia/Tickr",
  },
  {
    name: "ticTactoe",
    desc: "Tic-Tac-Toe game featuring local multiplayer and bot opponent using minimax algorithm for automated decision-making.",
    img: "/test.jpeg",
    stack: ["Vite", "JavaScript", "TailwindCSS"],
    weblink: "https://ttt-phi-six.vercel.app/",
    ghlink: "https://github.com/usergaia/ticTactoe",
  },
];

export const contrib_projects: ContribProps[] = [
  {
    name: "Bettergov",
    desc: "A community-led initiative to create a better and more usable Philippine national government website.",
    weblink: "https://bettergov.ph/",
    ghlink: "https://github.com/bettergovph/bettergov",
  },
];
