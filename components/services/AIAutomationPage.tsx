import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, ArrowLeft, Zap, Bot, Cog, Workflow, Brain, Sparkles, CheckCircle, Cpu, Network, CircuitBoard, Binary, Clock, TrendingUp, Rocket } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function AIAutomationPage() {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer support and engagement",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with smart automation",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models for prediction, classification, and optimization",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Cog,
      title: "Integration Solutions",
      description: "Seamlessly integrate AI capabilities into existing systems",
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "OpenAI GPT", "Hugging Face", "LangChain", "FastAPI", "Docker", "AWS AI"
  ];

  const quickStats = [
    { icon: CheckCircle, value: "Faster", label: "Completion" },
    { icon: Clock, value: "24/7", label: "Operations" },
    { icon: TrendingUp, value: "Reduced", label: "Costs" },
    { icon: Rocket, value: "Improved", label: "Accuracy" }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-indigo-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced AI/Automation Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Neural Network */}
          <div className="absolute top-8 left-8 opacity-15">
            <div className="relative w-24 h-16">
              {/* Nodes */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-violet-400 rounded-full"></div>
              <div className="absolute top-6 left-0 w-2 h-2 bg-violet-400 rounded-full"></div>
              <div className="absolute top-3 left-8 w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div className="absolute top-9 left-8 w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div className="absolute top-6 left-16 w-2 h-2 bg-purple-400 rounded-full"></div>
              
              {/* Connections */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="8" y1="4" x2="32" y2="12" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
                <line x1="8" y1="28" x2="32" y2="12" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
                <line x1="8" y1="4" x2="32" y2="36" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
                <line x1="8" y1="28" x2="32" y2="36" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
                <line x1="40" y1="12" x2="64" y2="24" stroke="#6366f1" strokeWidth="1" opacity="0.6"/>
                <line x1="40" y1="36" x2="64" y2="24" stroke="#6366f1" strokeWidth="1" opacity="0.6"/>
              </svg>
            </div>
          </div>
          
          {/* Top Right Robot Head */}
          <div className="absolute top-12 right-12 opacity-20">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-lg border border-violet-200">
              <div className="p-2">
                <div className="flex space-x-2 mb-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="w-8 h-1 bg-violet-300 rounded"></div>
                <div className="flex justify-center mt-2">
                  <div className="w-4 h-1 bg-violet-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side Circuit Elements */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <CircuitBoard className="w-8 h-8 text-violet-500" />
              <Cpu className="w-8 h-8 text-indigo-500" />
              <Network className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          {/* Right Side Binary Code */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-2 font-mono text-xs text-violet-400">
              <div>1010 1100</div>
              <div>0110 1010</div>
              <div>1001 0011</div>
              <div>0101 1110</div>
              <div>1100 0101</div>
            </div>
          </div>

          {/* Bottom Left Algorithm Flow */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-violet-400 rounded"></div>
              <div className="w-6 h-0.5 bg-violet-400"></div>
              <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
              <div className="w-6 h-0.5 bg-indigo-400"></div>
              <div className="w-4 h-4 bg-purple-400 rounded"></div>
            </div>
          </div>

          {/* Bottom Right Data Nodes */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }, (_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-violet-400' : 
                    i % 3 === 1 ? 'bg-indigo-400' : 
                    'bg-purple-400'
                  }`}
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    animation: 'pulse 2s infinite'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Floating AI Elements */}
          <div className="absolute top-1/4 left-1/4 opacity-20">
            <div className="w-6 h-6 border-2 border-violet-400 rounded-full animate-pulse">
              <div className="w-2 h-2 bg-violet-400 rounded-full mx-auto mt-1"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-20">
            <div className="w-8 h-8 border-2 border-indigo-400 hexagon animate-spin-slow"></div>
          </div>

          <div className="absolute bottom-1/3 left-1/5 opacity-20">
            <div className="relative">
              <Binary className="w-6 h-6 text-purple-400 animate-float" />
            </div>
          </div>

          {/* AI Data Flow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg width="400" height="200" className="animate-pulse">
              <path
                d="M50 100 Q150 50 250 100 Q300 75 350 100"
                stroke="url(#aiGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,5"
              />
              <circle cx="150" cy="75" r="3" fill="#8b5cf6" className="animate-ping" />
              <circle cx="250" cy="100" r="3" fill="#6366f1" className="animate-ping" style={{ animationDelay: '1s' }} />
              <circle cx="300" cy="75" r="3" fill="#a855f7" className="animate-ping" style={{ animationDelay: '2s' }} />
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-violet-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-indigo-300 rounded-tr-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">

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
            
      <div className="text-center">
              <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                <Zap className="w-10 h-10 text-white" />
                {/* Decorative rings around icon */}
                <div className="absolute -inset-4 border-2 border-violet-200 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute -inset-8 border border-indigo-200 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              AI &amp; Automation
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Leverage artificial intelligence and automation to streamline processes, boost efficiency, and unlock new possibilities.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Subtle decoration in stat cards */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-violet-50 to-transparent opacity-50 rounded-bl-full"></div>
                  <stat.icon className="w-6 h-6 text-violet-600 mx-auto mb-2" />
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
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactForm>
      </div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-violet-600 transition-colors">
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

      {/* Technologies Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-violet-50/30 py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks that power intelligent solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-[var(--dark-primary)] font-medium hover:border-violet-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-violet-50"
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
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's harness the power of AI to transform your business operations and drive unprecedented growth.
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
              Schedule Consultation
            </Button>
          </div>
          
          <div className="mt-8 text-white/70">
            <p className="text-sm">🚀 Free AI audit • Custom strategy • Implementation support</p>
          </div>
        </div>
      </section>
    </div>
  );
}