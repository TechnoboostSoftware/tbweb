import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AIIllustration } from "./AIIllustration";

export function ModernHero() {
  const handleContactClick = () => {
    window.location.hash = 'contact';
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--yellow-accent)]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--teal-primary)]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[var(--blue-accent)]/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--teal-primary)]/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[var(--teal-primary)] mr-2" />
              <span className="text-sm font-medium text-gray-700">Cloud Powered • Digital Led • AI Driven</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[var(--dark-primary)]">
                Driving Growth
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)]">
                  With AI &
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal-secondary)] to-[var(--teal-accent)]">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your business with cloud-powered solutions that drive growth, enhance efficiency, and unlock new possibilities through AI and automation.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white border-0 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-[var(--dark-primary)]">100+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-[var(--dark-primary)]">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-[var(--dark-primary)]">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* AI Illustration */}
          <div className="relative">
            <AIIllustration />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[var(--teal-primary)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--teal-primary)] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}