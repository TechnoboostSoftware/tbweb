import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
         <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-3 block">
           Legal
         </span>
         <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
           Terms & Conditions
         </h1>
         <p className="text-lg text-gray-500">
           Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
         </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            By accessing or using Technoboost's website and software services, you agree to be bound by these Terms and Conditions, as well as any additional terms and conditions that may apply to specific sections of our website or software. If you do not agree to these terms, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Use of Technoboost's Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            You may use Technoboost's services only for lawful purposes and in accordance with these Terms and Conditions. You may not use our website or software in any way that could damage or impair the performance, availability, or accessibility of our website or software.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Ownership and Intellectual Property Rights</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            All content and materials provided on our website and software, including but not limited to text, graphics, logos, icons, images, and software, are owned or licensed by Technoboost and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. User Accounts</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To access certain features of Technoboost's software, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify Technoboost immediately of any unauthorized use of your account or any other breach of security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Payment and Fees</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Technoboost's software services may be subject to fees. You agree to pay all fees and charges incurred in connection with your use of Technoboost's services. All fees are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Technoboost is not liable for any damages, including but not limited to direct, indirect, incidental, punitive, and consequential damages, arising from your use of our website or software.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Termination of Services</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Technoboost may terminate or suspend your access to our website and software services at any time, with or without cause, and with or without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Modifications to Terms and Conditions</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Technoboost reserves the right to modify these Terms and Conditions at any time, with or without notice. Your continued use of our website and software services constitutes your acceptance of any modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
        </section>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
            <p className="text-gray-600 leading-relaxed text-lg font-medium text-center">
                Thank you for choosing Technoboost for your software service needs! If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:contactus@technoboost.in" className="text-brand-purple hover:underline font-bold">contactus@technoboost.in</a>.
            </p>
         </div>
      </div>
    </div>
  );
};