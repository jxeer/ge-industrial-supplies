import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Truck } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Hero Background - Industrial Logistics */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          {/* unsplash: shipping container port logistic industrial */}
          <img 
            src="https://images.unsplash.com/photo-1494412574643-35d324688133?q=80&w=2075&auto=format&fit=crop" 
            alt="Global Industrial Logistics" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              HUBZone Certified Small Business
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6 drop-shadow-lg">
              DELIVERING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                TURNKEY SOLUTIONS
              </span> <br/>
              FOR GLOBAL READINESS
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Providing critical facility support, industrial logistics, and environmental services 
              to the federal government and private sectors worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/capabilities">
                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2">
                  View Capabilities <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg shadow-lg transition-all hover:-translate-y-1">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe2, label: "Global Reach", sub: "US, Mexico, Middle East" },
              { icon: ShieldCheck, label: "DoD Approved", sub: "JCCS Verified Vendor" },
              { icon: Truck, label: "LOGCAP V", sub: "Primary Pillar Support" },
              { icon: CheckCircle2, label: "ISO 9001", sub: "Quality Management" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-primary">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{stat.label}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Comprehensive Support Solutions
            </h3>
            <p className="text-slate-600 text-lg">
              From facility maintenance to global logistics, we deliver operational excellence in challenging environments.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <ServiceCard 
                title="Facility Maintenance"
                description="Base ops, life support, plumbing, HVAC, and technical inspections under LOGCAP V."
                /* unsplash: industrial hvac system maintenance technician */
                image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Global Logistics"
                description="Specialized wholesale of industrial machinery and commercial equipment across borders."
                /* unsplash: cargo ship container logistic export */
                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Environmental Mgmt"
                description="Sustainable waste elimination, hazardous waste collection, and sewage tanker operations."
                /* unsplash: water treatment plant industrial pipes */
                image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Construction Services"
                description="Large-scale infrastructure, roofing, medical air systems, and airfield maintenance."
                /* unsplash: construction site crane building structure */
                image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Specialized Equipment"
                description="Heavy machinery, fleet management, tactical support, and jet refueler trucks."
                /* unsplash: heavy excavator machinery yellow */
                image="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title="Professional Solutions"
                description="HR Solutions, skilled manpower outsourcing, procurement officers, and management teams."
                /* unsplash: corporate meeting room diverse team */
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                link="/services"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 opacity-10 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 opacity-10 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Mobilize?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how G&E Industrial Supplies can support your next mission-critical project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all">
                Request a Consultation
              </button>
            </Link>
            <Link href="/capabilities">
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                Download Capabilities Statement
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
