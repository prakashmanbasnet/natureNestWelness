import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-sand-100 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif mb-6 tracking-widest uppercase text-white">{SITE_CONFIG.name}</h2>
            <p className="max-w-sm mb-8 text-sm leading-relaxed opacity-80">
              {SITE_CONFIG.slogan} <br />
              {SITE_CONFIG.shortDescription}
            </p>
            <div className="flex gap-6">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.2em] hover:text-eucalyptus-200 transition-colors">
                Instagram
              </a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.2em] hover:text-eucalyptus-200 transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-eucalyptus-200">Explore</h3>
            <ul className="flex flex-col gap-4 text-sm opacity-80">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-eucalyptus-200">Visit Us</h3>
            <address className="not-italic flex flex-col gap-3 mb-8 text-sm opacity-80">
              <p>{SITE_CONFIG.contact.address}</p>
              <p>Landline: {SITE_CONFIG.contact.phone}</p>
            </address>
            <div className="text-sm space-y-2 opacity-80">
              <p>Every day: {SITE_CONFIG.hours.everyday}</p>
            </div>
          </div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest opacity-60">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
