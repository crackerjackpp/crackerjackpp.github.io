export interface CaseStudy {
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Service {
  title: string;
  description: string;
  link: string;
}

export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}