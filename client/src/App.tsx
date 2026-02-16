/**
 * App.tsx - Main Application Entry Point
 * 
 * This is the root component of the G&E Industrial Supplies website.
 * It handles:
 * - Client-side routing using wouter
 * - Conditional navigation display (transparent vs solid navbar)
 * - Global state management with React Query
 * - Toast notifications
 */

import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { NavbarSolid } from "@/components/NavbarSolid";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Capabilities from "@/pages/Capabilities";
import Services from "@/pages/Services";
import ServicePage from "@/pages/ServicePage";
import ContractVehicles from "@/pages/ContractVehicles";
import Contact from "@/pages/Contact";

/**
 * Router Component
 * 
 * Handles page routing and conditional layout rendering.
 * Full-screen pages (Home, Services, Capabilities, Contact, Service Details)
 * display without the standard navbar/footer for immersive backgrounds.
 */
function Router() {
  const [location] = useLocation();
  
  // Determine page type for conditional navigation rendering
  const isHomePage = location === "/";
  const isServiceDetailPage = location.startsWith("/services/") && location !== "/services";
  const isServicesPage = location === "/services";
  const isCapabilitiesPage = location === "/capabilities";
  const isContactPage = location === "/contact";
  const isContractVehiclesPage = location === "/contract-vehicles";
  
  // Full-screen pages use immersive backgrounds without standard nav/footer
  const isFullScreenPage = isHomePage || isServiceDetailPage || isServicesPage || isCapabilitiesPage || isContactPage || isContractVehiclesPage;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        Navigation Logic:
        - Homepage: Transparent overlay navbar
        - Full-screen pages: No navbar (immersive experience)
        - Other pages: Solid navbar
      */}
      {isHomePage ? <Navbar /> : isFullScreenPage ? null : <NavbarSolid />}
      
      <main className={isFullScreenPage ? "" : "flex-grow"}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/capabilities" component={Capabilities} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" component={ServicePage} />
          <Route path="/contract-vehicles" component={ContractVehicles} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      {/* Footer only shown on non-full-screen pages */}
      {!isFullScreenPage && <Footer />}
    </div>
  );
}

/**
 * App Component
 * 
 * Root application wrapper providing:
 * - React Query for server state management
 * - Toast notification system
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
