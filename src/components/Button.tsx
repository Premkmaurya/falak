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
  const baseStyle = "inline-flex items-center justify-center font-visueltpro font-normal tracking-wide transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-action-violet active:scale-[0.98] cursor-pointer";
  
  let variantStyle = "";
  
  if (variant === 'primary') {
    // Primary Lozenge Button: #f5f5f0 background with #000000 text
    variantStyle = "bg-slate-dust text-midnight-void rounded-buttons px-6 py-3 text-[14px] hover:bg-cloud-whisper hover:shadow-lg";
  } else if (variant === 'ghost') {
    // Ghost Lozenge Button: transparent background, #ffffff text with #ffffff border
    variantStyle = "bg-transparent text-cloud-whisper border border-cloud-whisper rounded-buttons px-5 py-[11px] text-[14px] hover:border-action-violet hover:text-action-violet";
  } else if (variant === 'violet') {
    // Reusable Action Violet Accent Button
    variantStyle = "bg-action-violet text-cloud-whisper rounded-buttons px-6 py-3 text-[14px] hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(127,0,255,0.4)] border border-transparent";
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
