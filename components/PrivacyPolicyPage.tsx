import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Shield, Mail } from "lucide-react";

export function PrivacyPolicyPage() {
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
              <Shield className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Technoboost, we value and respect your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                      Collection of Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect personal information such as your name, email address, and payment information when you use our software services or contact us for support. We may also collect non-personal information such as your IP address and browser type through the use of cookies.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                      Use of Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may use your personal information to provide you with our software services, process payments, and communicate with you about our products and services. We may also use non-personal information to improve our website and software services.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-[var(--dark-primary)] font-bold text-sm mr-3">3</span>
                      Disclosure of Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We will not disclose your personal information to third parties except as necessary to provide our software services or comply with legal obligations. We may share your information with trusted third-party service providers who assist us in operating our website and software services.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">4</span>
                      Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We take appropriate measures to protect your personal information from unauthorized access or disclosure. We use industry-standard encryption technologies to protect your sensitive information during transmission and storage.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-secondary)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">5</span>
                      Third-Party Websites
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our website and software services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of these websites before providing any personal information.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--yellow-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">6</span>
                      Children's Privacy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our website and software services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-accent)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">7</span>
                      Changes to Privacy Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center text-[var(--dark-primary)] font-bold text-sm mr-3">8</span>
                      Contact Us
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <div className="flex items-center space-x-2 text-[var(--teal-primary)] font-medium">
                      <Mail className="w-4 h-4" />
                      <span>privacy@technoboost.com</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <p className="text-gray-600 text-center">
                      Thank you for trusting Technoboost with your personal information.
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