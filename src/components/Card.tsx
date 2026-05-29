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
    // Standard Card: Transparent background, 0px border radius, no box shadow
    variantStyle = "rounded-none border border-transparent";
  } else if (variant === 'featured') {
    // Featured Card: Transparent background, 10px border radius, no box shadow
    variantStyle = "rounded-cards border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] bg-steel-gray/20 hover:bg-steel-gray/40 shadow-xl";
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
