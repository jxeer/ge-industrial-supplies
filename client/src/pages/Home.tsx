/**
 * Home.tsx - Homepage / Landing Page
 *
 * The main entry point visitors see when arriving at the G&E website.
 * Features a full-screen hero with space imagery, credential strip,
 * scrolling sections for capabilities, contract vehicles, and leadership.
 *
 * Sections:
 * - Hero: Full-screen background with tagline, CTA, and credentials
 * - Mission Support: Key mission outcomes grid
 * - Core Capabilities: 10-item grid of service areas
 * - Contract Vehicles: Preview of active/pending contracts
 * - Executive Leadership: Photo preview of key leaders
 * - Footer: Shared site-wide footer component
 *
 * Route: /
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

/* Leadership headshot photo imports */
import ajithPhoto from "@assets/Ajith-Photo_1771271267641.jpg";
import johnPaulPhoto from "@assets/John_Paul_Vice_President_1771271267642.png";
import melissaPhoto from "@assets/Melissa_Tate__1771271267643.jpg";

/**
 * Core Capabilities List
 * 9 service areas displayed in the capabilities grid.
 * Aligned with federal contracting terminology.
 */
const capabilities = [
  "Base & Facility Support",
  "Construction",
  "Waste Management & Environmental Services",
  "Bulk & Retail Fuel / Water Distribution Support",
  "Airfield Operations & Ground Support",
  "Power Generation & Utilities Management",
  "Emergency & Critical Response Services",
  "Transportation & Fleet Management",
  "Physical Security & Installation Support Services",
];

/**
 * Mission Outcomes
 * Key value propositions displayed with checkmark icons.
 */
const missionOutcomes = [
  "Increase operational reliability",
  "Reduce lifecycle cost of ownership",
  "Improve installation quality of life",
  "Sustain and enhance mission readiness",
];

/**
 * Contract Vehicles Preview
 * Subset of active contract vehicles shown on the homepage.
 * GSA Schedule marked as "Pending" with yellow badge styling.
 * Vectrus Systems Corporation listed as prime on LOGCAP V and DLA.
 */
const contractVehicles = [
  { name: "LOGCAP V", agency: "U.S. Army / ACC-RI / Vectrus Systems Corporation" },
  { name: "GSA Schedule", agency: "General Services Administration", pending: true },
  { name: "USACE MATOC", agency: "USACE - Middle East District" },
  { name: "DLA Tailored Logistics Support", agency: "Defense Logistics Agency / Vectrus Systems Corporation" },
];

/**
 * Leadership Preview
 * Three key leaders shown on homepage in alphabetical order.
 * Links to full Leadership page for complete team listing.
 */
const leadershipPreview = [
  { name: "Ajith K. Nair", title: "President & COO", image: ajithPhoto },
  { name: "John Paul", title: "VP, Global Sales", image: johnPaulPhoto },
  { name: "Melissa Harris Tate", title: "Lead Director, BD & Capture", image: melissaPhoto },
];

/**
 * Home Component
 *
 * Renders the full landing page with all sections.
 * Uses Framer Motion for scroll-triggered animations.
 * Homepage uses transparent Navbar (overlay on hero image).
 */
export default function Home() {
  return (
    <div className="relative bg-black">

      {/* ================================================================
          HERO SECTION
          Full-screen background with earth-from-space imagery,
          company tagline, CTA button, and credentials strip.
          ================================================================ */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background image with gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop"
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute bottom-[30%] left-0 right-0 h-40 bg-gradient-to-t from-cyan-400/30 via-cyan-500/15 to-transparent blur-2xl" />
        </div>

        {/* Hero content: tagline, subtitle, CTA, credentials */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8 tracking-tight italic">
              DELIVERING TURNKEY<br />
              SOLUTIONS FOR<br />
              GLOBAL READINESS
            </h1>

            {/* Subtitle description */}
            <p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              HUBZone-certified small business enabling DoD readiness through construction, integrated facility support, operations & maintenance, industrial logistics, and environmental services worldwide.
            </p>

            {/* Primary CTA button */}
            <Link href="/contact">
              <button
                className="px-10 py-4 border-2 border-white text-white font-semibold text-sm tracking-wider hover:bg-white hover:text-black transition-all"
                data-testid="button-contact-cta"
              >
                ENGAGE WITH US
              </button>
            </Link>

            {/* Credentials strip: UEI, CAGE, Bonding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10 text-white/70 text-xs md:text-sm tracking-wider"
              data-testid="credentials-strip"
            >
              <span>UEI: G8CXJ2PMKN76</span>
              <span className="hidden md:inline text-white/30">|</span>
              <span>CAGE: 711V1</span>
              <span className="hidden md:inline text-white/30">|</span>
              <span>Bonding: $30M Single / $100M Aggregate</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll-down arrow button - smooth scrolls to capabilities section */}
        <div className="relative z-20 pb-4">
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="animate-bounce text-white/40 hover:text-white/70 transition-colors cursor-pointer"
              onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll to next section"
              data-testid="button-scroll-down"
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* ================================================================
          MISSION SUPPORT SECTION
          Key mission outcomes displayed as a checklist grid.
          ================================================================ */}
      <section id="capabilities" className="relative bg-slate-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-tight" data-testid="heading-mission-support">
              INTEGRATED MISSION & INSTALLATION SUPPORT SERVICES
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-3xl mb-12 leading-relaxed">
              G&E enables Department of Defense readiness through comprehensive installation support services. We deliver scalable, compliant solutions under large prime contractors using reliability-centered maintenance methodology across global operations.
            </p>
          </motion.div>

          {/* Mission outcomes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {missionOutcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-md px-5 py-4"
                data-testid={`outcome-${i}`}
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-white/80 text-sm md:text-base font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CORE CAPABILITIES SECTION
          Grid of 10 service capability areas with link to full services page.
          ================================================================ */}
      <section className="relative bg-slate-950 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-12 tracking-tight"
            data-testid="heading-core-capabilities"
          >
            CORE CAPABILITIES
          </motion.h2>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="border border-white/10 rounded-md px-5 py-4 bg-white/5 hover:bg-white/10 transition-colors"
                data-testid={`capability-${i}`}
              >
                <span className="text-white/80 text-sm md:text-base font-medium">{cap}</span>
              </motion.div>
            ))}
          </div>

          {/* Link to full services page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link href="/services">
              <button className="px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white text-sm tracking-wider font-medium transition-all" data-testid="link-all-services">
                VIEW ALL SERVICES
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          CONTRACT VEHICLES SECTION
          Preview of active contract vehicles with status badges.
          GSA Schedule shown as "Pending" in yellow.
          ================================================================ */}
      <section className="relative bg-slate-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight"
            data-testid="heading-contract-vehicles"
          >
            MULTIPLE AWARD CONTRACTS & CONTRACT VEHICLES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-base md:text-lg max-w-3xl mb-12 leading-relaxed"
          >
            G&E operates within structured federal contracting environments with demonstrated experience in FAR-based acquisition, task order execution, and procurement under IDIQ, MATOC, SATOC, and SABER contract vehicles.
          </motion.p>

          {/* Contract vehicles grid with pending/active status badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contractVehicles.map((cv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="border border-white/10 rounded-md p-5 bg-white/5"
                data-testid={`contract-vehicle-${i}`}
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-display font-bold text-lg">{cv.name}</h3>
                  {/* Yellow "Pending" badge for GSA Schedule */}
                  {'pending' in cv && cv.pending && (
                    <span className="text-yellow-400 text-xs font-semibold tracking-wider border border-yellow-400/30 px-2 py-0.5">Pending</span>
                  )}
                </div>
                <p className="text-white/50 text-sm mt-1">{cv.agency}</p>
              </motion.div>
            ))}
          </div>

          {/* Link to full contract vehicles page */}
          <Link href="/contract-vehicles">
            <button className="px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white text-sm tracking-wider font-medium transition-all" data-testid="link-contract-vehicles">
              VIEW CONTRACT VEHICLES
            </button>
          </Link>
        </div>
      </section>

      {/* ================================================================
          EXECUTIVE LEADERSHIP PREVIEW
          Photo grid of three key leaders with link to full team page.
          Displayed in alphabetical order.
          ================================================================ */}
      <section className="relative bg-slate-950 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-12 tracking-tight"
            data-testid="heading-leadership-preview"
          >
            EXECUTIVE LEADERSHIP
          </motion.h2>

          {/* Leader photo cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {leadershipPreview.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex flex-col items-center text-center"
                data-testid={`leader-preview-${i}`}
              >
                {/* Circular headshot photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-white/10 bg-slate-700">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display font-bold text-lg">{leader.name}</h3>
                <p className="text-white/50 text-sm">{leader.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Link to full leadership page */}
          <div className="text-center">
            <Link href="/leadership">
              <button className="px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white text-sm tracking-wider font-medium transition-all" data-testid="link-meet-leadership">
                MEET OUR LEADERSHIP
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shared site-wide footer */}
      <Footer />
    </div>
  );
}
