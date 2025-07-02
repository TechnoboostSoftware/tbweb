import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Palette, Code, Zap, Shield, BarChart3, FileSpreadsheet, Cpu } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ModernServices() {
  const mainServices = [
    {
      title: "Build Fast",
      description: "Fast modern development technology solutions",
      icon: Zap,
      gradient: "from-[var(--teal-primary)] to-[var(--teal-secondary)]"
    },
    {
      title: "Deploy Safe",
      description: "Secure reliable enterprise infrastructure deployment",
      icon: Shield,
      gradient: "from-[var(--blue-accent)] to-[var(--teal-primary)]"
    },
    {
      title: "Secure ROI",
      description: "Guaranteed measurable return on your investment",
      icon: BarChart3,
      gradient: "from-[var(--yellow-accent)] to-[var(--teal-accent)]"
    }
  ];

  const expertiseAreas = [
    {
      title: "UX/UI Design",
      description: "Creating intuitive and beautiful user experiences that delight customers and drive engagement.",
      icon: Palette,
      color: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web and mobile application development using modern technologies and frameworks.",
      icon: Code,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Product Engineering",
      description: "End-to-end product development from concept to deployment with scalable architecture and practices.",
      icon: Cpu,
      color: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      icon: BarChart3,
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to streamline processes and boost efficiency.",
      icon: Zap,
      color: "bg-gradient-to-br from-violet-500 to-indigo-600"
    },
    {
      title: "Smart Sheet Solutions",
      description: "Custom spreadsheet automation and data management solutions that scale with your business.",
      icon: FileSpreadsheet,
      color: "bg-gradient-to-br from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="services">
      {/* Main Services Section - Light Background */}
      <div className="bg-gradient-to-b from-white via-gray-50/50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Innovate. Scale. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-primary)] via-[var(--teal-secondary)] to-[var(--blue-accent)]">
                Succeed Together
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your partner in transformative business solutions. We don't just build software—we create 
              custom digital experiences tailored for your business, customers, and data.
            </p>
          </div>

          {/* Main Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group bg-white border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 text-center flex flex-col min-h-[200px]">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg mx-auto`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-4 group-hover:text-[var(--teal-primary)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed flex-grow flex items-center justify-center text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expertise Areas Section - Light Gray Background */}
      <div id="expertise" className="bg-[var(--gray-100)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[var(--teal-primary)]/20 shadow-sm mb-6">
              <Code className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--teal-primary)]">Technical Expertise</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Our Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions across every aspect of digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              const getRouteHash = (title: string) => {
                return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              };
              
              return (
                <Card 
                  key={index} 
                  className="group bg-white border border-gray-200 hover:border-[var(--teal-primary)]/30 hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift cursor-pointer"
                  onClick={() => window.location.hash = getRouteHash(area.title)}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-3 group-hover:text-[var(--teal-primary)] transition-colors duration-300">
                      {area.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {area.description}
                    </p>
                    
                    <div className="flex items-center text-[var(--teal-primary)] font-medium text-sm group-hover:text-[var(--teal-secondary)] transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats & CTA Section */}
      <div className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm lg:text-base">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-white/80 text-sm lg:text-base">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm lg:text-base">Support Available</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-white/80 text-sm lg:text-base">Years Experience</div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how our innovative solutions can drive your growth and unlock new possibilities.
              </p>
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 hover:text-[var(--teal-secondary)] rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}