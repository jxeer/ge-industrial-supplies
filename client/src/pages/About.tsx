/**
 * About.tsx - Company Overview / About Us Page
 *
 * Displays G&E Industrial Supplies' company background, core strengths,
 * past performance record, commitment statement, and certifications.
 * Content aligned with the client-provided "About Us Revised" document.
 *
 * Sections:
 * - Company intro (established 1989, El Paso HQ, Qatar/Kuwait subsidiaries)
 * - Three Core Strengths cards (Pricing, Workers, Technical Capabilities)
 * - Proven Performance (Camp As Sayliyah / CARE Doha projects)
 * - Our Commitment statement
 * - Certifications & Qualifications
 * - Company data strip (CAGE, UEI, HQ)
 *
 * Route: /about
 */

import { motion } from "framer-motion";
import { DollarSign, Users, Wrench, CheckCircle } from "lucide-react";

/**
 * Core Strengths Data
 * Three pillars that define G&E's competitive advantage.
 * The "In-House Technical Capabilities" card includes a sub-list
 * of specific roles/disciplines available internally.
 */
const coreStrengths = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "G&E delivers exceptional value through disciplined estimating, strong supplier relationships, and efficient project execution. Our internal estimating team ensures accurate forecasting, cost control, and pricing strategies that keep our clients competitive without sacrificing quality or performance."
  },
  {
    icon: Users,
    title: "Skilled Workers",
    description: "Our team is composed of experienced professionals who understand mission-driven environments. From field operations to executive oversight, G&E deploys a workforce that is trained, responsive, and performance-focused."
  },
  {
    icon: Wrench,
    title: "In-House Technical Capabilities",
    description: "Our internal capability allows us to manage projects end-to-end — reducing risk, improving quality control, and ensuring schedule adherence.",
    capabilities: [
      "Engineers",
      "Program Managers",
      "Project Managers",
      "Estimating Specialists",
      "Project Superintendents"
    ]
  }
];

/**
 * Past Performance Items
 * Key service areas demonstrated at Camp As Sayliyah (CARE Doha).
 * Displayed as a checklist grid under the Proven Performance section.
 */
const pastPerformance = [
  "Building renovations",
  "HVAC and mechanical upgrades",
  "Engineering services",
  "Operations & Maintenance (O&M)",
  "Material Handling Equipment (MHE) support and lifecycle management",
  "Comprehensive facility support"
];

/**
 * About Component
 *
 * Renders the full Company Overview page with animated sections.
 * Uses Framer Motion for staggered fade-in animations on page load.
 */
export default function About() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=2000&auto=format&fit=crop"
          alt="Capitol Building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Page content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-16 md:py-24">
        <div className="max-w-5xl w-full">

          {/* Page title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
            data-testid="heading-company-overview"
          >
            ABOUT G&E INDUSTRIAL SUPPLIES
          </motion.h1>

          {/* Company introduction paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-3xl space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                Established in 1989, G&E Industrial Supplies Inc. is a trusted industrial supplier and service provider delivering cost-effective, technically sound solutions to government and commercial clients worldwide. Headquartered in El Paso, Texas, with subsidiaries in Doha, Qatar and Kuwait, G&E supports operations across the U.S. and international markets.
              </p>
              <p className="text-white/90 font-semibold text-lg md:text-xl">
                For more than 30 years, our success has been built on three core strengths:
              </p>
            </div>
          </motion.div>

          {/* ============================================================
              CORE STRENGTHS CARDS
              Three cards highlighting pricing, workforce, and technical depth.
              ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border border-white/10 rounded-md p-6 bg-white/5"
                data-testid={`card-strength-${index}`}
              >
                <strength.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-display font-bold text-lg mb-3">{strength.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{strength.description}</p>
                {/* Sub-list of in-house roles (only for Technical Capabilities card) */}
                {strength.capabilities && (
                  <ul className="mt-4 space-y-2">
                    {strength.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* ============================================================
              PROVEN PERFORMANCE SECTION
              Past performance at Camp As Sayliyah (CARE Doha) with
              a checklist of demonstrated service areas.
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-white/10 pt-10 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              PROVEN PERFORMANCE IN COMPLEX ENVIRONMENTS
            </h2>
            <div className="max-w-3xl space-y-6 text-white/70 text-base md:text-lg leading-relaxed mb-8">
              <p>
                G&E has executed multiple award task orders, including renovation and facility modernization projects at Camp As Sayliyah (CARE Doha Military Installation). Our past performance includes:
              </p>
            </div>
            {/* Past performance checklist grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pastPerformance.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-md px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="max-w-3xl text-white/70 text-base md:text-lg leading-relaxed">
              Our ability to perform under large contract vehicles — while maintaining disciplined cost management and high-performance ratings — demonstrates the strength of our workforce and operational systems.
            </p>
          </motion.div>

          {/* ============================================================
              OUR COMMITMENT SECTION
              Company commitment statement with tagline.
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-10 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
              OUR COMMITMENT
            </h2>
            <p className="max-w-3xl text-white/70 text-base md:text-lg leading-relaxed mb-8">
              At G&E, our commitment is grounded in delivering competitive and transparent pricing while maintaining the highest standards of technical accuracy. We execute every project with disciplined schedule management to ensure reliability and mission continuity, and we operate with an uncompromising focus on safety and regulatory compliance. Above all, we prioritize building long-term client partnerships founded on trust, performance, and consistent value delivery.
            </p>
            {/* Company tagline */}
            <p className="text-white/90 font-display font-bold text-lg italic">
              At G&E, performance is not a slogan — it is our standard.
            </p>
          </motion.div>

          {/* ============================================================
              CERTIFICATIONS & QUALIFICATIONS
              Grid of certification badges and qualifications.
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-t border-white/10 pt-10 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
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

          {/* Company data strip: CAGE, UEI, Headquarters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-white/10 pt-8 flex flex-wrap gap-8 items-center"
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
