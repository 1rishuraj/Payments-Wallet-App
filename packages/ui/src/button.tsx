"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  clickfxn:() => void; 
}

export const Button = ({ children, className,clickfxn}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={clickfxn}
    >
      {children}
    </button>
  );
};
