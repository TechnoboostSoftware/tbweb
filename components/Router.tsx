import { ModernHero } from "./ModernHero";
import { ModernServices } from "./ModernServices";
import { ModernTestimonials } from "./ModernTestimonials";
import { CaseStudiesPage } from "./CaseStudiesPage";
import { WorkPage } from "./WorkPage";
import { ProjectsPage } from "./ProjectsPage";
import { PharmaCaseStudy } from "./PharmaCaseStudy";
import { JewelleryCaseStudy } from "./JewelleryCaseStudy";
import { WebDevelopmentPage } from "./services/WebDevelopmentPage";
import { MobileAppsPage } from "./services/MobileAppsPage";
import { UXUIDesignPage } from "./services/UXUIDesignPage";
import { AIAutomationPage } from "./services/AIAutomationPage";
import { DataAnalyticsPage } from "./services/DataAnalyticsPage";
import { CloudSolutionsPage } from "./services/CloudSolutionsPage";
import { SmartSheetSolutionsPage } from "./services/SmartSheetSolutionsPage";
import { ProductEngineeringPage } from "./services/ProductEngineeringPage";
import { ContactPage } from "./ContactPage";
import { AboutPage } from "./AboutPage";
import { CareersPage } from "./CareersPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { TermsOfServicePage } from "./TermsOfServicePage";
import { CookiePolicyPage } from "./CookiePolicyPage";
import { useEffect, useState } from "react";
import { ShopifyHomePage } from "../shopify/pages/ShopifyHomePage";

export function Router() {
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

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentRoute]);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "home":
        return (
          <>
            <ModernHero />
            <ModernServices />
            <ModernTestimonials />
          </>
        );
      case "about":
        return <AboutPage />;
      case "careers":
        return <CareersPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "work":
        return <WorkPage />;
      case "projects":
        return <ProjectsPage />;
      case "pharma-case-study":
        return <PharmaCaseStudy />;
      case "jewellery-case-study":
        return <JewelleryCaseStudy />;
      case "web-development":
        return <WebDevelopmentPage />;
      case "mobile-apps":
        return <MobileAppsPage />;
      case "full-stack-development":
        return <WebDevelopmentPage />; // For now, redirect to web development page
      case "product-engineering":
        return <ProductEngineeringPage />;
      case "ux-ui-design":
        return <UXUIDesignPage />;
      case "ai-automation":
        return <AIAutomationPage />;
      case "data-analytics":
        return <DataAnalyticsPage />;
      case "cloud-solutions":
        return <CloudSolutionsPage />;
      case "smartsheet-solutions":
        return <SmartSheetSolutionsPage />;
      case "smart-sheet-solutions":
        return <SmartSheetSolutionsPage />;
      case "contact":
        return <ContactPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "terms-of-service":
        return <TermsOfServicePage />;
      case "cookie-policy":
        return <CookiePolicyPage />;

      default:
        return (
          <>
            <ModernHero />
            <ModernServices />
            <ModernTestimonials />
          </>
        );
    }
  };

  return <div className="min-h-screen">{renderCurrentPage()}</div>;
}
