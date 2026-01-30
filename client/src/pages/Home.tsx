import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Wrench, 
  Globe2, 
  Leaf, 
  Building2, 
  Truck, 
  Users,
  ArrowRight
} from "lucide-react";

const services = [
  { 
    icon: Wrench, 
    title: "Facility Maintenance",
    href: "/services#facility"
  },
  { 
    icon: Globe2, 
    title: "Global Logistics",
    href: "/services#logistics"
  },
  { 
    icon: Leaf, 
    title: "Environmental Management",
    href: "/services#environmental"
  },
  { 
    icon: Building2, 
    title: "Construction Services",
    href: "/services#construction"
  },
  { 
    icon: Truck, 
    title: "Specialized Equipment",
    href: "/services#equipment"
  },
  { 
    icon: Users, 
    title: "Professional Solutions",
    href: "/services#professional"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Centered like PDF */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1494412574643-35d324688133?q=80&w=2075&auto=format&fit=crop" 
            alt="Global Industrial Logistics" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8 tracking-tight">
              DELIVERING TURNKEY<br />
              SOLUTIONS FOR<br />
              GLOBAL READINESS
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              HUBZone-certified small business providing critical facility
              support, industrial logistics, and environmental services to
              the federal government and private sectors worldwide.
            </p>
            
            <Link href="/services">
              <button 
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-md font-semibold text-base shadow-lg transition-all inline-flex items-center gap-2"
                data-testid="button-view-capabilities"
              >
                VIEW OUR CAPABILITIES
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Icons Grid - Matches PDF layout */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {services.map((service, idx) => (
              <Link key={idx} href={service.href}>
                <div 
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
                  data-testid={`link-service-${idx}`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section - Like PDF */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Dark Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 text-white p-8 md:p-10 rounded-lg"
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Facility<br />Maintenance
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                This is a primary pillar of their business, specifically under the LOGCAP V contract. They provide comprehensive "base ops" and life support, including plumbing and HVAC, as well as technical inspections and mechanical systems maintenance for military installations.
              </p>
              <Link href="/services#facility">
                <span className="text-primary-foreground underline underline-offset-4 hover:text-white transition-colors text-sm font-medium">
                  Learn more
                </span>
              </Link>
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  Base Ops and Life Support, Qatar and Kuwait (LOGCAP V)
                </h3>
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-semibold">Client:</span> Vectrus Systems Corporation
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Value:</span> $23.4M
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 leading-relaxed">
                  Multi-trade base support: inspections, repairs, HVAC, water and wastewater, custodial service, sanitation, equipment leasing, fuel facility support, and security and site infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Statement CTA - Like PDF */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            CAPABILITIES STATEMENT
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div>
              <p className="text-sm text-slate-500 mb-1">Company</p>
              <p className="font-semibold text-slate-800">G&E Industrial Supplies, Inc.</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200"></div>
            <div>
              <p className="text-sm text-slate-500 mb-1">SBA Status</p>
              <p className="font-semibold text-slate-800">HUBZone</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-200"></div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Primary Contact</p>
              <p className="font-semibold text-slate-800">Melissa Tate</p>
            </div>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Founded in 1989, G&E Industrial Supplies, Inc. is a HUBZone-certified small business headquartered in El Paso, Texas, serving federal government and private-sector clients across the U.S. and abroad.
          </p>
          <Link href="/capabilities">
            <button 
              className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-download-capabilities"
            >
              DOWNLOAD OUR CAPABILITIES
            </button>
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            CAGE Code: 711V1 UEI: G8CXJ2PMKN76
          </p>
        </div>
      </section>
    </div>
  );
}
