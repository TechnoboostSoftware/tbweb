import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface ContactFormProps {
  children: React.ReactNode;
}

export function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    
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
    
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[var(--dark-primary)]">
              Let's Connect
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600">
            Tell us about your project and let's explore how we can help you achieve your goals.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
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
                className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
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
              className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
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
                <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
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
              <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)]">
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
              rows={4}
              className="bg-gray-50 border-gray-200 focus:border-[var(--teal-primary)] focus:ring-[var(--teal-primary)] resize-none"
            />
          </div>

          <div className="bg-gradient-to-r from-[var(--teal-primary)]/10 to-[var(--blue-accent)]/10 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-[var(--dark-primary)] flex items-center">
              <Mail className="w-4 h-4 mr-2 text-[var(--teal-primary)]" />
              Get in Touch Directly
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[var(--teal-primary)]" />
                <span>contactus@technoboost.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[var(--teal-primary)]" />
                <span>+91 9632968050</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}