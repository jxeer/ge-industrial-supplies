/**
 * App.tsx - Root Application Component
 *
 * Sets up the application routing, layout structure, and providers.
 *
 * Layout logic:
 * - Homepage ("/") uses transparent Navbar overlay and renders its own Footer
 * - All other pages use NavbarSolid (sticky dark header) with shared Footer
 *
 * Providers:
 * - QueryClientProvider: TanStack React Query for server state management
 * - Toaster: Toast notification system for user feedback
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
import Leadership from "@/pages/Leadership";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

/**
 * Router Component
 *
 * Handles page routing and layout structure.
 * Determines which navbar to show based on current route.
 * Homepage gets transparent navbar; all others get solid navbar + footer.
 */
function Router() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar: transparent on homepage, solid on all other pages */}
      {isHomePage ? <Navbar /> : <NavbarSolid />}

      {/* Main content area */}
      <main className={isHomePage ? "" : "flex-grow"}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/capabilities" component={Capabilities} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" component={ServicePage} />
          <Route path="/contract-vehicles" component={ContractVehicles} />
          <Route path="/leadership" component={Leadership} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Footer: shown on all pages except homepage (which has its own) */}
      {!isHomePage && <Footer />}
    </div>
  );
}

/**
 * App Component
 *
 * Root component that wraps the Router with global providers.
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
