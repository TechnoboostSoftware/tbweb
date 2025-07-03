import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, ArrowLeft, Palette, Eye, Users, Zap, CheckCircle, Clock, TrendingUp, Rocket, Heart, Figma, Smartphone, Monitor, Tablet } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function UXUIDesignPage() {
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Increased Conversions",
      description: "Significant improvement in user engagement and conversion rates through data-driven design decisions.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Enhanced User Satisfaction",
      description: "Create delightful experiences that build customer loyalty and drive word-of-mouth recommendations.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Streamlined design process reduces development time with validated prototypes and clear specifications.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Reduced Support Costs",
      description: "Intuitive interfaces decrease user confusion and support tickets through better user experience.",
      color: "from-fuchsia-500 to-pink-600"
    }
  ];

  const ourProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "User interviews, competitive analysis, and stakeholder alignment",
      duration: "1-2 weeks",
      color: "from-purple-500 to-violet-600"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Information architecture, user journeys, and wireframing",
      duration: "1-2 weeks",
      color: "from-pink-500 to-rose-600"
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Visual design, interactive prototypes, and design system creation",
      duration: "2-4 weeks",
      color: "from-indigo-500 to-purple-600"
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "User testing, feedback integration, and final optimizations",
      duration: "1-2 weeks",
      color: "from-[var(--teal-primary)] to-[var(--teal-secondary)]"
    }
  ];

  const technologies = [
    "Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Miro", "Hotjar"
  ];

  const quickStats = [
    { icon: Rocket, value: "Professional", label: "Design Quality" },
    { icon: Users, value: "User-Centered", label: "Approach" },
    { icon: TrendingUp, value: "Results", label: "Driven" },
    { icon: Heart, value: "Dedicated", label: "Support" }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-32 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-violet-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Design Elements */}
          <div className="absolute top-8 left-8 opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-purple-400"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Top Right Wireframe */}
          <div className="absolute top-12 right-12 opacity-15">
            <div className="w-32 h-20 border-2 border-purple-300 rounded-lg">
              <div className="p-2">
                <div className="w-full h-2 bg-purple-200 rounded mb-1"></div>
                <div className="w-3/4 h-2 bg-purple-200 rounded mb-1"></div>
                <div className="flex space-x-1 mt-2">
                  <div className="w-4 h-4 bg-pink-200 rounded"></div>
                  <div className="w-4 h-4 bg-purple-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side Design Tools */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <Figma className="w-8 h-8 text-purple-500" />
              <Eye className="w-8 h-8 text-pink-500" />
              <Palette className="w-8 h-8 text-violet-500" />
            </div>
          </div>

          {/* Right Side Devices */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-6">
              <div className="relative">
                <Monitor className="w-12 h-12 text-purple-400" />
                <div className="absolute top-2 left-2 w-8 h-5 border border-purple-300 rounded-sm"></div>
              </div>
              <div className="relative">
                <Tablet className="w-10 h-10 text-pink-400" />
                <div className="absolute top-1 left-1.5 w-7 h-8 border border-pink-300 rounded-sm"></div>
              </div>
              <div className="relative">
                <Smartphone className="w-8 h-8 text-violet-400" />
                <div className="absolute top-1 left-1.5 w-5 h-6 border border-violet-300 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Bottom Left Color Palette */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="flex space-x-1">
              <div className="w-4 h-8 bg-purple-400 rounded-t-full"></div>
              <div className="w-4 h-8 bg-pink-400 rounded-t-full"></div>
              <div className="w-4 h-8 bg-violet-400 rounded-t-full"></div>
              <div className="w-4 h-8 bg-indigo-400 rounded-t-full"></div>
            </div>
          </div>

          {/* Bottom Right Grid Pattern */}
          <div className="absolute bottom-12 right-16 opacity-10">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="w-2 h-2 bg-purple-300 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 opacity-20">
            <div className="w-6 h-6 border-2 border-pink-400 rotate-45 animate-spin-slow"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-20">
            <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute bottom-1/3 left-1/5 opacity-20">
            <div className="w-4 h-8 bg-violet-400 transform rotate-12 animate-float"></div>
          </div>

          {/* Design Process Flow Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg width="400" height="200" className="animate-pulse">
              <path
                d="M50 100 Q200 50 350 100"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-purple-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-pink-300 rounded-tr-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Button>
            
            <div className="text-center">
              <div className="relative mb-8">
                {/* Icon with enhanced decoration */}
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                  <Palette className="w-12 h-12 text-white" />
                  {/* Decorative rings around icon */}
                  <div className="absolute -inset-4 border-2 border-purple-200 rounded-full opacity-30 animate-ping"></div>
                  <div className="absolute -inset-8 border border-pink-200 rounded-full opacity-20"></div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
                UX/UI Design Services
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your digital presence with research-driven design that converts visitors into loyal customers
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Subtle decoration in stat cards */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-50 to-transparent opacity-50 rounded-bl-full"></div>
                    <stat.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <ContactForm>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 hover:scale-105"
                  >
                    Start Your Design Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactForm>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 border-gray-300 hover:border-[var(--teal-primary)] hover:text-[var(--teal-primary)] hover:bg-teal-50 transition-all duration-300"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We create intuitive, beautiful digital experiences that solve real business problems. Our user-centered approach combines strategic thinking with creative execution to deliver designs that not only look great but drive measurable results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-purple-50 text-purple-700 border-purple-200">Professional Service</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-pink-50 text-pink-700 border-pink-200">Custom Solutions</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-indigo-50 text-indigo-700 border-indigo-200">Quality Guaranteed</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Why UX/UI Design Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable business outcomes through strategic design decisions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3 group-hover:text-purple-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures every design decision is backed by research and strategy
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {ourProcess.map((phase, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-semibold text-[var(--dark-primary)] group-hover:text-purple-600 transition-colors">
                            {phase.title}
                          </h3>
                          <div className="flex items-center text-[var(--teal-primary)] font-medium mt-2 md:mt-0 bg-teal-50 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4 mr-1" />
                            {phase.duration}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading design tools and platforms for optimal collaboration and results
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[var(--dark-primary)] font-medium hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-purple-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
              <Palette className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your User Experience?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create designs that not only look amazing but also drive real business results. Schedule a free consultation to discuss your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-white/30 text-[#2dcbc5] hover:bg-white/10 hover:border-white/50"
                onClick={() => window.open('tel:+91963296805', '_self')}
              >
                Call us: +91 9632968050
              </Button>
            </div>
            
            <div className="mt-8 text-white/70">
              <p className="text-sm">💡 Free consultation • No obligation • Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}