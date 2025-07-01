import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Cookie, Mail } from "lucide-react";

export function CookiePolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 lg:py-24 relative overflow-hidden px-[0px] py-[40px]">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--teal-primary)]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--blue-accent)]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-sm mb-8">
              <Cookie className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Cookie Policy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Cookie Policy
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Technoboost, we use cookies to provide you with a better user experience when you use our website and software services.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                      What are Cookies?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Cookies are small data files that are placed on your computer or mobile device when you visit our website. They allow our website to recognize your device and store information about your preferences or past actions.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                      Types of Cookies We Use
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We use both session cookies and persistent cookies on our website. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or you delete them.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-[var(--dark-primary)] font-bold text-sm mr-3">3</span>
                      Third-Party Cookies
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We also use third-party cookies to collect information about your browsing habits and to provide personalized advertising. These cookies are placed by third-party advertisers who work with us to serve ads on our website or on other websites.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">4</span>
                      How We Use Cookies
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies to improve your user experience on our website. Cookies allow us to remember your preferences, personalize your experience, and analyze how you use our website. We also use cookies to track the effectiveness of our marketing campaigns.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-secondary)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">5</span>
                      Cookie Settings
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      You can control how cookies are used on our website by changing your browser settings. Most browsers allow you to block cookies or to alert you when cookies are being sent to your device. However, blocking cookies may affect your ability to use some features of our website.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--yellow-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">6</span>
                      Changes to Cookies Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on our website. You are advised to review this Cookies Policy periodically for any changes.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-accent)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">7</span>
                      Contact Us
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any questions or concerns about this Cookies Policy, please contact us at:
                    </p>
                    <div className="flex items-center space-x-2 text-[var(--teal-primary)] font-medium">
                      <Mail className="w-4 h-4" />
                      <span>privacy@technoboost.com</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <p className="text-gray-600 text-center">
                      Thank you for using Technoboost!
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}