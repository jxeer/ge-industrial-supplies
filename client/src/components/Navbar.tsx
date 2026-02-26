/**
 * Navbar.tsx - Transparent Navigation Bar (Homepage Only)
 *
 * Transparent overlay navbar used exclusively on the homepage,
 * where it floats over the hero background image.
 * For all other pages, NavbarSolid.tsx is used instead.
 *
 * Features:
 * - Transparent background (overlays hero image)
 * - G&E logo with company name
 * - CAGE/UEI display in center (desktop)
 * - About dropdown with Company Overview and Executive Leadership
 * - Responsive mobile hamburger menu
 */

import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * Navbar Component
 *
 * Named export — import with { Navbar }.
 * Only rendered when the current route is "/" (homepage).
 */
export function Navbar() {
  /* Mobile menu open/close state */
  const [isOpen, setIsOpen] = useState(false);
  /* About dropdown open/close state */
  const [aboutOpen, setAboutOpen] = useState(false);
  const [location] = useLocation();
  /* Ref for click-outside detection on About dropdown */
  const aboutRef = useRef<HTMLDivElement>(null);

  /* Close About dropdown when clicking outside */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Navigation links (excluding Home and About, which are handled separately) */
  const links = [
    { href: "/services", label: "Services" },
    { href: "/services/industrial-supply-distribution", label: "Industrial Supply, Logistics & Distribution" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo and company name */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg text-white leading-tight tracking-tight">G&E</span>
                  <span className="text-[10px] text-white/80 uppercase tracking-wider leading-tight">Industrial<br/>Supplies, Inc.</span>
                </div>
              </Link>
            </div>

            {/* Center: CAGE and UEI identifiers (desktop only) */}
            <div className="hidden md:flex items-center">
              <span className="text-white text-sm font-medium tracking-wide">
                CAGE Code: 711V1  UEI: G8CXJ2PMKN76
              </span>
            </div>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white text-sm font-medium hover:text-white/80 transition-colors" data-testid="nav-home">
                Home
              </Link>

              {/* About dropdown with Company Overview and Leadership links */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-white text-sm font-medium hover:text-white/80 transition-colors"
                  data-testid="nav-about-dropdown"
                >
                  About
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-md py-2 min-w-[200px]">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setAboutOpen(false)}
                      data-testid="nav-company-overview"
                    >
                      Company Overview
                    </Link>
                    <Link
                      href="/leadership"
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setAboutOpen(false)}
                      data-testid="nav-leadership"
                    >
                      Executive Leadership
                    </Link>
                  </div>
                )}
              </div>

              {/* Remaining nav links */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-white/80 transition-colors p-2"
                data-testid="button-mobile-menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {/* CAGE/UEI identifiers shown in mobile menu */}
              <div className="text-white/60 text-xs text-center py-2 border-b border-white/10 mb-2">
                CAGE Code: 711V1 | UEI: G8CXJ2PMKN76
              </div>
              <Link href="/" className="block px-3 py-3 text-white text-base font-medium hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              {/* About section label and sub-links */}
              <div className="px-3 py-2 text-white/50 text-xs uppercase tracking-wider">About</div>
              <Link href="/about" className="block px-6 py-3 text-white text-base font-medium hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Company Overview
              </Link>
              <Link href="/leadership" className="block px-6 py-3 text-white text-base font-medium hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Executive Leadership
              </Link>
              {/* Remaining nav links */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-white text-base font-medium hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
