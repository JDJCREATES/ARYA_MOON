import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg border border-gray-200 dark:border-gray-700 
        shadow-sm 
        ${hover ? "hover:shadow-lg transition-shadow cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
