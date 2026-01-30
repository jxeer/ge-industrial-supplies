import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-white py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="opacity-80">HUBZone Certified Small Business</span>
            <span className="hidden sm:inline opacity-60">|</span>
            <span className="hidden sm:inline opacity-80">CAGE Code: 711V1</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="mailto:mtate@gbs-web.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">mtate@gbs-web.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-slate-900 leading-none">
                  G&E
                </span>
                <span className="font-display font-bold text-xs tracking-widest text-primary uppercase">
                  Industrial Supplies, Inc.
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-primary relative py-2",
                    location === link.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                      : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <button className="bg-primary text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0.5">
                  Request Quote
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-primary transition-colors p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                    location === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  )}
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
