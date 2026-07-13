import React from 'react';

interface BadgeProps {
  variant?: 'lozenge' | 'subtle';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'lozenge',
  children,
  className = '',
}) => {
  const baseStyle = "inline-flex items-center justify-center font-visueltpro font-normal text-caption uppercase tracking-widest rounded-badges transition-all duration-300";
  
  let variantStyle = "";
  
  if (variant === 'lozenge') {
    // Warm background, dark walnut text
    variantStyle = "bg-[rgba(184,151,116,0.08)] text-dark-walnut px-4 py-2 border border-[rgba(184,151,116,0.15)]";
  } else if (variant === 'subtle') {
    // Transparent background, border and text secondary, subtle hover
    variantStyle = "bg-transparent text-text-secondary border border-border-medium px-3 py-1 hover:border-text-primary hover:text-text-primary";
  }

  return (
    <span className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
