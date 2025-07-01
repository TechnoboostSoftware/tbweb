import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, ArrowLeft, BarChart3, TrendingUp, Database, Eye, Brain, Sparkles, CheckCircle, Target, Zap, PieChart, LineChart, Activity, Users, Clock, Rocket } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function DataAnalyticsPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Eye,
      title: "Data Visualization",
      description: "Interactive dashboards and reports for clear data storytelling",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Machine learning models to forecast trends and patterns",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration of multiple data sources and systems",
      color: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    "Python", "R", "Tableau", "Power BI", "SQL", "Apache Spark", "TensorFlow", "AWS Analytics"
  ];

  const quickStats = [
    { icon: Target, value: "Faster", label: "Insights" },
    { icon: CheckCircle, value: "Data-driven", label: "Decisions" },
    { icon: TrendingUp, value: "Revenue", label: "Growth" },
    { icon: Zap, value: "Real-time", label: "Analytics" }
  ];

  const useCases = [
    {
      title: "Sales Performance Analytics",
      description: "Track sales metrics, identify trends, and optimize performance",
      impact: "Enhanced sales efficiency"
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns and improve retention strategies",
      impact: "Better customer retention"
    },
    {
      title: "Operational Optimization",
      description: "Streamline processes and reduce operational costs",
      impact: "Operational cost savings"
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 left-16 w-28 h-28 bg-orange-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-24 w-20 h-20 bg-red-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-amber-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-orange-50/30 to-red-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced Data Analytics Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Chart Elements */}
          <div className="absolute top-8 left-8 opacity-15">
            <div className="w-20 h-16">
              <svg className="w-full h-full">
                <rect x="2" y="12" width="3" height="4" fill="#fb923c" />
                <rect x="7" y="8" width="3" height="8" fill="#f97316" />
                <rect x="12" y="6" width="3" height="10" fill="#ea580c" />
                <rect x="17" y="10" width="3" height="6" fill="#dc2626" />
                <circle cx="4" cy="4" r="1" fill="#fb923c" />
                <circle cx="9" cy="2" r="1" fill="#f97316" />
                <circle cx="14" cy="1" r="1" fill="#ea580c" />
                <circle cx="19" cy="3" r="1" fill="#dc2626" />
                <path d="M4,4 L9,2 L14,1 L19,3" stroke="#f97316" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
          
          {/* Top Right Dashboard */}
          <div className="absolute top-12 right-12 opacity-20">
            <div className="w-32 h-20 bg-white border border-orange-200 rounded-lg shadow-lg p-2">
              <div className="flex space-x-1 mb-2">
                <div className="w-6 h-1 bg-orange-300 rounded"></div>
                <div className="w-4 h-1 bg-red-300 rounded"></div>
                <div className="w-8 h-1 bg-amber-300 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="flex space-x-1">
                  <div className="w-2 h-6 bg-orange-200"></div>
                  <div className="w-2 h-4 bg-red-200"></div>
                  <div className="w-2 h-8 bg-amber-200"></div>
                  <div className="w-2 h-3 bg-orange-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side Chart Icons */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <PieChart className="w-8 h-8 text-orange-500" />
              <LineChart className="w-8 h-8 text-red-500" />
              <Activity className="w-8 h-8 text-amber-500" />
            </div>
          </div>

          {/* Right Side Data Points */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-12 h-0.5 bg-orange-400"></div>
                <div className="text-xs text-orange-600">85%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-8 h-0.5 bg-red-400"></div>
                <div className="text-xs text-red-600">62%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="w-16 h-0.5 bg-amber-400"></div>
                <div className="text-xs text-amber-600">94%</div>
              </div>
            </div>
          </div>

          {/* Bottom Left Metrics */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded"></div>
                <div className="text-xs text-orange-600 font-mono">+24%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-400 rounded"></div>
                <div className="text-xs text-red-600 font-mono">-12%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-amber-400 rounded"></div>
                <div className="text-xs text-amber-600 font-mono">+56%</div>
              </div>
            </div>
          </div>

          {/* Bottom Right Data Flow */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="flex items-center space-x-1">
              <Database className="w-4 h-4 text-orange-400" />
              <div className="w-4 h-0.5 bg-orange-400 animate-pulse"></div>
              <BarChart3 className="w-4 h-4 text-red-400" />
              <div className="w-4 h-0.5 bg-red-400 animate-pulse"></div>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
          </div>

          {/* Floating Data Visualizations */}
          <div className="absolute top-1/4 left-1/4 opacity-20">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 border-2 border-orange-400 rounded-full"></div>
              <div className="absolute top-1 left-1 w-6 h-6 border-2 border-orange-400 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 opacity-20">
            <div className="w-6 h-6 bg-gradient-to-tr from-red-400 to-orange-400 transform rotate-45 animate-pulse"></div>
          </div>

          <div className="absolute bottom-1/3 left-1/5 opacity-20">
            <div className="flex space-x-0.5">
              <div className="w-1 h-6 bg-amber-400 animate-float"></div>
              <div className="w-1 h-4 bg-orange-400 animate-float" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-8 bg-red-400 animate-float" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-1 h-3 bg-amber-400 animate-float" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>

          {/* Data Flow Visualization */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg width="400" height="200" className="animate-pulse">
              <path
                d="M50 150 Q150 100 250 120 Q350 80 400 100"
                stroke="url(#dataGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="12,6"
              />
              <circle cx="150" cy="110" r="4" fill="#fb923c" className="animate-ping" />
              <circle cx="250" cy="120" r="4" fill="#f97316" className="animate-ping" style={{ animationDelay: '1s' }} />
              <circle cx="350" cy="90" r="4" fill="#ea580c" className="animate-ping" style={{ animationDelay: '2s' }} />
              <defs>
                <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-l-4 border-t-4 border-orange-300 rounded-tl-3xl"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
            <div className="w-full h-full border-r-4 border-t-4 border-red-300 rounded-tr-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Button>
            
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                <BarChart3 className="w-10 h-10 text-white" />
                {/* Decorative rings around icon */}
                <div className="absolute -inset-4 border-2 border-orange-200 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute -inset-8 border border-red-200 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Data Analytics
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced analytics, visualization, and machine learning solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Subtle decoration in stat cards */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-50 to-transparent opacity-50 rounded-bl-full"></div>
                  <stat.icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
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
                Start Your Analytics Project
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
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-orange-600 transition-colors">
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

      {/* Use Cases Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how data analytics drives measurable business results across different areas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-4 group-hover:text-orange-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {useCase.description}
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-full px-4 py-2 inline-block mt-auto">
                    <span className="font-semibold text-orange-700">{useCase.impact}</span>
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
              Industry-leading tools and platforms for comprehensive data analytics solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-white border border-gray-200 rounded-2xl text-[var(--dark-primary)] font-medium hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105 hover:bg-orange-50"
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's turn your data into your competitive advantage with powerful analytics that drive real business results.
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
              Free Data Assessment
            </Button>
          </div>
          
          <div className="mt-8 text-white/70">
            <p className="text-sm">📊 Free data audit • Custom insights • Implementation support</p>
          </div>
        </div>
      </section>
    </div>
  );
}