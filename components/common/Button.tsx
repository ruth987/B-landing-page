// components/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  white?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, white }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-xs bg-transparent  hover:bg-secondary-light/20 ${white ? 'text-white' : 'text-primary hover:bg-secondary-light/60'} hover:border-white hover:border'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;