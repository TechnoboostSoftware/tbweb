import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, ArrowLeft, TrendingUp, Clock, CheckCircle, Building2, Gem, BarChart3, Zap, Target, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function WorkPage() {
  const caseStudies = [
    {
      id: "pharma-ops",
      title: "Pharma Operations Transformation",
      tagline: "Revolutionizing pharmaceutical operations through intelligent automation and software",
      industry: "Pharmaceutical",
      category: "Healthcare",
      tags: ["Automation", "Healthcare", "Analytics"],
      metrics: [
        { value: "40%", label: "Cost Reduction", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" },
        { value: "4wks", label: "Delivery Time", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
        { value: "15%", label: "Efficiency Gain", color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" }
      ],
      highlights: [
        "Real-time inventory management",
        "Advanced business intelligence",
        "Cost analysis automation"
      ],
      icon: Building2,
      accentColor: "border-l-blue-400",
      route: "pharma-case-study"
    },
    {
      id: "jewellery-ops", 
      title: "Jewellery Operations Excellence",
      tagline: "Transforming retail operations with cutting-edge automation and software",
      industry: "Retail/E-commerce",
      category: "Fashion",
      tags: ["E-commerce", "Retail", "Inventory"],
      metrics: [
        { value: "40%", label: "Cost Reduction", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" },
        { value: "4wks", label: "Delivery Time", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
        { value: "15%", label: "Efficiency Gain", color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" }
      ],
      highlights: [
        "Digital eCommerce platform",
        "Warehouse management system", 
        "Data analytics optimization"
      ],
      icon: Gem,
      accentColor: "border-l-purple-400",
      route: "jewellery-case-study"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--gray-100)] border border-[var(--teal-primary)]/20 shadow-sm mb-8">
              <CheckCircle className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--teal-primary)]">Success Stories</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Our Work
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Discover how we've transformed businesses across industries through innovative automation and software solutions, delivering measurable results that drive growth.
            </p>

            {/* Overview Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">40%</div>
                <div className="text-gray-600">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">12+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Cards */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--teal-primary)]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[var(--teal-primary)] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[var(--teal-primary)] mr-2" />
                <span className="text-sm font-medium text-[var(--teal-primary)] bg-[var(--teal-primary)]/10 px-3 py-1 rounded-full">
                  Featured Work
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deep dive into our most impactful projects and see how we've helped businesses achieve remarkable transformations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <Card 
                    key={study.id} 
                    className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white hover:scale-[1.02] ${study.accentColor} border-l-4 relative overflow-hidden`}
                    onClick={() => window.location.hash = study.route}
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--teal-primary)]/5 to-transparent rounded-bl-3xl"></div>
                    
                    <CardContent className="p-8 lg:p-10 relative">
                      {/* Industry Badge */}
                      <Badge className="mb-6 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] text-white border-0 shadow-sm">
                        {study.category}
                      </Badge>

                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-2 group-hover:text-[var(--teal-primary)] transition-colors duration-300">
                            {study.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {study.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className={`text-center p-4 ${metric.bgColor} border ${metric.borderColor} rounded-lg hover:scale-105 transition-transform duration-200`}>
                            <div className={`text-2xl font-bold mb-2 ${metric.color} leading-none`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 font-medium leading-tight">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-3 mb-8">
                        {study.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/item">
                            <div className="w-5 h-5 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                            </div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Call to Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, idx) => (
                            <Badge 
                              key={idx}
                              variant="outline"
                              className="text-xs text-gray-600 border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ml-4 flex-shrink-0"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-[var(--teal-primary)] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-[var(--teal-primary)] bg-[var(--teal-primary)]/10 px-3 py-1 rounded-full">
                Our Methodology
              </span>
              <div className="w-2 h-2 bg-[var(--teal-primary)] rounded-full ml-3 animate-pulse delay-500"></div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Every successful transformation follows our systematic approach, ensuring measurable results and lasting impact.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-2">Analysis</h4>
                <p className="text-sm text-gray-600">Analyze current processes and identify optimization opportunities</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-2">Strategy</h4>
                <p className="text-sm text-gray-600">Develop tailored solutions aligned with business objectives</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-2">Implementation</h4>
                <p className="text-sm text-gray-600">Execute solutions with minimal disruption to operations</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-2">Optimization</h4>
                <p className="text-sm text-gray-600">Monitor performance and refine for maximum ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready for Your Success Story?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our growing list of successful clients. Let's discuss how our proven approach can transform your business operations and drive measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 border-white/30 text-[rgba(0,200,186,1)] hover:bg-white/10 hover:border-white/50 bg-[rgba(255,255,255,1)]"
                onClick={() => window.location.hash = 'home'}
              >
                View All Services
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