import { IconType } from 'react-icons';

export type ProjectProps = {
  name: string;
  desc: string;
  img: string;
  stack: string[];
  weblink: string | null;
  ghlink: string;
};

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
  desc: string;
};

export type LinkProps = {
  name: string;
  icon: IconType;
  url: string;
};
