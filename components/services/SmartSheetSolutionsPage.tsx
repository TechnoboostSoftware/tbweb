import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, ArrowLeft, FileSpreadsheet, Zap, Cog, CheckCircle, Clock, TrendingUp, Database, Target, Users, Shield, Grid, Calculator, RefreshCw } from "lucide-react";
import { ContactForm } from "../ContactForm";

export function SmartSheetSolutionsPage() {
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Automate repetitive tasks and reduce manual data entry with intelligent spreadsheet solutions.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: CheckCircle,
      title: "Improved Accuracy",
      description: "Eliminate human errors and ensure data consistency across all your business processes.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Get instant visibility into your business metrics with automated reporting and dashboards.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Database,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business, from simple automation to complex enterprise systems.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const ourProcess = [
    {
      step: "01",
      title: "Process Analysis",
      description: "Audit existing spreadsheets and identify automation opportunities",
      duration: "1 week",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Create custom templates, formulas, and automation workflows",
      duration: "1-2 weeks",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Build and deploy smart sheets with integrations and automation",
      duration: "2-3 weeks",
      color: "from-purple-500 to-violet-600"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "User training, documentation, and ongoing support setup",
      duration: "1 week",
      color: "from-[var(--teal-primary)] to-[var(--teal-secondary)]"
    }
  ];

  const technologies = [
    "Google Sheets", "Microsoft Excel", "Airtable", "Smartsheet", "Zapier", "Google Apps Script", "Power Automate", "API Integrations"
  ];

  const quickStats = [
    { icon: Target, value: "Time", label: "Savings" },
    { icon: Users, value: "Team", label: "Collaboration" },
    { icon: Shield, value: "Data", label: "Security" },
    { icon: CheckCircle, value: "Error", label: "Elimination" }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-24 left-16 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-56 right-20 w-24 h-24 bg-green-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 py-16 lg:py-24 relative overflow-hidden">
        {/* Enhanced SmartSheet Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Spreadsheet Grid */}
          <div className="absolute top-8 left-8 opacity-15">
            <div className="grid grid-cols-4 gap-0.5 w-16 h-12">
              {Array.from({ length: 16 }, (_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-2 border border-emerald-200 ${
                    i === 0 || i === 4 || i === 8 || i === 12 ? 'bg-emerald-300' : 
                    i < 4 ? 'bg-emerald-100' : 'bg-white'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Top Right Formula Bar */}
          <div className="absolute top-12 right-12 opacity-20">
            <div className="w-32 h-16 bg-white border border-emerald-200 rounded-lg shadow-lg p-2">
              <div className="text-xs font-mono text-emerald-600 mb-1">=SUM(A1:A10)</div>
              <div className="w-full h-2 bg-emerald-100 rounded mb-1"></div>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-emerald-200"></div>
                <div className="w-6 h-2 bg-green-200"></div>
                <div className="w-8 h-2 bg-teal-200"></div>
              </div>
            </div>
          </div>

          {/* Left Side Spreadsheet Tools */}
          <div className="absolute left-4 top-1/3 opacity-10">
            <div className="space-y-4">
              <Grid className="w-8 h-8 text-emerald-500" />
              <Calculator className="w-8 h-8 text-green-500" />
              <RefreshCw className="w-8 h-8 text-teal-500" />
            </div>
          </div>

          {/* Right Side Data Automation */}
          <div className="absolute right-8 top-1/4 opacity-15">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <div className="w-6 h-0.5 bg-emerald-400 animate-pulse"></div>
                <Cog className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-green-400" />
                <div className="w-6 h-0.5 bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <Calculator className="w-4 h-4 text-teal-400" />
              </div>
            </div>
          </div>

          {/* Bottom Left Automation Icons */}
          <div className="absolute bottom-16 left-8 opacity-20">
            <div className="flex space-x-2">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <RefreshCw className="w-4 h-4 text-green-400 animate-spin-slow" />
              <CheckCircle className="w-4 h-4 text-teal-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Bottom Right Cells */}
          <div className="absolute bottom-12 right-16 opacity-15">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }, (_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 border border-emerald-200 ${
                    i % 2 === 0 ? 'bg-emerald-100' : 'bg-white'
                  }`}
                ></div>
              ))}
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
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative">
                  <FileSpreadsheet className="w-12 h-12 text-white" />
                  {/* Decorative rings around icon */}
                  <div className="absolute -inset-4 border-2 border-emerald-200 rounded-full opacity-30 animate-ping"></div>
                  <div className="absolute -inset-8 border border-green-200 rounded-full opacity-20"></div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
                Smart Sheet Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your spreadsheets into powerful business automation tools that save time and eliminate errors
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Subtle decoration in stat cards */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-50 to-transparent opacity-50 rounded-bl-full"></div>
                    <stat.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
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
                    Automate Your Spreadsheets
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactForm>
                {/* <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 border-gray-300 hover:border-[var(--teal-primary)] hover:text-[var(--teal-primary)] hover:bg-teal-50 transition-all duration-300"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Success Stories
                </Button> */}
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
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We transform your existing spreadsheets into intelligent, automated business systems. Our solutions eliminate manual data entry, reduce errors, and provide real-time insights while maintaining the familiar spreadsheet interface your team already knows.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-emerald-50 text-emerald-700 border-emerald-200">Expert Implementation</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">Custom Automation</Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-purple-50 text-purple-700 border-purple-200">Ongoing Support</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Why Smart Sheets Matter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn your spreadsheets from data storage into business intelligence powerhouses
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3 group-hover:text-emerald-600 transition-colors">
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
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to transform your spreadsheets into automated business solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {ourProcess.map((phase, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{phase.step}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-semibold text-[var(--dark-primary)] group-hover:text-emerald-600 transition-colors">
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
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Platforms & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with all major spreadsheet platforms and automation tools
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
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
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
              <FileSpreadsheet className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Supercharge Your Spreadsheets?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop wasting time on manual data entry. Let's automate your spreadsheets and turn them into powerful business tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Get Free Automation Audit
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