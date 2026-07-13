import React from 'react';

interface CardProps {
  variant?: 'standard' | 'featured';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'standard',
  children,
  className = '',
  onClick,
}) => {
  const baseStyle = "relative overflow-hidden transition-all duration-500 bg-transparent";
  
  let variantStyle = "";
  
  if (variant === 'standard') {
    // Standard Card: Transparent background, 0px border radius, no border
    variantStyle = "rounded-none border border-transparent";
  } else if (variant === 'featured') {
    // Featured Card: Warm white / glass background, minimal rounded corners (4px as defined in index.css), light shadows
    variantStyle = "rounded-cards border border-border-subtle hover:border-border-medium bg-white/80 hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl";
  }

  return (
    <div
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </div>
  );
};

export default Card;
