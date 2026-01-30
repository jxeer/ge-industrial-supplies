import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  { 
    title: "Facility\nMaintenance",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    href: "/services/facility-maintenance"
  },
  { 
    title: "Global\nLogistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
    href: "/services/global-logistics"
  },
  { 
    title: "Environmental\nManagement",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    href: "/services/environmental-management"
  },
  { 
    title: "Construction\nServices",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    href: "/services/construction-services"
  },
  { 
    title: "Specialized\nEquipment",
    image: "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?q=80&w=800&auto=format&fit=crop",
    href: "/services/specialized-equipment"
  },
  { 
    title: "Professional\nSolutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    href: "/services/professional-solutions"
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {/* Space/Earth Background - Full screen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop" 
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        {/* Blue glow arc effect at bottom */}
        <div className="absolute bottom-[30%] left-0 right-0 h-40 bg-gradient-to-t from-cyan-400/30 via-cyan-500/15 to-transparent blur-2xl"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8 tracking-tight italic">
            DELIVERING TURNKEY<br />
            SOLUTIONS FOR<br />
            GLOBAL READINESS
          </h1>
          
          <p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            HUBZone-certified small business providing critical facility
            support, industrial logistics, and environmental services to
            the federal government and private sectors worldwide.
          </p>
          
          <Link href="/services">
            <button 
              className="px-10 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-all"
              data-testid="button-view-capabilities"
            >
              VIEW OUR CAPABILITIES
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Service Image Panels - Taller to match PDF */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 grid grid-cols-3 md:grid-cols-6 w-full"
      >
        {services.map((service, idx) => (
          <Link key={idx} href={service.href}>
            <div 
              className="relative h-72 md:h-96 lg:h-[28rem] group cursor-pointer overflow-hidden"
              data-testid={`link-service-${idx}`}
            >
              {/* Image */}
              <img 
                src={service.image} 
                alt={service.title.replace('\n', ' ')}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/80 transition-colors" />
              {/* Title */}
              <div className="absolute bottom-6 left-4 right-4">
                <h3 className="text-white text-sm md:text-base font-medium leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
