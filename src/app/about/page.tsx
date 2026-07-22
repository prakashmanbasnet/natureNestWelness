"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { IMAGES } from "@/constants/images";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Our Philosophy" 
                subtitle="About Nature Nest"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6 text-sage-800 text-lg leading-relaxed"
              >
                <p>
                  At Nature Nest Wellness, we believe that true beauty and relaxation come from harmony with nature. Nestled in the heart of Lalitpur, our sanctuary offers an escape from the bustling city life.
                </p>
                <p>
                  Every detail of our space has been carefully curated to invoke a sense of peace. From the earthy sage tones to the gentle aroma of essential oils, we engage all your senses to promote deep healing.
                </p>
                <p>
                  Our therapists are masters of their craft, blending traditional Nepalese and Ayurvedic techniques with modern wellness practices to deliver treatments that are both deeply relaxing and highly effective.
                </p>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[70vh] w-full rounded-2xl overflow-hidden">
              <Image 
                src={IMAGES.services.wellness}
                alt="Spa Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sage-900 text-cream">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl text-sage-200 leading-relaxed font-light">
            "To provide an unparalleled wellness experience that rejuvenates the mind, body, and spirit, empowering our guests to embrace their natural state of well-being."
          </p>
        </div>
      </section>
    </>
  );
}
