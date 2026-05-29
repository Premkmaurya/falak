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
  const baseStyle = "inline-flex items-center justify-center font-visueltpro font-normal text-caption uppercase tracking-wider rounded-badges transition-all duration-300";
  
  let variantStyle = "";
  
  if (variant === 'lozenge') {
    // Lozenge Badge: rgba(200, 200, 200, 0.1) background with #ffffff text
    variantStyle = "bg-[rgba(200,200,200,0.1)] text-cloud-whisper px-4 py-2 border border-transparent hover:border-[rgba(255,255,255,0.05)] hover:bg-[rgba(200,200,200,0.15)]";
  } else if (variant === 'subtle') {
    // Subtle Pill Badge: transparent background with #ffffff text
    variantStyle = "bg-transparent text-cloud-whisper border border-[rgba(255,255,255,0.15)] px-3 py-1 hover:border-cloud-whisper";
  }

  return (
    <span className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </span>
  );
};
export default Badge;
