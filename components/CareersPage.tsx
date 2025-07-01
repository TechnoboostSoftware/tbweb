import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Users, MapPin, Clock, Briefcase, Heart, Zap, Target, Mail, Send, Code, Palette, Server, Lightbulb } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { JobApplicationForm } from "./JobApplicationForm";

export function CareersPage() {
  const openPositions = [
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Bangalore, India",
      experience: "3-5 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
      icon: Code
    },
    {
      title: "UI/UX Designer",
      type: "Full-time", 
      location: "Bangalore, India",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      color: "from-purple-500 to-pink-500",
      icon: Palette
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Bangalore, India", 
      experience: "4-6 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-emerald-500 to-teal-500",
      icon: Server
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Continuous learning opportunities and skill development",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate and talented individuals",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Work on meaningful projects that make a difference",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/20"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232dcbc5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[var(--teal-primary)]/20 to-[var(--blue-accent)]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[var(--yellow-accent)]/20 to-[var(--teal-accent)]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-[var(--blue-accent)]/20 to-[var(--teal-primary)]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-6 h-6 bg-[var(--teal-primary)]/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-[var(--yellow-accent)]/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-8 h-1 bg-gradient-to-r from-[var(--teal-primary)]/30 to-transparent"></div>
        <div className="absolute top-3/4 right-16 w-1 h-8 bg-gradient-to-b from-[var(--blue-accent)]/30 to-transparent"></div>

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
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-lg mb-8">
              <Briefcase className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--dark-primary)] mb-6 leading-tight">
              Careers at{" "}
              <span className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--blue-accent)] bg-clip-text text-transparent">
                Technoboost
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our team of passionate developers, designers, and innovators building the future of technology.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <MapPin className="w-4 h-4 text-[var(--teal-primary)]" />
                <span className="text-gray-700">Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <Users className="w-4 h-4 text-[var(--blue-accent)]" />
                <span className="text-gray-700">Small, Close-knit Team</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <Clock className="w-4 h-4 text-[var(--yellow-accent)]" />
                <span className="text-gray-700">Flexible Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/30"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--teal-primary)]/10 to-[var(--blue-accent)]/10 border border-[var(--teal-primary)]/20 mb-4">
              <Lightbulb className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--teal-primary)]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talented individuals can thrive and make a meaningful impact.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color}`}></div>
                  <CardContent className="p-6 text-center relative">
                    <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10`}></div>
                      <IconComponent className={`w-6 h-6 relative z-10`} style={{ color: benefit.color.includes('red') ? '#ef4444' : benefit.color.includes('yellow') ? '#f59e0b' : benefit.color.includes('blue') ? '#3b82f6' : '#10b981' }} />
                    </div>
                    <h3 className="font-semibold text-[var(--dark-primary)] mb-2 group-hover:text-[var(--teal-primary)] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-teal-50/30"></div>
        
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2361c6ff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--blue-accent)]/10 to-[var(--teal-primary)]/10 border border-[var(--blue-accent)]/20 mb-4">
              <Briefcase className="w-4 h-4 text-[var(--blue-accent)] mr-2" />
              <span className="text-sm font-medium text-[var(--blue-accent)]">Open Positions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for talented individuals to join our growing team.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--blue-accent)] to-[var(--teal-primary)] rounded-full mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${position.color}`}></div>
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${position.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--dark-primary)] group-hover:text-[var(--teal-primary)] transition-colors">
                              {position.title}
                            </h3>
                          </div>
                          <Badge className="bg-gradient-to-r from-[var(--teal-primary)]/10 to-[var(--blue-accent)]/10 text-[var(--teal-primary)] border-[var(--teal-primary)]/20">
                            {position.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4 text-[var(--teal-primary)]" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4 text-[var(--blue-accent)]" />
                            <span>{position.experience}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs hover:bg-gray-50 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <JobApplicationForm position={position.title}>
                          <Button className={`bg-gradient-to-r ${position.color} hover:shadow-lg text-white rounded-lg px-6 transition-all duration-300 hover:scale-105`}>
                            Apply Now
                          </Button>
                        </JobApplicationForm>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50 max-w-lg mx-auto">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--yellow-accent)]/20 to-[var(--teal-accent)]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Send className="w-6 h-6 text-[var(--teal-primary)]" />
                </div>
                <p className="text-gray-600 mb-6">
                  Don't see a position that fits? We're always looking for talented people.
                </p>
                <JobApplicationForm>
                  <Button className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white rounded-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Send Us Your Resume
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </JobApplicationForm>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-[var(--yellow-accent)]/40 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-[var(--teal-primary)]/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-6 h-1 bg-gradient-to-r from-[var(--blue-accent)]/40 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--yellow-accent)]/10 to-[var(--teal-accent)]/10 border border-[var(--yellow-accent)]/20 mb-4">
              <Target className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--teal-primary)]">Application Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--dark-primary)] mb-4">
              How to Apply
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--yellow-accent)] to-[var(--teal-accent)] rounded-full mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="relative mb-4 mx-auto w-fit">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--teal-secondary)] rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--teal-primary)]/20 to-[var(--teal-secondary)]/20 rounded-2xl blur-lg -z-10 group-hover:blur-xl transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold text-[var(--dark-primary)] mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Submit your application here</p>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 mx-auto w-fit">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--blue-accent)] to-[var(--teal-primary)] rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--blue-accent)]/20 to-[var(--teal-primary)]/20 rounded-2xl blur-lg -z-10 group-hover:blur-xl transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold text-[var(--dark-primary)] mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Technical and cultural fit discussions</p>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 mx-auto w-fit">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--teal-accent)] rounded-2xl flex items-center justify-center text-[var(--dark-primary)] font-bold text-xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--yellow-accent)]/20 to-[var(--teal-accent)]/20 rounded-2xl blur-lg -z-10 group-hover:blur-xl transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold text-[var(--dark-primary)] mb-2">Join</h3>
                <p className="text-gray-600 text-sm">Welcome to the Technoboost family!</p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-white/90 to-teal-50/50 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--teal-primary)]/5 to-[var(--blue-accent)]/5"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal-primary)] to-[var(--blue-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-primary)] mb-4">
                  Questions About Working Here?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Feel free to reach out to us. We'd love to tell you more about life at Technoboost and how you can be part of our innovative journey.
                </p>
                <ContactForm>
                  <Button className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white rounded-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Get in Touch
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </ContactForm>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}