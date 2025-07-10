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

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export interface Promise {
  title: string;
  description: string;
}

export interface IconProps {
  className?: string;
  size?: number;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  as?: React.ElementType;
  type?: 'button' | 'submit' | 'reset';
  [x: string]: any; // for other props like to, href
}
