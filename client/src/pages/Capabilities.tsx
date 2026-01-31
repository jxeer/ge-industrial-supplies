/**
 * Capabilities.tsx - Company Capabilities Statement Page
 * 
 * Displays G&E Industrial Supplies' official capabilities statement,
 * designed to match the PDF mockup format. This page is commonly
 * used when bidding on government contracts (SAM.gov, etc.)
 * 
 * Layout:
 * - Full-screen Capitol building background (symbolic of federal work)
 * - Two-column layout: Company Data (left), Corporate Summary (right)
 * - Download button for PDF capabilities document
 * - CAGE Code and UEI identifiers at bottom
 * 
 * Route: /capabilities
 */

import { motion } from "framer-motion";

/**
 * Capabilities Component
 * 
 * Renders the capabilities statement page with company information
 * formatted for government contracting purposes.
 */
export default function Capabilities() {
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
            CAPABILITIES STATEMENT
          </motion.h1>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            
            {/* Left Column - Company Data */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-lg font-bold text-white mb-6 tracking-wide">COMPANY DATA</h2>
              <div className="space-y-2 text-white/90 text-sm leading-relaxed">
                <p>Company: G&E Industrial Supplies, Inc.</p>
                <p>Corporation Type: Corp</p>
                <p>SBA Status: HUBZone</p>
                <p>Primary Contact: Melissa Tate</p>
                <p>Email: mtate@gbs-web.com</p>
                <p>Headquarters:</p>
                <p>857 Pendale Rd. El Paso, Tx 79907</p>
                <p>40+ task orders executed under LOGCAP</p>
                <p>Middle East Location:</p>
              </div>
            </motion.div>

            {/* Right Column - Corporate Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-lg font-bold text-white mb-6 tracking-wide">CORPORATE SUMMARY</h2>
              <div className="space-y-4 text-white/90 text-sm leading-relaxed">
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
            </motion.div>
          </div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button 
              className="px-12 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-all mb-8"
              data-testid="button-download-capabilities"
            >
              DOWNLOAD OUR<br />CAPABILITIES
            </button>
            
            <p className="text-white/80 text-sm tracking-wide">
              CAGE Code: 711V1  UEI: G8CXJ2PMKN76
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
