"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({ children, onClick, className = "" }: AnimatedButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    ref.current!.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    ref.current!.style.transform = `translate(0px, 0px)`;
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative px-10 py-4 bg-transparent border border-olive-900 text-olive-900 overflow-hidden group transition-all duration-500 ease-out hover:border-olive-700 hover:shadow-lg ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-medium">
        {children}
      </span>
      <div className="absolute inset-0 bg-olive-900 transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
      <span className="absolute inset-0 z-10 flex items-center justify-center text-xs uppercase tracking-[0.2em] font-medium text-white opacity-0 transform translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </span>
    </motion.button>
  );
}
