import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  { 
    title: "Facility\nMaintenance",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    href: "/services#facility"
  },
  { 
    title: "Global\nLogistics",
    image: "https://images.unsplash.com/photo-1494412574643-35d324688133?q=80&w=800&auto=format&fit=crop",
    href: "/services#logistics"
  },
  { 
    title: "Environmental\nManagement",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    href: "/services#environmental"
  },
  { 
    title: "Construction\nServices",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    href: "/services#construction"
  },
  { 
    title: "Specialized\nEquipment",
    image: "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=800&auto=format&fit=crop",
    href: "/services#equipment"
  },
  { 
    title: "Professional\nSolutions",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    href: "/services#professional"
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Space/Earth Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Earth from space" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Blue glow arc effect */}
        <div className="absolute bottom-1/3 left-0 right-0 h-64 bg-gradient-to-t from-cyan-500/20 via-cyan-500/10 to-transparent blur-3xl z-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Hero Section - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-8">
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
            
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              HUBZone-certified small business providing critical facility
              support, industrial logistics, and environmental services to
              the federal government and private sectors worldwide.
            </p>
            
            <Link href="/services">
              <button 
                className="px-10 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-slate-900 transition-all"
                data-testid="button-view-capabilities"
              >
                VIEW OUR CAPABILITIES
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Service Image Panels - Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-6 w-full"
        >
          {services.map((service, idx) => (
            <Link key={idx} href={service.href}>
              <div 
                className="relative h-48 md:h-64 group cursor-pointer overflow-hidden"
                data-testid={`link-service-${idx}`}
              >
                {/* Image */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-colors" />
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-sm md:text-base font-medium leading-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
