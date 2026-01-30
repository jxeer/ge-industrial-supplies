import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    id: "facility-maintenance",
    title: "Facility Maintenance",
    description: "Comprehensive base ops and life support including plumbing, HVAC, and mechanical systems maintenance."
  },
  {
    id: "global-logistics",
    title: "Global Logistics", 
    description: "Specialized merchant wholesaler sourcing and delivering industrial machinery and commercial equipment worldwide."
  },
  {
    id: "environmental-management",
    title: "Environmental Management",
    description: "Sustainable waste elimination and mission-critical utility management for federal installations."
  },
  {
    id: "construction-services",
    title: "Construction Services",
    description: "Large-scale infrastructure projects and turnkey engineering solutions for operational readiness."
  },
  {
    id: "specialized-equipment",
    title: "Specialized Equipment",
    description: "Deployment and leasing of heavy machinery and tactical vehicles for global defense operations."
  },
  {
    id: "professional-solutions",
    title: "Professional Solutions",
    description: "Mission-critical technical manpower and HR solutions for government and private-sector partners."
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Image - Capitol Building */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=2000&auto=format&fit=crop" 
          alt="Capitol Building"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-16 md:py-24">
        <div className="max-w-5xl w-full">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-12 tracking-tight"
          >
            OUR SERVICES
          </motion.h1>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <Link href={`/services/${service.id}`}>
                  <div 
                    className="group cursor-pointer p-6 border border-white/20 hover:border-white/40 transition-all hover:bg-white/5"
                    data-testid={`link-service-${service.id}`}
                  >
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Link href="/contact">
              <button 
                className="px-12 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-all mb-8"
                data-testid="button-contact-services"
              >
                CONTACT US
              </button>
            </Link>
            
            <p className="text-white/80 text-sm tracking-wide">
              CAGE Code: 711V1  UEI: G8CXJ2PMKN76
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
