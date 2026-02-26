/**
 * ServiceCard.tsx - Service Card Component
 *
 * Reusable card component for displaying a service category
 * with an image, title, description, and "Learn More" link.
 * Used in grid layouts on the Services overview page.
 *
 * Features:
 * - Hover effects: image zoom, shadow elevation, title color change
 * - Responsive image with aspect ratio container
 * - "Learn More" link with arrow icon
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * ServiceCard Props
 *
 * @param title - Service category name
 * @param description - Brief service description
 * @param image - Background image URL for the card
 * @param link - Navigation path to the full service detail page
 */
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

/**
 * ServiceCard Component
 *
 * Renders a single service card with hover interactions.
 */
export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
      {/* Card image with hover zoom effect */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
      
      {/* Card content: title, description, learn more link */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-slate-900 font-display mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Learn More link with arrow icon */}
        <Link href={link} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-all duration-300">
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
