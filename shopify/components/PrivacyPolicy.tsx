import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
         <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-3 block">
           Legal
         </span>
         <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
           Privacy Policy
         </h1>
         <p className="text-lg text-gray-500">
           Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
         </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Collection of Information</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We may collect personal information such as your name, email address, and payment information when you use our software services or contact us for support. We may also collect non-personal information such as your IP address and browser type through the use of cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Use of Information</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We may use your personal information to provide you with our software services, process payments, and communicate with you about our products and services. We may also use non-personal information to improve our website and software services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Disclosure of Information</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We will not disclose your personal information to third parties except as necessary to provide our software services or comply with legal obligations. We may share your information with trusted third-party service providers who assist us in operating our website and software services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Security</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We take appropriate measures to protect your personal information from unauthorized access or disclosure. We use industry-standard encryption technologies to protect your sensitive information during transmission and storage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Third-Party Websites</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our website and software services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of these websites before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our website and software services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Changes to Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
      </div>
    </div>
  );
};