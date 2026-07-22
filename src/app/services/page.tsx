"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/content/services";
import { IMAGES } from "@/constants/images";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-olive-900">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src={IMAGES.services.spa} 
            alt="Spa Services Header" 
            fill 
            className="object-cover object-center mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 text-center px-6 pt-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-eucalyptus-200 uppercase tracking-[0.3em] text-sm font-medium mb-6"
          >
            A Journey to Total Wellness
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-serif text-white font-light tracking-tight"
          >
            Our Menu
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-32">
            {SERVICES.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="scroll-mt-32"
                id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              >
                <div className="mb-16 text-center">
                  <h2 className="text-4xl md:text-5xl font-serif text-olive-900 mb-6 font-light">
                    {category.category}
                  </h2>
                  {category.description && (
                    <p className="text-slate-500 text-lg mx-auto max-w-2xl font-light">
                      {category.description}
                    </p>
                  )}
                  <div className="w-12 h-[1px] bg-olive-900/20 mx-auto mt-12" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  {category.items.map((item) => (
                    <div key={item.id} className="group" id={item.id}>
                      <div className="flex justify-between items-baseline mb-3 gap-4">
                        <h3 className="text-xl md:text-2xl font-serif text-olive-900 group-hover:text-olive-700 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex-grow border-b border-dotted border-slate-300 relative -top-1 opacity-50"></div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-olive-900 font-medium tracking-wide">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-start text-sm mt-2">
                        <p className="text-slate-500 max-w-[80%] leading-relaxed font-light">
                          {item.description}
                        </p>
                        {item.duration !== "-" && (
                          <span className="text-olive-700 uppercase tracking-widest text-[10px] font-medium whitespace-nowrap pt-1">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
