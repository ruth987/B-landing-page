// components/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs ${
        variant === 'primary' ? 'bg-secondary text-black' : 'bg-transparent border border-secondary text-secondary'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;