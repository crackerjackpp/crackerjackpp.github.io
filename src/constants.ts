import { CaseStudy, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    subLinks: [
      { name: 'Fractional Talent', path: '/services/fractional-talent' },
      { name: 'HR Advisory', path: '/services/hr-advisory' },
      { name: 'Leadership & Team Coaching', path: '/services/coaching' },
    ],
  },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Philosophy', path: '/philosophy' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: 'Tech',
    challenge: 'High growth tech firm struggling with talent acquisition and retention.',
    solution: 'Fractional HR leadership to build scalable recruitment processes.',
    result: 'Increased employee retention by 20% within the first year.',
  },
  {
    industry: 'Retail',
    challenge: 'Established retail chain facing declining employee morale and engagement.',
    solution: 'Leadership and team coaching program for store managers.',
    result: 'Boosted employee engagement scores by 30%.',
  },
  {
    industry: 'Services SME',
    challenge: 'Small to medium enterprise needing senior HR expertise without the full-time cost.',
    solution: 'Fractional HR Director providing strategic guidance and operational support.',
    result: 'Saved 40% on HR leadership costs while improving HR effectiveness.',
  },
  {
    industry: 'Media Agency',
    challenge: 'A fast-paced media agency needed to develop its next line of leaders.',
    solution: 'Implemented a bespoke talent development and professional coaching plan.',
    result: 'Successfully promoted 5 new leaders from within the organization.',
  },
  {
    industry: 'Manufacturing',
    challenge: 'A manufacturing company needed to streamline its HR operations post-merger.',
    solution: 'HR Advisory services to harmonize policies and systems.',
    result: 'Achieved full HR systems integration 3 months ahead of schedule.',
  },
];

export const DISTINCTIONS: string[] = [
    "We underpromise, overdeliver.",
    "Our petite size ensures timely, quality results.",
    "We treat your business like it’s ours."
];

export const OUR_PROMISES: { title: string; description: string }[] = [
    { title: "Fairness", description: "We operate with fairness and equality in all our partnerships." },
    { title: "Transparency", description: "We believe in open and honest communication to build lasting relationships." },
    { title: "Trust", description: "Our foundation is built on trust, earning it through every action." },
    { title: "Flexibility", description: "We adapt to your needs, providing custom solutions that fit your business." },
];