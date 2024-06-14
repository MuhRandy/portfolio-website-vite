import { ClassValue } from "clsx";
import { ReactNode } from "react";

type NavData = {
  link: string;
  name: string;
  offset: number;
};

type NavsData = NavData[];

type PostData = {
  title: string;
  date: string;
  text: string;
  url: string;
};

type PostsData = PostData[];

type ProjectData = {
  projectName: string;
  imgSrc: string;
  siteLink: string;
  githubLink: string;
  desc: string;
  buildWith: string[];
};

type ProjectsData = ProjectData[];

type ExperiencesData = {
  jobTitle: string;
  company: string;
  jobDescription: string;
}[];

type DefaultAnimationProps = {
  className?: ClassValue;
  children: ReactNode;
};

export type {
  ProjectData,
  NavData,
  NavsData,
  PostData,
  PostsData,
  ProjectsData,
  ExperiencesData,
  DefaultAnimationProps,
};
