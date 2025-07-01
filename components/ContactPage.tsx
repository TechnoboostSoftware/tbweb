import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Mock form submission
  //   console.log("Form submitted:", formData);
  //   toast.success("Thank you! We'll get back to you within 24 hours.");
    
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     company: "",
  //     projectType: "",
  //     budget: "",
  //     timeline: "",
  //     message: ""
  //   });
  // };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const {
    name,
    email,
    company,
    projectType,
    budget,
    timeline,
    message,
  } = formData;

  const emailBodyContent = `
    <b>Full Name:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Company:</b> ${company}<br>
    <b>Project Type:</b> ${projectType}<br>
    <b>Budget:</b> ${budget}<br>
    <b>Timeline:</b> ${timeline}<br>
    <b>Details:</b> ${message}
  `;

  const jsondata = {
    token: "gUXMeJn%P8gRVxMH",
    emailSubjectLine: "Enquiry for business",
    emailBodyContent: emailBodyContent,
  };

  try {
    const response = await fetch("https://es.technoboost.in/api/v1/mail-send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    });

    const result = await response.json();

    if (result.status === "NOT_FOUND") {
      toast.error("Something went wrong, try again.");
    } else {
      toast.success("Thank you for contacting us! We'll get back to you.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
      });

      // setOpen(false);
    }
  } catch (error) {
    console.error("API Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--yellow-accent)]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--teal-primary)]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[var(--blue-accent)]/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Ready to Transform Your Business?</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6">
              Let's Connect &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-accent)]">
                Build Something Amazing
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and let's explore how we can help you achieve your goals with cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--dark-primary)] mb-4">Start Your Project</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you with a detailed proposal tailored to your needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="ai-automation">AI & Automation</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus">$100,000+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-months-plus">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)] resize-none"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-14"
                  >
                    Send Message & Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information Card - Now Below the Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-2">Get in Touch</h3>
                <p className="text-gray-600">We're here to help bring your ideas to life</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4 md:justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="md:text-center">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-[var(--teal-primary)] font-medium">contactus@technoboost.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 md:justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--teal-accent)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="md:text-center">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-[var(--blue-accent)] font-medium">+91 9632968050</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 md:justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="md:text-center">
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-700 font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[var(--teal-primary)]/5 to-[var(--blue-accent)]/5 rounded-2xl p-8 border border-[var(--teal-primary)]/10">
              <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-6 text-center">Why Choose Technoboost?</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--teal-primary)] flex-shrink-0" />
                  <span className="text-gray-700">100+ Successful Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--teal-primary)] flex-shrink-0" />
                  <span className="text-gray-700">99% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--teal-primary)] flex-shrink-0" />
                  <span className="text-gray-700">24/7 Dedicated Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--teal-primary)] flex-shrink-0" />
                  <span className="text-gray-700">AI-Powered Solutions</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--dark-primary)] mb-4">Trusted by Industry Leaders</h2>
              <p className="text-gray-600">Join 100+ satisfied clients who have transformed their businesses with our solutions</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[var(--teal-primary)] mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[var(--teal-primary)] mb-2">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[var(--teal-primary)] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[var(--teal-primary)] mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}