import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, ArrowLeft, Smartphone, Apple, Chrome, Zap, Users, Sparkles, CheckCircle, Download, Star, Timer, Wifi, Bell } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function MobileAppsPage() {
  const features = [
    {
      icon: Apple,
      title: "Native Development",
      description: "High-performance native apps for iOS and Android platforms",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Chrome,
      title: "Cross-Platform",
      description: "React Native solutions that work seamlessly across devices",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Fast, responsive apps with smooth user interactions",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for mobile-first experiences",
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "App Store Connect", "Play Console"
  ];

  const quickStats = [
    { icon: CheckCircle, value: "Cross-platform", label: "Development" },
    { icon: Download, value: "Optimized", label: "Performance" },
    { icon: Star, value: "Premium", label: "Experience" },
    { icon: Timer, value: "Rapid", label: "Delivery" }
  ];

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Shopping experiences with payment integration and inventory management",
      impact: "Enhanced mobile commerce"
    },
    {
      title: "Social & Community",
      description: "Connect users with real-time messaging and social features",
      impact: "Engaging user experiences"
    },
    {
      title: "Business Solutions",
      description: "Productivity apps that streamline workflows and operations",
      impact: "Streamlined operations"
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-32 left-12 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-16 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-emerald-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-green-50/30 to-teal-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced Mobile App Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left App Icons Grid */}
          <div className="absolute top-8 left-8 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i} className={`w-4 h-4 rounded-lg bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-green-400 to-emerald-500' : 
                  i % 3 === 1 ? 'from-teal-400 to-cyan-500' : 
                  'from-emerald-400 to-green-500'
                }`}></div>
              ))}
            </div>
          </div>
          
          {/* Top Right Mobile Notification */}
          <div className="absolute top-12 right-12 opacity-15">
            <div className="bg-white border border-green-200 rounded-2xl p-3 shadow-lg w-32">
              <div className="flex items-center space-x-2 mb-2">
                <Bell className="w-3 h-3 text-green-500" />
                <div className="w-20 h-1 bg-green-200 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-1 bg-green-100 rounded"></div>
                <div className="w-3/4 h-1 bg-green-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Left Side Mobile Gestures */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-6">
              <div className="relative">
                <div className="w-8 h-12 border-2 border-green-400 rounded-lg"></div>
                <div className="absolute top-2 left-1 w-6 h-8 border border-green-300 rounded"></div>
                <div className="absolute top-1 right-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <div className="w-4 h-0.5 bg-teal-400"></div>
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side Device Ecosystem */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-4 flex flex-col items-center">
              {/* Smartphone */}
              <div className="relative">
                <div className="w-10 h-16 bg-white border-2 border-green-300 rounded-xl shadow-lg">
                  <div className="p-1">
                    <div className="w-full h-2 bg-green-100 rounded mb-1"></div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-full h-3 bg-green-200 rounded"></div>
                      <div className="w-full h-3 bg-teal-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <Wifi className="absolute -top-1 -right-1 w-3 h-3 text-green-500" />
              </div>
              
              {/* Tablet */}
              <div className="w-12 h-8 bg-white border-2 border-teal-300 rounded-lg shadow-lg">
                <div className="p-1">
                  <div className="w-full h-1 bg-teal-100 rounded mb-1"></div>
                  <div className="w-full h-4 bg-teal-200 rounded"></div>
                </div>
              </div>
              
              {/* Smartwatch */}
              <div className="w-6 h-6 bg-white border-2 border-emerald-300 rounded-lg shadow-lg">
                <div className="p-0.5">
                  <div className="w-full h-3 bg-emerald-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left App Store Badges */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="space-y-2">
              <div className="bg-black text-white px-3 py-1 rounded text-xs font-mono">
                App Store
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-mono">
                Play Store
              </div>
            </div>
          </div>

          {/* Bottom Right Touch Gestures */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-green-400 rounded-full animate-pulse"></div>
                <div className="text-xs text-green-600">Tap</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-0.5 bg-teal-400 rounded animate-pulse"></div>
                <div className="text-xs text-teal-600">Swipe</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 border border-emerald-400 rounded animate-spin-slow"></div>
                <div className="text-xs text-emerald-600">Rotate</div>
              </div>
            </div>
          </div>

          {/* Floating App Elements */}
          <div className="absolute top-1/4 left-1/4 opacity-20">
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl animate-float shadow-lg"></div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-20">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl animate-pulse shadow-lg"></div>
          </div>

          <div className="absolute bottom-1/3 left-1/5 opacity-20">
            <div className="w-4 h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-float shadow-lg"></div>
          </div>

          {/* Data Sync Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg width="300" height="150" className="animate-pulse">
              <path
                d="M50 75 Q150 50 250 75 Q200 100 150 75 Q100 50 50 75"
                stroke="url(#mobileGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,3"
              />
              <defs>
                <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-green-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-teal-300 rounded-tr-3xl"></div>
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                <Smartphone className="w-10 h-10 text-white" />
                {/* Decorative rings around icon */}
                <div className="absolute -inset-4 border-2 border-green-200 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute -inset-8 border border-teal-200 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Mobile Apps
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Native and cross-platform mobile applications that provide seamless user experiences across all devices.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Subtle decoration in stat cards */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-50 to-transparent opacity-50 rounded-bl-full"></div>
                  <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[var(--dark-primary)]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <ContactForm>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-6 hover:scale-105"
              >
                Start Your Mobile Project
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden h-full">
                  <CardContent className="p-8 relative h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Mobile Solutions We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to app store, we deliver mobile experiences that users love
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {appTypes.map((app, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-green-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {app.description}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-full px-4 py-2 inline-block mt-auto">
                    <span className="font-semibold text-green-700">{app.impact}</span>
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
              Modern frameworks and tools for building exceptional mobile experiences
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[var(--dark-primary)] font-medium hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-green-50"
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's bring your mobile app idea to life with cutting-edge technology and user-centered design.
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
              className="rounded-full px-8 py-6 border-white/30 text-[#2dcbc5] hover:bg-white/10 hover:border-white/50"
            >
              App Strategy Session
            </Button>
          </div>
          
          <div className="mt-8 text-white/70">
            <p className="text-sm">📱 Free app audit • Market analysis • Store optimization included</p>
          </div>
        </div>
      </section>
    </div>
  );
}