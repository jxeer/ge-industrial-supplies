import { motion } from "framer-motion";
import { Shield, Globe, Target, Award } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Mission-Focused Execution",
    description: "Every engagement is driven by mission requirements, compliance standards, and measurable performance outcomes aligned with federal acquisition frameworks."
  },
  {
    icon: Globe,
    title: "Global Operational Footprint",
    description: "Active presence across CONUS and OCONUS environments, including the Middle East, supporting military installations and federal facilities worldwide."
  },
  {
    icon: Target,
    title: "Reliability-Centered Methodology",
    description: "Our approach prioritizes preventive maintenance, lifecycle sustainment, and operational continuity to reduce cost of ownership and maximize asset readiness."
  },
  {
    icon: Award,
    title: "Regulatory Compliance & Accountability",
    description: "Full alignment with FAR-based contracting, federal procurement standards, quality management systems, and ethical business governance across all operations."
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=2000&auto=format&fit=crop"
          alt="Capitol Building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-16 md:py-24">
        <div className="max-w-5xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
            data-testid="heading-company-overview"
          >
            COMPANY OVERVIEW
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-3xl space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                G&E Industrial Supplies, Inc. is an SBA HUBZone-certified small business headquartered in El Paso, Texas. We provide integrated facility support, industrial supply, logistics, and environmental services to federal agencies, Department of Defense installations, prime contractors, and commercial operations worldwide.
              </p>
              <p>
                Founded on principles of integrity, operational discipline, and mission-focused execution, G&E has built a reputation for dependable performance in demanding environments. Our team brings decades of combined experience in government contracting, industrial distribution, construction management, and technical services delivery.
              </p>
              <p>
                We operate within structured federal acquisition frameworks, maintaining full compliance with FAR-based procurement standards, quality management protocols, and regulatory requirements. Our experience spans IDIQ, MATOC, SATOC, and SABER contract vehicles, with a demonstrated ability to execute task orders efficiently and to standard.
              </p>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-white mb-10 tracking-tight"
          >
            OPERATIONAL PHILOSOPHY
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border border-white/10 rounded-md p-6 bg-white/5"
                data-testid={`card-pillar-${index}`}
              >
                <pillar.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-display font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-10 space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              CERTIFICATIONS & QUALIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "SBA HUBZone Certified Small Business",
                "ISO 9001 Quality Management System",
                "JCCS Approved for Middle East Operations",
                "$30M Single / $100M Aggregate Bonding",
                "SAM.gov Registered & Active",
                "FAR/DFAR Compliant Operations"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-md px-4 py-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />
                  <span className="text-white/80 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center"
          >
            <div>
              <span className="text-white/40 text-xs uppercase tracking-wider">CAGE Code</span>
              <p className="text-white font-display font-bold text-lg">711V1</p>
            </div>
            <div>
              <span className="text-white/40 text-xs uppercase tracking-wider">UEI</span>
              <p className="text-white font-display font-bold text-lg">G8CXJ2PMKN76</p>
            </div>
            <div>
              <span className="text-white/40 text-xs uppercase tracking-wider">Headquarters</span>
              <p className="text-white font-display font-bold text-lg">El Paso, Texas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
