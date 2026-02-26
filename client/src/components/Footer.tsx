/**
 * Footer.tsx - Site-Wide Footer Component
 *
 * Shared footer displayed on every page of the website.
 * Contains four columns:
 * - Brand: Company logo, description, HUBZone badge
 * - Quick Links: Navigation links to main pages
 * - Core Services: List of 7 service areas
 * - Contact Info: Address, email, phone, and company identifiers
 *
 * Also includes a bottom bar with copyright notice.
 */

import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Footer Component
 *
 * Named export (not default) — import with { Footer }.
 * Used in App.tsx for all non-home pages and directly in Home.tsx.
 */
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column - Logo, description, HUBZone badge */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl tracking-tighter text-white leading-none">
                G&E
              </span>
              <span className="font-display font-bold text-xs tracking-widest text-primary uppercase">
                Industrial Supplies, Inc.
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              HUBZone-certified small business providing critical facility support, industrial logistics, and environmental services worldwide.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-white">
                HUBZone Certified
              </span>
            </div>
          </div>

          {/* Quick Links Column - Navigation to main pages */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Company Overview</Link></li>
              <li><Link href="/leadership" className="hover:text-primary transition-colors">Executive Leadership</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contract-vehicles" className="hover:text-primary transition-colors">Contract Vehicles</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services Column - List of 7 service areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Core Services</h3>
            <ul className="space-y-3 text-sm">
              <li>Facility Support Services</li>
              <li>Operations & Maintenance (O&M)</li>
              <li>Global Logistics</li>
              <li>Waste Management & Environmental</li>
              <li>Construction Services</li>
              <li>Industrial Supply & Distribution</li>
              <li>Professional Solutions</li>
            </ul>
          </div>

          {/* Contact Info Column - Address, email, identifiers */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              {/* Headquarters address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  857 Pendale Rd.<br />
                  El Paso, TX 79907
                </span>
              </li>
              {/* Contact email */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@geindustrialsupplies.com" className="hover:text-white transition-colors">
                  info@geindustrialsupplies.com
                </a>
              </li>
              {/* Phone placeholder */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>Call for Quote</span>
              </li>
            </ul>
            {/* Company identifiers: UEI, CAGE, Bonding */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-500">
                UEI: G8CXJ2PMKN76 <br/>
                CAGE: 711V1 <br/>
                Bonding: $30M Single / $100M Aggregate
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright */}
      <div className="bg-slate-900 py-6 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} G&E Industrial Supplies, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
