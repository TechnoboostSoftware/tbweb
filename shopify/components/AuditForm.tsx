import React from "react";
import { Send, Globe, Mail, User, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";

interface AuditFormProps {
  showToast: (type: "success" | "error", message: string) => void;
}

export const AuditForm: React.FC<AuditFormProps> = ({ showToast }) => {
  const [formData, setFormData] = useState({
    storeUrl: "",
    phone: "",
    workEmail: "",
    name: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { storeUrl, name, phone, workEmail } = formData;

    const emailBodyContent = `
      <b>Store URL:</b> ${storeUrl}<br>
      <b>Full Name:</b> ${name}<br>
      <b>Phone:</b> ${phone}<br>
      <b>Work Email:</b> ${workEmail}<br>
    
    `;

    const jsondata = {
      token: "gUXMeJn%P8gRVxMH",
      emailSubjectLine: "Enquiry for business",
      emailBodyContent: emailBodyContent,
    };

    try {
      const response = await fetch(
        "https://es.technoboost.in/api/v1/mail-send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsondata),
        }
      );

      const result = await response.json();

      if (result.status === "NOT_FOUND") {
        showToast("error", "Something went wrong!");
      } else {
        showToast(
          "success",
          "Thank you for contacting us! We'll get back to you."
        );
        setFormData({
          storeUrl: "",
          name: "",
          phone: "",
          workEmail: "",
        });
      }
    } catch (error) {
      showToast("error", "Something went wrong!");
    }
  };

  return (
    <section
      className="py-24 bg-brand-dark relative overflow-hidden"
      id="free-audit"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-purple rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium">
                Limited Free Spots Available
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Is Your Store Leaving Money on the Table?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get a comprehensive, human-reviewed audit of your Shopify store.
              We'll identify speed bottlenecks, UX friction points, and missed
              conversion opportunities—completely free.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Performance & Speed Analysis",
                "Mobile UX & Conversion Check",
                "Competitor Benchmarking",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Request Your Free Audit
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Store URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    placeholder="https://yourstore.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                    required
                    value={formData.storeUrl}
                    onChange={(e) =>
                      handleInputChange("storeUrl", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Work Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                    required
                    value={formData.workEmail}
                    onChange={(e) =>
                      handleInputChange("workEmail", e.target.value)
                    }
                  />
                </div>
              </div>

              <Button size="lg" className="w-full gap-2 mt-2">
                Get My Free Audit <Send className="w-4 h-4" />
              </Button>

              <p className="text-xs text-center text-gray-400 mt-4">
                No credit card required. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
