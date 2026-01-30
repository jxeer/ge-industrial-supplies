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
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const isServicePage = location.startsWith("/services/");
  const isCapabilitiesPage = location === "/capabilities";
  const isFullScreenPage = isHomePage || isServicePage || isCapabilitiesPage;

  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage ? <Navbar /> : isFullScreenPage ? null : <NavbarSolid />}
      <main className={isFullScreenPage ? "" : "flex-grow"}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/capabilities" component={Capabilities} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" component={ServicePage} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isFullScreenPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
