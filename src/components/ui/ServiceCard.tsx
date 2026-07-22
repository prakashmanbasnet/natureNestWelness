"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  href,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link href={href} className="block w-full h-full">
        <div className="relative aspect-[3/4] w-full overflow-hidden mb-8 bg-eucalyptus-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
        
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-serif text-olive-900 mb-3 group-hover:text-olive-700 transition-colors duration-500 font-light">{title}</h3>
            <p className="text-slate-500 text-sm max-w-[280px] font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="w-12 h-12 rounded-full border border-olive-900/10 flex items-center justify-center text-olive-900 group-hover:bg-olive-900 group-hover:text-white group-hover:border-olive-900 transition-all duration-500 flex-shrink-0">
            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
