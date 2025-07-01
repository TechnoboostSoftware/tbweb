import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Building2, TrendingUp, BarChart3, Users, Clock, Target, CheckCircle, Lightbulb } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function PharmaCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--teal-primary)]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[var(--teal-primary)] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] text-white border-0 shadow-lg">
              Healthcare Industry
            </Badge>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Pharma Operations Transformation
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing pharmaceutical operations through intelligent automation and software solutions
            </p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">40%</div>
                <div className="text-gray-600">Reduction in Inventory Levels</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">4 Weeks</div>
                <div className="text-gray-600">To Deploy First Model</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">15%</div>
                <div className="text-gray-600">Improvement in Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--dark-primary)] mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive transformation of pharmaceutical operations involved implementing cutting-edge automation 
                  and software solutions to address critical operational challenges and drive measurable business outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--teal-primary)] rounded-full"></div>
                    <span className="text-gray-700">Advanced inventory management systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--teal-primary)] rounded-full"></div>
                    <span className="text-gray-700">Real-time business intelligence reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[var(--teal-primary)] rounded-full"></div>
                    <span className="text-gray-700">Sophisticated cost analysis tools</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[var(--teal-primary)]/10 to-blue-500/10 rounded-3xl p-8 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--teal-primary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Real-time</div>
                    <div className="text-sm text-gray-600">Data Insights</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Advanced</div>
                    <div className="text-sm text-gray-600">Analytics</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Enhanced</div>
                    <div className="text-sm text-gray-600">User Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Optimized</div>
                    <div className="text-sm text-gray-600">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Challenges We Addressed
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our client faced multiple operational hurdles that were impacting their business efficiency and growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-red-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    Limited Inventory Visibility
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lacked comprehensive visibility into inventory across diverse geographic locations, 
                    making it difficult to track stock levels and manage expirations efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    No Real-time Data Access
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Struggled with accessing real-time data for executive decision-making in fast-paced markets, 
                    with no robust reporting system to support strategic planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    Cost Analysis Difficulties
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Had no systematic approach to evaluate product costs or predict the impact 
                    of raw material price fluctuations on overall business performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Our Strategic Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We implemented a comprehensive suite of solutions designed to transform operational efficiency.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-[var(--teal-primary)] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Advanced Inventory Management System
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Our inventory management system provided complete visibility into stock levels across locations 
                        with detailed reports on excess and expiring inventory, alongside actionable recommendations 
                        for purchase order optimization.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Real-time Tracking</Badge>
                        <Badge variant="secondary">Expiration Management</Badge>
                        <Badge variant="secondary">Order Optimization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Business Intelligence Reporting System
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We implemented an advanced Business Intelligence reporting system featuring live sales/margin reports, 
                        accurate gross-to-net calculations for the US market, and clear budget-to-actuals comparisons.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Live Reports</Badge>
                        <Badge variant="secondary">Margin Analysis</Badge>
                        <Badge variant="secondary">Budget Tracking</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Cost Insight Analyzer
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Our Cost Insight Analyzer implemented BOM-based cost sheets for detailed product cost breakdowns 
                        and sophisticated what-if analysis capabilities, allowing stakeholders to model the impact 
                        of material price changes on their overall P&L statement.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">BOM Analysis</Badge>
                        <Badge variant="secondary">What-if Scenarios</Badge>
                        <Badge variant="secondary">P&L Impact</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Key Outcomes & Results
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The implementation delivered significant improvements across all key business metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Financial Efficiency
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enhanced cost containment resulted in improved performance.
                  </p>
                  <div className="text-3xl font-bold text-emerald-600">40%</div>
                  <div className="text-sm text-gray-500">Cost Reduction</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Inventory Optimization
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reduced inventory levels by forty percent, decreasing investment.
                  </p>
                  <div className="text-3xl font-bold text-blue-600">30-40%</div>
                  <div className="text-sm text-gray-500">Inventory Reduction</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Real-Time Reporting
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Instant availability gave management timely insights for decisions.
                  </p>
                  <div className="text-3xl font-bold text-[var(--teal-primary)]">24/7</div>
                  <div className="text-sm text-gray-500">Real-time Access</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)]"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[var(--dark-primary)]">
                  Mission Accomplished
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our integrated solutions enhanced operational efficiency and improved financial health, 
                  positioning the client for success in the competitive pharmaceutical industry.
                </p>
              </div>
              <div className="lg:pt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-[var(--teal-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-7 h-7 text-[var(--teal-primary)]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Enhanced Decision Making</div>
                        <div className="text-gray-600">Real-time data insights for strategic planning and operational excellence</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-[var(--teal-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-7 h-7 text-[var(--teal-primary)]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Improved Financial Performance</div>
                        <div className="text-gray-600">Significant cost reductions and enhanced operational efficiency</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-[var(--teal-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-7 h-7 text-[var(--teal-primary)]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Streamlined Operations</div>
                        <div className="text-gray-600">Optimized inventory management and automated processes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our proven pharmaceutical automation solutions can drive similar results for your business.
            </p>
            
            <div className="flex justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}