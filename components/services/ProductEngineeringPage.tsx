import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, ArrowLeft, Cpu, Zap, Shield, TrendingUp, CheckCircle, Clock, Rocket, Users, Code, Database, Settings, Award } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function ProductEngineeringPage() {
      const handleCaseStudies = () =>{
      window.location.hash = 'work';
       }
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Faster Time-to-Market",
      description: "Accelerate product development with agile methodologies and proven engineering practices.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Scalable Architecture",
      description: "Build robust, scalable systems that grow with your business using modern architecture patterns.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensure optimal performance with load testing, monitoring, and continuous optimization strategies.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control processes to ensure reliable, bug-free products.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const ourProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering, technical architecture design, and project roadmap creation",
      duration: "1-2 weeks",
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "System architecture, database design, and technology stack selection",
      duration: "1-2 weeks",
      color: "from-purple-500 to-violet-600"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development cycles with continuous integration and comprehensive testing",
      duration: "4-12 weeks",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, monitoring setup, and ongoing maintenance support",
      duration: "1-2 weeks",
      color: "from-[var(--teal-primary)] to-[var(--teal-secondary)]"
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "Java", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "TypeScript"
  ];

  const quickStats = [
    { icon: Rocket, value: "Expert", label: "Engineering" },
    { icon: Users, value: "Dedicated", label: "Teams" },
    { icon: TrendingUp, value: "Proven", label: "Results" },
    { icon: Award, value: "Quality", label: "Guaranteed" }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-32 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-teal-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced Product Engineering Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Architecture Diagram */}
          <div className="absolute top-8 left-8 opacity-15">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-400 rounded"></div>
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <div className="w-4 h-4 border-2 border-cyan-400 rounded"></div>
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <div className="w-6 h-0.5 bg-blue-400 transform rotate-90"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-emerald-400 rounded"></div>
                <div className="w-8 h-0.5 bg-emerald-400"></div>
                <div className="w-4 h-4 border-2 border-teal-400 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Top Right System Components */}
          <div className="absolute top-12 right-12 opacity-20">
            <div className="w-40 h-24 bg-white border-2 border-blue-200 rounded-lg shadow-lg">
              <div className="flex justify-between p-2 bg-gray-100 rounded-t-lg">
                <div className="text-xs text-gray-600">API</div>
                <div className="text-xs text-gray-600">DB</div>
                <div className="text-xs text-gray-600">UI</div>
              </div>
              <div className="p-2 space-y-1">
                <div className="w-full h-2 bg-blue-200 rounded"></div>
                <div className="w-3/4 h-2 bg-cyan-200 rounded"></div>
                <div className="w-1/2 h-2 bg-emerald-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Left Side Engineering Tools */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <Code className="w-8 h-8 text-blue-500" />
              <Database className="w-8 h-8 text-cyan-500" />
              <Settings className="w-8 h-8 text-emerald-500" />
            </div>
          </div>

          {/* Right Side Infrastructure Icons */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <div className="w-6 h-6 border-2 border-blue-400 rounded"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-cyan-400"></div>
                <div className="w-6 h-6 border-2 border-cyan-400 rounded"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-emerald-400"></div>
                <div className="w-6 h-6 border-2 border-emerald-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Bottom Left Engineering Layers */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="space-y-1">
              <div className="w-16 h-3 bg-blue-300 rounded"></div>
              <div className="w-14 h-3 bg-cyan-300 rounded"></div>
              <div className="w-12 h-3 bg-emerald-300 rounded"></div>
              <div className="w-10 h-3 bg-teal-300 rounded"></div>
            </div>
          </div>

          {/* Bottom Right Development Workflow */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-blue-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              <div className="w-4 h-0.5 bg-blue-300"></div>
              <div className="w-6 h-6 border-2 border-cyan-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              </div>
              <div className="w-4 h-0.5 bg-cyan-300"></div>
              <div className="w-6 h-6 border-2 border-emerald-300 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating Engineering Elements */}
          <div className="absolute top-1/4 left-1/4 opacity-15">
            <div className="transform rotate-12 animate-float">
              <div className="bg-blue-100 p-2 rounded text-xs font-mono text-blue-600">
                API
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-15">
            <div className="transform -rotate-12 animate-pulse">
              <div className="bg-cyan-100 p-2 rounded text-xs font-mono text-cyan-600">
                DB
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/5 opacity-15">
            <div className="transform rotate-45 animate-float">
              <div className="w-4 h-4 bg-emerald-400 rounded"></div>
            </div>
          </div>

          {/* System Architecture Flow Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg width="400" height="200" className="animate-pulse">
              <path
                d="M50 100 L150 80 L250 120 L350 100"
                stroke="url(#engineeringGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,4"
              />
              <defs>
                <linearGradient id="engineeringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner Tech Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-blue-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-cyan-300 rounded-tr-3xl"></div>
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                  <Cpu className="w-12 h-12 text-white" />
                  {/* Decorative rings around icon */}
                  <div className="absolute -inset-4 border-2 border-blue-200 rounded-full opacity-30 animate-ping"></div>
                  <div className="absolute -inset-8 border border-cyan-200 rounded-full opacity-20"></div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
                Product Engineering Services
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your ideas into market-ready products with comprehensive engineering expertise from concept to deployment
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Subtle decoration in stat cards */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent opacity-50 rounded-bl-full"></div>
                    <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
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
                    Start Your Engineering Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactForm>
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 border-gray-300 hover:border-[var(--teal-primary)] hover:text-[var(--teal-primary)] hover:bg-teal-50 transition-all duration-300"
                  // onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                   onClick={handleCaseStudies}
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We engineer complete products from concept to deployment, combining technical expertise with strategic thinking. Our end-to-end approach ensures scalable, secure, and performant solutions that drive business growth and user satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">End-to-End Solutions</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200">Scalable Architecture</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-purple-50 text-purple-700 border-purple-200">Expert Engineering</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Why Professional Product Engineering Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build products that scale and succeed with comprehensive engineering expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mt-6"></div>
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
                        <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3 group-hover:text-blue-600 transition-colors">
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
              Our Engineering Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, scalability, and successful product delivery
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mt-6"></div>
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
                          <h3 className="text-xl font-semibold text-[var(--dark-primary)] group-hover:text-blue-600 transition-colors">
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
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for building robust, scalable products
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[var(--dark-primary)] font-medium hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-blue-50"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Engineer Your Next Product?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's create innovative products that drive your business forward. Our engineering expertise turns your vision into reality.
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
                onClick={() => window.open('tel:+919632968050', '_self')}
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