import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'violet';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-visueltpro font-normal tracking-[0.1em] uppercase text-[12px] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-warm-oak active:scale-[0.98] cursor-pointer rounded-buttons";
  
  let variantStyle = "";
  
  if (variant === 'primary') {
    // Primary: Solid Brand Black background with Warm White text, square edges
    variantStyle = "bg-brand-black text-bg-warm px-8 py-3.5 hover:bg-dark-walnut hover:shadow-md";
  } else if (variant === 'ghost') {
    // Ghost: Transparent background, text primary with border
    variantStyle = "bg-transparent text-text-primary border border-text-primary px-7 py-3 hover:border-warm-oak hover:text-warm-oak";
  } else if (variant === 'violet') {
    // Oak Accent: Warm Oak background, warm white text
    variantStyle = "bg-warm-oak text-bg-warm px-8 py-3.5 hover:bg-dark-walnut hover:shadow-[0_4px_15px_rgba(184,151,116,0.2)] border border-transparent";
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
