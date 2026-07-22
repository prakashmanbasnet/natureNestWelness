"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SITE_CONFIG } from "@/constants/site";

export default function ContactPage() {
  return (
    <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Contact Us"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 bg-sand-100 p-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-olive-900 mb-4 font-light">Visit Us</h3>
              <p className="text-slate-500 font-light leading-relaxed">{SITE_CONFIG.contact.address}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-olive-900 mb-4 font-light">Call Us</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-2">Landline: {SITE_CONFIG.contact.phone}</p>
              <p className="text-slate-500 font-light leading-relaxed">WhatsApp: {SITE_CONFIG.contact.whatsapp}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-olive-900 mb-4 font-light">Hours</h3>
              <p className="text-slate-500 font-light leading-relaxed">Every day: {SITE_CONFIG.hours.everyday}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center items-center bg-eucalyptus-100 p-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-olive-900 mb-6 font-light">Book Instantly</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-sm">
              We handle all of our bookings and inquiries directly through WhatsApp for the fastest, most personalized service.
            </p>
            <a href={SITE_CONFIG.contact.whatsappLink} target="_blank" rel="noreferrer">
              <AnimatedButton>
                Message on WhatsApp
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
