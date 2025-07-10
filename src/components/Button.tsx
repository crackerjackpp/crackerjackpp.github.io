import React from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary',
    size = 'md',
    className = '', 
    disabled = false,
    loading = false,
    as: Component = 'button', 
    ...props 
}) => {

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const variantStyles = {
    primary: 'bg-secondary text-white hover:bg-indigo-700 focus:ring-indigo-500 disabled:hover:bg-secondary',
    secondary: 'bg-primary text-white hover:bg-slate-700 focus:ring-slate-500 disabled:hover:bg-primary',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-slate-500 disabled:hover:bg-transparent disabled:hover:text-primary'
  };

  const isDisabled = disabled || loading;

  return (
    <Component 
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </Component>
  );
};

export default Button;
