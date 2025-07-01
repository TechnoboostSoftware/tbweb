import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Lightbulb, Users, Shield, Target, Quote, CheckCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new ideas and technologies to create innovative solutions for our clients.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We take ownership of our work and are accountable for delivering results that meet or exceed our clients' expectations.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Ethics and Integrity",
      description: "We operate with the highest ethical standards and integrity, treating our clients, team members, and partners with respect and fairness.",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const services = [
    "Start-Up Support Services",
    "Ecommerce Solutions", 
    "Automation & Process Optimization",
    "Data Analytics & Insights"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--teal-primary)]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--blue-accent)]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[var(--yellow-accent)]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.hash = 'home'}
              className="mb-8 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-sm mb-8">
              <Users className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">About Technoboost</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              About Us
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are an IT consulting and services company driving value to our clients with custom software solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We believe that technology is a vital tool for any modern business, and we are passionate about helping our clients unlock its full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[var(--teal-primary)]/5 to-[var(--blue-accent)]/5 border border-[var(--teal-primary)]/20 shadow-lg">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-6">
                  Our Mission
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our mission is to help businesses reach their potential by providing innovative, reliable and custom technology solutions. We are committed to delivering excellence at every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--dark-primary)] mb-4 group-hover:text-[var(--teal-primary)] transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-full mx-auto mb-12"></div>
            
            <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8 lg:p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-white">P</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-2">
                  Puneet Parakh
                </h3>
                
                <Badge className="mb-4 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] text-white border-0">
                  Founder / CEO
                </Badge>
                
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-[var(--teal-primary)] opacity-50" />
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Our mission is to help businesses reach their potential by providing innovative, reliable and custom technology solutions. We are committed to delivering excellence at every step of the way."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How we work with our clients to ensure their success
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-6">
                  Building Strong Relationships
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Technoboost, we pride ourselves on our ability to build strong relationships with our clients. We work closely with our clients, learning about their products and aligning our work with their goals and strategy.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  We value long-term, mutually beneficial relationships and prefer to work with a small number of clients to ensure their success.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[var(--dark-primary)] mb-4">Key Services:</h4>
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--teal-primary)] flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Card className="bg-white border border-gray-200 shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-[var(--dark-primary)] mb-4">
                        Client-Centric Focus
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We understand the unique challenges faced by businesses and tailor our solutions to meet specific needs and goals.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-[var(--teal-primary)]/5 rounded-lg">
                          <div className="text-2xl font-bold text-[var(--teal-primary)] mb-1">100+</div>
                          <div className="text-sm text-gray-600">Projects Delivered</div>
                        </div>
                        <div className="text-center p-4 bg-[var(--blue-accent)]/5 rounded-lg">
                          <div className="text-2xl font-bold text-[var(--blue-accent)] mb-1">99%</div>
                          <div className="text-sm text-gray-600">Client Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Take Your Business to the Next Level?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              If you are looking for a reliable and innovative software company to help transform your business, look no further than Technoboost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button 
                  size="lg"
                  className="bg-white text-[var(--teal-primary)] hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Your Project Today
                </Button>
              </ContactForm>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 border-white/30 text-[#2dcbc5] hover:bg-white/10 hover:border-white/50 bg-[rgba(255,255,255,1)]"
                onClick={() => window.location.hash = 'work'}
              >
                View Our Work
              </Button>
            </div>
            
            <div className="mt-8 text-white/70">
              <p className="text-sm">💡 Free consultation • Long-term partnerships • Proven results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}