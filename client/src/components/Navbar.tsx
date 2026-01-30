import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/capabilities", label: "About Us" },
    { href: "/services", label: "Capabilities" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Utility Bar - matches PDF header */}
      <div className="bg-slate-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-6">
          <span className="font-medium">CAGE Code: 711V1</span>
          <span className="text-slate-400">|</span>
          <span className="font-medium">UEI: G8CXJ2PMKN76</span>
        </div>
      </div>

      {/* Main Navigation - Clean like PDF */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Area - Left side empty or minimal in PDF */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="font-display font-bold text-xl text-slate-800">
                  G&E Industrial Supplies
                </span>
              </Link>
            </div>

            {/* Desktop Nav - Right aligned like PDF */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary"
                      : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-primary transition-colors p-2"
                data-testid="button-mobile-menu"
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
