"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-olive-900/5 py-4 shadow-sm" : "bg-transparent py-8"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-olive-900 tracking-widest uppercase flex items-center gap-2">
            Nature Nest
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-olive-700 hover:text-olive-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-olive-900/20 text-olive-900 hover:border-olive-900 hover:bg-olive-900 hover:text-white transition-all duration-300 rounded-none text-xs uppercase tracking-[0.2em]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-olive-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-sand-100 z-[60] flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <button
          className="absolute top-6 right-6 text-olive-900"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-5xl font-serif text-olive-900 hover:text-olive-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 px-10 py-4 border border-olive-900 text-olive-900 hover:bg-olive-900 hover:text-white transition-colors text-sm uppercase tracking-[0.2em]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </>
  );
}
