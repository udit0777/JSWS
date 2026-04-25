import React, { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'lg';
  icon?: LucideIcon;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  icon: Icon,
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const sizeClass = size === 'lg' ? 'btn-lg' : '';
  
  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()} {...props}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}
