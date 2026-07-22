import Image from "next/image";
import HeroScene from "@/components/canvas/HeroScene";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ServiceCard from "@/components/ui/ServiceCard";
import { IMAGES } from "@/constants/images";
import { SERVICES } from "@/content/services";
import { SITE_CONFIG } from "@/constants/site";

export default function Home() {
  // Take first 4 services from different categories to feature
  const featuredServices = [
    { ...SERVICES[0].items[0], imageSrc: IMAGES.services.massage }, // Signature
    { ...SERVICES[1].items[1], imageSrc: IMAGES.services.spa },     // Head & Shoulder
    { ...SERVICES[2].items[0], imageSrc: IMAGES.services.facial },  // Facelift
    { ...SERVICES[5].items[0], imageSrc: IMAGES.services.hair },    // Hair cut
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-eucalyptus-100">
        <HeroScene />
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <p className="text-olive-700 uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-8 animate-fade-in">
            Welcome to Your Sanctuary
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-olive-900 mb-12 leading-[1] animate-fade-up tracking-tight">
            Nature's Touch.<br />
            <span className="italic text-olive-700 font-light">Your Wellness.</span>
          </h1>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a href={SITE_CONFIG.contact.whatsappLink} target="_blank" rel="noreferrer" className="block">
              <AnimatedButton>Book an Appointment</AnimatedButton>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] text-olive-700 font-medium">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-olive-700 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-olive-900 font-light">
            "At Nature Nest Wellness, we blend ancient <span className="italic text-olive-700">healing traditions</span> with modern luxury to create an oasis of tranquility. Our expert therapists are dedicated to rejuvenating your <span className="italic text-olive-700">mind, body, and soul</span>."
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 md:py-48 bg-sand-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <SectionTitle 
              title="Featured Treatments" 
              subtitle="Our Signature Offerings"
              className="mb-0 md:mb-0"
            />
            <AnimatedButton className="hidden md:block">
              View All Services
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                href={`/services#${service.id}`}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-16 flex justify-center md:hidden">
             <AnimatedButton>
              View All Services
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Parallax Image / Quote Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image 
          src={IMAGES.hero.main}
          alt="Spa Interior"
          fill
          className="object-cover object-center transition-all duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-olive-900/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl leading-tight font-light tracking-wide">
            Elevate your senses and escape the ordinary.
          </h2>
        </div>
      </section>

    </>
  );
}

