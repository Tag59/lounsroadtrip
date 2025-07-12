"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({ children, href, onClick, className }: AnimatedButtonProps) {
  const baseClasses = "px-6 py-3 border border-gray-700 rounded-full font-semibold text-gray-700 transition-colors";

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, backgroundColor: "#4B5563", color: "#F9FAFB" }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} inline-block ${className ?? ""}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: "#4B5563", color: "#F9FAFB" }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
}
