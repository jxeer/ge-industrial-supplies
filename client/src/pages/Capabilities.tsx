import { motion } from "framer-motion";
import { FileText, Users, Building, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Capabilities() {
  const naicsCodes = [
    { code: "561210", desc: "Facilities Support Services" },
    { code: "423840", desc: "Industrial Supplies Merchant Wholesalers" },
    { code: "423440", desc: "Commercial Equipment and Supplies Wholesalers" },
    { code: "423720", desc: "Plumbing and Heating Equipment Wholesalers" },
    { code: "423830", desc: "Industrial Machinery and Equipment Wholesalers" },
    { code: "532112", desc: "Passenger Car Leasing" },
    { code: "812320", desc: "Laundry Service" },
    { code: "541330", desc: "Engineering Services" },
    { code: "562119", desc: "Other Waste Collection" },
    { code: "562211", desc: "Hazardous Waste Treatment and Disposal" },
    { code: "238990", desc: "Predictive Maintenance Service" }
  ];

  const clients = [
    "U.S. Department of Defense (DoD)",
    "U.S. Department of State (DOS)",
    "U.S. Air Force",
    "NATO Allied Command",
    "Ministry of Defense - Government of India",
    "Department of Homeland Security (DHS)",
    "CARE, Doha, Qatar (ISO 9001)"
  ];

  const partners = [
    "Lockheed Martin (Subcontractor)",
    "Raytheon Technologies (Subcontractor)",
    "Northrop Grumman (Technical Support Partner)",
    "Boeing Defense, Space & Security",
    "General Dynamics"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section - Like PDF */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">CAPABILITIES STATEMENT</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout like PDF */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column - Company Data */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                COMPANY DATA
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-semibold text-slate-800">G&E Industrial Supplies, Inc.</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Corporation Type:</span>
                  <span className="font-semibold text-slate-800">Corp</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">SBA Status:</span>
                  <span className="font-semibold text-slate-800">HUBZone</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Primary Contact:</span>
                  <span className="font-semibold text-slate-800">Melissa Tate</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-semibold text-slate-800">mtate@gbs-web.com</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block mb-1">Headquarters:</span>
                  <span className="font-semibold text-slate-800">857 Pendale Rd. El Paso, TX 79907</span>
                </div>
                <div className="pt-2 text-primary font-semibold">
                  40+ task orders executed under LOGCAP
                </div>
                <div className="pt-1">
                  <span className="text-slate-500">Middle East Location:</span>
                  <span className="font-semibold text-slate-800 ml-2">Qatar</span>
                </div>
              </div>
            </div>

            {/* NAICS Codes */}
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                NAICS CODES
              </h2>
              <div className="space-y-2">
                {naicsCodes.map((item) => (
                  <div key={item.code} className="flex gap-3 text-sm">
                    <span className="font-mono font-bold text-primary w-16">{item.code}</span>
                    <span className="text-slate-600">- {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Corporate Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-6">CORPORATE SUMMARY</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Founded in 1989, G&E Industrial Supplies, Inc. is a HUBZone-certified small business headquartered in El Paso, Texas, serving federal government and private-sector clients across the U.S. and abroad.
                </p>
                <p>
                  We specialize in providing facility support services, custodial services, mechanical, and environmental supply and service solutions—from heavy equipment and facility maintenance to waste management and overseas support under JCCS approval for the Middle East.
                </p>
                <p>
                  With a long-standing reputation for reliability and responsive service, G&E delivers turnkey support solutions that enhance operational readiness, compliance, and efficiency for federal, state, and local agencies.
                </p>
              </div>
            </div>

            {/* Experience & Clients */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                EXPERIENCE AND CLIENT PORTFOLIO
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                G&E's experience spans defense, construction, facility support, custodial service, and disaster response sectors, demonstrating a strong regional and global presence.
              </p>
              <p className="text-sm text-slate-600 mb-6">
                The company has a solid track record in O&M, custodial service, construction, and defense sectors, including IDIQ Global and Qatar projects.
              </p>
              
              <h3 className="text-sm font-bold text-slate-800 mb-3">GOVERNMENT & DEFENSE CLIENTS:</h3>
              <ul className="space-y-1 text-sm text-slate-600 mb-6">
                {clients.map((client, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {client}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold text-slate-800 mb-3">EXPERIENCE:</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {partners.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            {/* Management Team */}
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                MANAGEMENT TEAM
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The management team, with its 30+ years of operations and long-standing reputation for reliability, has successfully established a network of global partners and a solid industrial product portfolio, focusing on delivering high-quality, responsive service.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button 
            className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-download-capabilities"
          >
            DOWNLOAD OUR CAPABILITIES
          </button>
          <p className="text-xs text-slate-400 mt-4">
            CAGE Code: 711V1 UEI: G8CXJ2PMKN76
          </p>
        </motion.div>
      </div>
    </div>
  );
}
