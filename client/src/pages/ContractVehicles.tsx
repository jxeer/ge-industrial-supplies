/**
 * ContractVehicles.tsx - Multiple Award Contracts / Contract Vehicles Page
 * 
 * Displays G&E's contract vehicles and multiple award contracts,
 * signaling to federal agencies that G&E understands government
 * procurement processes and is positioned to engage through
 * established acquisition channels.
 * 
 * Route: /contract-vehicles
 */

import { motion } from "framer-motion";
import { Link } from "wouter";

const contractVehicles = [
  {
    name: "LOGCAP V",
    fullName: "Logistics Civil Augmentation Program V",
    agency: "U.S. Army / ACC-RI",
    description: "Multiple award task order contract for comprehensive base operations support, facility maintenance, and life support services at military installations worldwide. G&E has successfully executed 40+ task orders under LOGCAP.",
    naics: ["561210", "561720", "562111"],
    status: "Active"
  },
  {
    name: "GSA Schedule",
    fullName: "General Services Administration Multiple Award Schedule",
    agency: "General Services Administration",
    description: "Federal Supply Schedule contract enabling streamlined procurement of industrial supplies, equipment, and facility support services by federal, state, and local government agencies.",
    naics: ["423840", "423440", "423720"],
    status: "Active"
  },
  {
    name: "USACE MATOC",
    fullName: "U.S. Army Corps of Engineers Multiple Award Task Order Contract",
    agency: "USACE - Middle East District",
    description: "Task order contract for construction, facility maintenance, and engineering support services across USACE-Med areas of responsibility including the Middle East theater.",
    naics: ["236220", "238220", "562910"],
    status: "Active"
  },
  {
    name: "DLA Tailored Logistics Support",
    fullName: "Defense Logistics Agency - Tailored Logistics Support",
    agency: "Defense Logistics Agency",
    description: "Contract vehicle for specialized wholesale distribution of industrial supplies, machinery, and equipment to Department of Defense customers worldwide.",
    naics: ["423840", "423440"],
    status: "Active"
  }
];

const certifications = [
  "SBA HUBZone Certified Small Business",
  "ISO 9001 Certified Quality Management System",
  "JCCS Approved for Middle East Operations",
  "$30M Single / $100M Aggregate Bonding Capacity",
  "SAM.gov Registered & Active"
];

export default function ContractVehicles() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background Image */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight"
          >
            CONTRACT VEHICLES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-base md:text-lg mb-12 max-w-3xl leading-relaxed"
          >
            G&E Industrial Supplies maintains active positions on multiple award contracts 
            and government-wide acquisition vehicles, enabling streamlined procurement for 
            federal agencies.
          </motion.p>

          {/* Contract Vehicles Grid */}
          <div className="space-y-6 mb-16">
            {contractVehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="border border-white/20 p-6 md:p-8 hover:border-white/30 transition-colors"
                data-testid={`card-contract-${idx}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {vehicle.name}
                    </h2>
                    <p className="text-white/60 text-sm">
                      {vehicle.fullName}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 self-start whitespace-nowrap">
                    {vehicle.status}
                  </span>
                </div>
                
                <p className="text-white/60 text-xs uppercase tracking-wider mb-2">
                  Contracting Agency: {vehicle.agency}
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {vehicle.naics.map((code) => (
                    <span key={code} className="text-xs text-white/50 border border-white/15 px-2 py-1">
                      NAICS {code}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-white/20 p-6 md:p-8 mb-12"
          >
            <h2 className="text-xl font-bold text-white mb-6 tracking-wide">
              CERTIFICATIONS & QUALIFICATIONS
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-white/60 mt-0.5">•</span>
                  <p className="text-white/80 text-sm leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <Link href="/contact">
              <button 
                className="px-12 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-all mb-8"
                data-testid="button-contact-contracts"
              >
                REQUEST MORE INFORMATION
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
