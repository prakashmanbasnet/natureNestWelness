"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  alignment = "left",
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right",
  }[alignment];

  return (
    <div className={`mb-16 md:mb-24 ${alignClass} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-olive-700 uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-6 flex items-center justify-center gap-4"
        >
          {alignment === "center" && <span className="w-8 h-[1px] bg-olive-700/30" />}
          {subtitle}
          {alignment === "center" && <span className="w-8 h-[1px] bg-olive-700/30" />}
        </motion.p>
      )}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-olive-900 leading-tight font-light"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
