import { useState, useEffect } from "react";
import { Router } from "./components/Router";
import { ModernNavigation } from "./components/ModernNavigation";
import { ModernFooter } from "./components/ModernFooter";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentRoute(hash);
    };

    // Set initial route
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ModernNavigation currentRoute={currentRoute} />
      <Router />
      <ModernFooter />
      <Toaster />
    </div>
  );
}
