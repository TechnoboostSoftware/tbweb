import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, ArrowLeft, Database, Cloud, Shield, Zap, Server, Sparkles, CheckCircle, Globe, Lock, TrendingUp, CloudSnow, Layers, HardDrive } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function CloudSolutionsPage() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of existing systems to cloud infrastructure",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance for cloud environments",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Auto Scaling",
      description: "Automatically scale resources based on demand and usage",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Complete cloud infrastructure setup and ongoing management",
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Jenkins"
  ];

  const benefits = [
    { icon: CheckCircle, text: "99.9% uptime guarantee" },
    { icon: Globe, text: "Global scalability" },
    { icon: Lock, text: "Enterprise security" },
    { icon: TrendingUp, text: "Cost optimization" }
  ];

  const cloudServices = [
    {
      title: "Infrastructure as Code",
      description: "Automated provisioning and management of cloud resources",
      impact: "80% faster deployments"
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamlined development and deployment pipelines",
      impact: "5x faster releases"
    },
    {
      title: "Monitoring & Analytics",
      description: "Real-time monitoring and performance optimization",
      impact: "50% cost reduction"
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-28 left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-48 right-12 w-24 h-24 bg-green-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-20 h-20 bg-teal-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced Cloud Solutions Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Cloud Layers */}
          <div className="absolute top-8 left-8 opacity-15">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CloudSnow className="w-6 h-6 text-emerald-400" />
                <CloudSnow className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <CloudSnow className="w-5 h-5 text-teal-400" />
                <CloudSnow className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
          </div>
          
          {/* Top Right Server Rack */}
          <div className="absolute top-12 right-12 opacity-20">
            <div className="w-16 h-24 bg-white border border-emerald-200 rounded-lg shadow-lg">
              <div className="p-1 space-y-1">
                <div className="w-full h-2 bg-emerald-100 rounded flex items-center justify-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="w-full h-2 bg-green-100 rounded flex items-center justify-center">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="w-full h-2 bg-teal-100 rounded flex items-center justify-center">
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="w-full h-2 bg-emerald-100 rounded flex items-center justify-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side Infrastructure Icons */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <Server className="w-8 h-8 text-emerald-500" />
              <Database className="w-8 h-8 text-green-500" />
              <Layers className="w-8 h-8 text-teal-500" />
            </div>
          </div>

          {/* Right Side Data Flow */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-4 h-4 text-emerald-400" />
                <div className="w-8 h-0.5 bg-emerald-400 animate-pulse"></div>
                <Cloud className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-green-400" />
                <div className="w-8 h-0.5 bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <CloudSnow className="w-4 h-4 text-teal-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-teal-400" />
                <div className="w-8 h-0.5 bg-teal-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <Cloud className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Bottom Left Cloud Stack */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="space-y-1">
              <div className="w-12 h-2 bg-emerald-300 rounded-full"></div>
              <div className="w-10 h-2 bg-green-300 rounded-full"></div>
              <div className="w-14 h-2 bg-teal-300 rounded-full"></div>
              <div className="w-8 h-2 bg-emerald-300 rounded-full"></div>
            </div>
          </div>

          {/* Bottom Right Scaling Indicators */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="flex items-end space-x-1">
              <div className="w-2 h-4 bg-emerald-400 animate-float"></div>
              <div className="w-2 h-6 bg-green-400 animate-float" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-8 bg-teal-400 animate-float" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-2 h-10 bg-emerald-400 animate-float" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-emerald-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-green-300 rounded-tr-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

 <Button 
           variant="ghost" 
            onClick={() => {
           // Update the hash in the URL
            window.location.hash = 'expertise';

        // Scroll to the section manually
           setTimeout(() => {
            const section = document.getElementById('expertise');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            }
         }, 100); // Delay ensures hash is updated first
        }}
         className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Services
            </Button>

            {/* <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Button> */}
            
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                <Database className="w-10 h-10 text-white" />
                {/* Decorative rings around icon */}
                <div className="absolute -inset-4 border-2 border-emerald-200 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute -inset-8 border border-green-200 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Cloud Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Scalable cloud infrastructure and services that grow with your business needs, ensuring reliability and performance.
            </p>

            {/* Benefits Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Subtle decoration in benefit cards */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-50 to-transparent opacity-50 rounded-bl-full"></div>
                  <benefit.icon className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <ContactForm>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactForm>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              What We Deliver
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end cloud solutions that transform your infrastructure and operations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cloudServices.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 inline-block">
                    <span className="font-semibold text-emerald-700">{service.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
              Leading cloud platforms and DevOps tools for reliable, scalable infrastructure
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[var(--dark-primary)] font-medium hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-emerald-50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Scale to the Cloud?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's build a robust cloud infrastructure that powers your growth and scales with your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm>
              <Button 
                size="lg"
                className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactForm>
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Cloud Assessment
            </Button>
          </div>
          
          <div className="mt-8 text-white/70">
            <p className="text-sm">☁️ Free cloud assessment • Migration planning • Cost optimization</p>
          </div>
        </div>
      </section>
    </div>
  );
}