import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, ArrowLeft, CheckCircle, Clock, TrendingUp, Star, BarChart3, Zap, Target, Users } from "lucide-react";
import { ContactForm } from "./ContactForm";
// import imgImage9 from "figma:asset/25d58db97deddc9255540b230f1492bb4fbcbcd1.png";
// import imgImage44 from "figma:asset/fe075902f42f6c71c8a0a08fe8c3a95584a47291.png";

export function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "pharma-ops",
      title: "How we Transformed Pharma Ops by Automation & Software",
      industry: "Pharmaceutical",
      // heroImage: imgImage9,
      metrics: [
        { value: "40%", label: "Reduction", description: "In Operational Costs" },
        { value: "4 Weeks", label: "Project Delivery", description: "To Deploy First Model" },
        { value: "15%", label: "Improvement", description: "In Customer Satisfaction" }
      ],
      challenges: [
        "Our clients faced multiple operational hurdles across their businesses. They lacked comprehensive visibility into inventory across diverse geographic locations, making it difficult to track stock levels and manage expirations efficiently.",
        "Additionally, they struggled with accessing real-time data for executive decision-making in fast-paced markets, with no robust reporting system to support strategic planning.",
        "Cost analysis also presented significant difficulties, as they had no systematic approach to evaluate product costs or predict the impact of raw material price fluctuations."
      ],
      solutions: [
        "Our inventory management system provided complete visibility into stock levels across locations with detailed reports on excess and expiring inventory, alongside actionable recommendations for purchase order optimization.",
        "We complemented this with an advanced Business Intelligence reporting system featuring live sales/margin reports, accurate gross-to-net calculations for the US market, and clear budget-to-actuals comparisons.",
        "To complete the ecosystem, our Cost Insight Analyzer implemented BOM-based cost sheets for detailed product cost breakdowns and sophisticated what-if analysis capabilities, allowing stakeholders to model the impact of material price changes on their overall P&L statement."
      ],
      outcomes: [
        {
          icon: TrendingUp,
          title: "Financial Performance",
          description: "Enhanced cost containment measures resulted in significantly improved financial performance and profitability."
        },
        {
          icon: BarChart3,
          title: "Inventory Optimization",
          description: "Achieved 30-40% inventory reduction, decreasing tied-up investment and improving cash flow management."
        },
        {
          icon: Zap,
          title: "Data Analytics",
          description: "Instant report availability provided management with timely insights for strategic decision making."
        }
      ],
      conclusion: "By implementing the Business Intelligence Reporting System, Cost Analysis Tool, and Custom Inventory Management Software, the client enhanced operational efficiency. These solutions improved financial health and streamlined inventory management, positioning the company for success in the competitive pharmaceutical industry."
    },
    {
      id: "jewellery-ops",
      title: "How we Transformed Jewellery Ops by Automation & Software",
      industry: "Retail/E-commerce",
      // heroImage: imgImage44,
      metrics: [
        { value: "40%", label: "Reduction", description: "In Operational Costs" },
        { value: "4 Weeks", label: "Project Delivery", description: "To Deploy First Model" },
        { value: "15%", label: "Improvement", description: "In Customer Satisfaction" }
      ],
      challenges: [
        "The inventory management was severely impacted by poor turnover rates, with products sitting for an average of 14 months, significantly draining cash flow and increasing storage costs.",
        "Product distribution inefficiencies created persistent mismatches between store inventories and actual customer demand, resulting in elevated return rates and customer dissatisfaction.",
        "Warehouse operations were plagued by slow processes, with stock disbursement taking up to 7 days, causing substantial delays in fulfilling store requirements. Additionally, the absence of real-time data insights severely hampered decision-making capabilities and overall operational efficiency."
      ],
      solutions: [
        "Our digital eCommerce solution included both a user-friendly mobile application and an integrated web platform, enabling customers to browse products seamlessly, make secure purchases, and receive personalized recommendations while providing powerful inventory management and customer engagement features.",
        "We developed a sophisticated data analytics and reporting platform that optimized product distribution through sales trend analysis, implemented automated account reconciliation systems to eliminate manual errors, and created dynamic MIS reports for real-time business performance insights.",
        "Finally, our custom warehouse management system streamlined the entire flow of goods from entry to distribution, eliminating bottlenecks and dramatically improving operational efficiency throughout their supply chain."
      ],
      outcomes: [
        {
          icon: Target,
          title: "Process Automation",
          description: "Streamlined operations resulted in significantly improved workflow and reduced processing times overall."
        },
        {
          icon: TrendingUp,
          title: "Cost Reduction",
          description: "Achieved 30-40% inventory reduction, decreasing tied-up investment and improving cash flow management."
        },
        {
          icon: CheckCircle,
          title: "Quality Control",
          description: "Optimized distribution and customer matching reduced return rates significantly across all channels."
        }
      ],
      conclusion: "Our partnership with one of India's largest fashion jewelry chains not only transformed their digital eCommerce presence but also enhanced their operational efficiency and customer satisfaction. By integrating advanced technology solutions, the client is now equipped to meet market demands swiftly, reduce costs, and drive significant growth."
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
              <Star className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--teal-primary)]">Proven Results</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Work & Case Studies
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover how we've transformed businesses through innovative automation and software solutions, delivering measurable results across industries.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--teal-primary)] mb-2">40%</div>
                <div className="text-gray-600">Average Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="max-w-7xl mx-auto">
                {/* Case Study Hero */}
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden mb-16 group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${study})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />
                  
                  <div className="relative h-full flex flex-col justify-center px-8 lg:px-16 text-white">
                    <div className="max-w-4xl">
                      <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                        {study.industry}
                      </Badge>
                      
                      <h2 className="text-3xl lg:text-5xl font-bold mb-12 leading-tight">
                        {study.title}
                      </h2>
                      
                      {/* Metrics */}
                      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center md:text-left">
                            <div className="text-3xl lg:text-4xl font-bold mb-2">
                              {metric.value}
                            </div>
                            <div className="text-lg font-medium mb-1">
                              {metric.label}
                            </div>
                            <div className="text-sm text-white/80">
                              {metric.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="grid gap-16">
                  {/* Challenges */}
                  <Card className="bg-white border border-gray-200 overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <h3 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-8">
                        Challenges
                      </h3>
                      <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        {study.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-red-600 font-bold text-sm">{idx + 1}</span>
                            </div>
                            <p>{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Solutions */}
                  <Card className="bg-white border border-gray-200 overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <h3 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-8">
                        Solutions
                      </h3>
                      <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        {study.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-[var(--teal-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <CheckCircle className="w-4 h-4 text-[var(--teal-primary)]" />
                            </div>
                            <p>{solution}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Outcomes */}
                  <Card className="bg-white border border-gray-200 overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <h3 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-12">
                        Key Outcomes
                      </h3>
                      
                      <div className="grid md:grid-cols-3 gap-8">
                        {study.outcomes.map((outcome, idx) => {
                          const IconComponent = outcome.icon;
                          return (
                            <Card key={idx} className="bg-[var(--gray-100)] border-0 hover:shadow-lg transition-all duration-300 group">
                              <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                
                                <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-3">
                                  {outcome.title}
                                </h4>
                                
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {outcome.description}
                                </p>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Conclusion */}
                  <Card className="bg-gradient-to-r from-[var(--gray-100)] to-white border border-gray-200 overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-6">
                            Conclusion
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {study.conclusion}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Star className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our growing list of successful clients. Let's discuss how our automation and software solutions can drive measurable results for your business.
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
                className="rounded-full px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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