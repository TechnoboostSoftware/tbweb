import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Gem, TrendingUp, BarChart3, Users, Clock, Target, CheckCircle, Lightbulb, ShoppingCart, Warehouse, Smartphone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function JewelleryCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-500 rounded-full animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
              Fashion Industry
            </Badge>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Gem className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Jewellery Operations Excellence
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transforming retail operations with cutting-edge automation and software solutions
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
                  Our comprehensive digital transformation of India's largest fashion jewelry chain involved implementing 
                  advanced eCommerce solutions, data analytics platforms, and warehouse management systems to revolutionize 
                  their retail operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Digital eCommerce platform development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced data analytics and reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Custom warehouse management system</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Mobile</div>
                    <div className="text-sm text-gray-600">eCommerce App</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Data</div>
                    <div className="text-sm text-gray-600">Analytics</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[var(--teal-primary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Warehouse className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[var(--dark-primary)]">Warehouse</div>
                    <div className="text-sm text-gray-600">Management</div>
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
                The client faced significant operational challenges that were hampering growth and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-red-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    Poor Inventory Turnover
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The inventory management was severely impacted by poor turnover rates, with products 
                    sitting for an average of 14 months, significantly draining cash flow and increasing storage costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    Distribution Inefficiencies
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Product distribution inefficiencies created persistent mismatches between store inventories 
                    and actual customer demand, resulting in elevated return rates and customer dissatisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-3">
                    Slow Warehouse Operations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Warehouse operations were plagued by slow processes, with stock disbursement taking up to 7 days, 
                    causing substantial delays and hampering decision-making capabilities.
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
                We implemented a comprehensive digital transformation strategy tailored for the jewelry retail industry.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Digital eCommerce Platform
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Our digital eCommerce solution included both a user-friendly mobile application and an integrated 
                        web platform, enabling customers to browse products seamlessly, make secure purchases, and receive 
                        personalized recommendations while providing powerful inventory management features.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Mobile App</Badge>
                        <Badge variant="secondary">Web Platform</Badge>
                        <Badge variant="secondary">Personalization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[var(--teal-primary)] hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Data Analytics & Reporting Platform
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We developed a sophisticated data analytics and reporting platform that optimized product distribution 
                        through sales trend analysis, implemented automated account reconciliation systems to eliminate manual 
                        errors, and created dynamic MIS reports for real-time business performance insights.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Sales Analysis</Badge>
                        <Badge variant="secondary">Auto Reconciliation</Badge>
                        <Badge variant="secondary">MIS Reports</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Warehouse className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                        Custom Warehouse Management System
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Our custom warehouse management system streamlined the entire flow of goods from entry to distribution, 
                        eliminating bottlenecks and dramatically improving operational efficiency throughout their supply chain.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Flow Optimization</Badge>
                        <Badge variant="secondary">Bottleneck Elimination</Badge>
                        <Badge variant="secondary">Supply Chain</Badge>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Key Outcomes & Results
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The transformation delivered remarkable improvements in operational efficiency and customer experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Warehouse className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Warehouse Efficiency
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enhanced operations resulted in significantly improved processing speeds.
                  </p>
                  <div className="text-3xl font-bold text-emerald-600">7x</div>
                  <div className="text-sm text-gray-500">Faster Processing</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Inventory Reduction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reduced inventory levels by forty percent, decreasing investment.
                  </p>
                  <div className="text-3xl font-bold text-purple-600">30-40%</div>
                  <div className="text-sm text-gray-500">Inventory Reduction</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-3">
                    Return Reduction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Reduced returns gave management timely insights for decisions.
                  </p>
                  <div className="text-3xl font-bold text-[var(--teal-primary)]">60%</div>
                  <div className="text-sm text-gray-500">Return Reduction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[var(--dark-primary)]">
                  Digital Transformation Complete
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our digital transformation enhanced operational efficiency and customer satisfaction, 
                  equipping the client to meet market demands and drive significant growth.
                </p>
              </div>
              <div className="lg:pt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-7 h-7 text-purple-600" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Digital eCommerce Excellence</div>
                        <div className="text-gray-600">Mobile & web platform transformation for enhanced customer experience</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-[var(--teal-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-7 h-7 text-[var(--teal-primary)]" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Advanced Analytics</div>
                        <div className="text-gray-600">Real-time insights and reporting for data-driven decisions</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Warehouse className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-semibold text-[var(--dark-primary)] mb-2">Operational Excellence</div>
                        <div className="text-gray-600">Streamlined warehouse operations and supply chain optimization</div>
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
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Retail Operations?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our proven retail automation solutions can drive similar transformational results for your business.
            </p>
            
            <div className="flex justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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