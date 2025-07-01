import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, FileText, Mail } from "lucide-react";

export function TermsOfServicePage() {
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
              <FileText className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Terms of Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Welcome to Technoboost, a software service company based in Bengaluru, India. Please read the following terms and conditions carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                      Acceptance of Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing or using Technoboost's website and software services, you agree to be bound by these Terms and Conditions, as well as any additional terms and conditions that may apply to specific sections of our website or software. If you do not agree to these terms, you may not use our services.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                      Use of Technoboost's Services
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      You may use Technoboost's services only for lawful purposes and in accordance with these Terms and Conditions. You may not use our website or software in any way that could damage or impair the performance, availability, or accessibility of our website or software.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-[var(--dark-primary)] font-bold text-sm mr-3">3</span>
                      Ownership and Intellectual Property Rights
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      All content and materials provided on our website and software, including but not limited to text, graphics, logos, icons, images, and software, are owned or licensed by Technoboost and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">4</span>
                      User Accounts
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      To access certain features of Technoboost's software, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify Technoboost immediately of any unauthorized use of your account or any other breach of security.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-secondary)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">5</span>
                      Payment and Fees
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Technoboost's software services may be subject to fees. You agree to pay all fees and charges incurred in connection with your use of Technoboost's services. All fees are non-refundable.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--yellow-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">6</span>
                      Limitation of Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Technoboost is not liable for any damages, including but not limited to direct, indirect, incidental, punitive, and consequential damages, arising from your use of our website or software.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-accent)] to-[var(--blue-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">7</span>
                      Termination of Services
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Technoboost may terminate or suspend your access to our website and software services at any time, with or without cause, and with or without notice.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center text-[var(--dark-primary)] font-bold text-sm mr-3">8</span>
                      Modifications to Terms and Conditions
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Technoboost reserves the right to modify these Terms and Conditions at any time, with or without notice. Your continued use of our website and software services constitutes your acceptance of any modified terms.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--dark-primary)] mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">9</span>
                      Governing Law
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Thank you for choosing Technoboost for your software service needs! If you have any questions or concerns about these terms and conditions, please contact us at:
                    </p>
                    <div className="flex items-center space-x-2 text-[var(--teal-primary)] font-medium">
                      <Mail className="w-4 h-4" />
                      <span>support@technoboost.com</span>
                    </div>
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