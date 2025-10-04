import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

export type ProjectProps = {
  name: string;
  desc: string;
  img: string;
  stack: string[];
  weblink: string | null;
  ghlink: string;
};

// export type ProjectCardProps = {
//   project: ProjectProps;
//   idx: number;
// };

export type ContribProps = {
  name: string;
  desc: string;
  weblink: string;
  ghlink: string;
};

export type EducProps = {
  name: string;
  yearStart: number;
  yearEnd: number | string;
  role: string;
};

export type LinkProps = {
  name: string;
  icon: IconType | LucideIcon;
  url: string;
};

export type StackProps = {
  name: string;
  icon: IconType | LucideIcon;
  color: string;
  bgColor: string;
  group: "Framework" | "Language" | "UI" | "Machine Learning" | "DevTools";
};

export type CertProps = {
  title: string;
  provider: string;
  dateRec: Date;
  link: string;
  logo: string;
};

export type AwardProps = {
  name: string;
  award: string;
  desc: string;
  img: string;
  event: string;
};
