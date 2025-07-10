import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  as?: React.ElementType;
  [x: string]: any; // for other props like to, href
};

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    className = '', 
    as: Component = 'button', 
    ...props 
}) => {

  const baseStyles = 'inline-block px-6 py-3 rounded-md text-base font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-secondary text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-primary text-white hover:bg-primary-hover focus:ring-slate-500',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-slate-500'
  };

  return (
    <Component 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;