/**
 * NavbarSolid.tsx - Solid Background Navigation Bar (All Pages Except Homepage)
 *
 * Solid dark navbar with a top info bar, used on all pages except
 * the homepage (which uses the transparent Navbar.tsx instead).
 *
 * Features:
 * - Top bar with CAGE Code and UEI
 * - Sticky positioning with solid dark background
 * - Active link highlighting based on current route
 * - About dropdown with Company Overview and Executive Leadership
 * - Responsive mobile hamburger menu
 */

import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * NavbarSolid Component
 *
 * Named export — import with { NavbarSolid }.
 * Rendered on all routes except "/" (homepage).
 */
export function NavbarSolid() {
  /* Mobile menu open/close state */
  const [isOpen, setIsOpen] = useState(false);
  /* About dropdown open/close state */
  const [aboutOpen, setAboutOpen] = useState(false);
  /* Current route for active link highlighting */
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
      {/* Top info bar with CAGE Code and UEI */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-6">
          <span className="font-medium">CAGE Code: 711V1</span>
          <span className="text-slate-400">|</span>
          <span className="font-medium">UEI: G8CXJ2PMKN76</span>
        </div>
      </div>

      {/* Main navigation bar - sticky with solid background */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo and company name */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-base text-white leading-tight">G&E Industrial Supplies</span>
                </div>
              </Link>
            </div>

            {/* Desktop navigation links with active state highlighting */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`text-sm font-medium transition-colors ${location === "/" ? "text-white" : "text-slate-300 hover:text-white"}`}>
                Home
              </Link>

              {/* About dropdown with active state for /about and /leadership */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location === "/about" || location === "/leadership" ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                  data-testid="nav-about-dropdown-solid"
                >
                  About
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-slate-800 border border-slate-700 rounded-md py-2 min-w-[200px]">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setAboutOpen(false)}
                    >
                      Company Overview
                    </Link>
                    <Link
                      href="/leadership"
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      onClick={() => setAboutOpen(false)}
                    >
                      Executive Leadership
                    </Link>
                  </div>
                )}
              </div>

              {/* Remaining nav links with active state highlighting */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location === link.href ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
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
                data-testid="button-mobile-menu-solid"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="/" className="block px-3 py-3 text-white text-base font-medium hover:bg-slate-700 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              {/* About section label and sub-links */}
              <div className="px-3 py-2 text-slate-400 text-xs uppercase tracking-wider">About</div>
              <Link href="/about" className="block px-6 py-3 text-white text-base font-medium hover:bg-slate-700 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Company Overview
              </Link>
              <Link href="/leadership" className="block px-6 py-3 text-white text-base font-medium hover:bg-slate-700 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                Executive Leadership
              </Link>
              {/* Remaining nav links */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-white text-base font-medium hover:bg-slate-700 rounded-md transition-colors"
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
