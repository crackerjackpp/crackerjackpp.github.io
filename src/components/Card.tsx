import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const cardClasses = `bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={`${cardClasses} text-left`}>
        {children}
      </button>
    );
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;