import { Button } from "./ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function ProjectsPage() {
  const projects = [
    {
      name: "Kushals Fashion Jewellery",
      type: "Inventory Management & Automation",
      industry: "Retail & Fashion",
      link: "#",
      website: "https://kushals.com"
    },
    {
      name: "Strides Pharmaceuticals",
      type: "Process Automation",
      industry: "Healthcare",
      link: "#",
      website: "https://strides.com"
    },
    {
      name: "Text2Motion",
      type: "Digital Platform Development",
      industry: "Technology",
      link: "#",
      website: "https://text2motion.ai"
    },
    {
      name: "Parentpa.ai",
      type: "AI-Powered Platform",
      industry: "EdTech & AI",
      link: "#",
      website: "https://parentpa.ai"
    },
    {
      name: "King Of Cards",
      type: "Wedding Cards Platform",
      industry: "Wedding & Events",
      link: "#",
      website: "https://kingofcards.in"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="mb-6 text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--dark-primary)] mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-gray-600">
              A comprehensive list of our completed projects and solutions.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-[var(--teal-primary)]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--dark-primary)] mb-2">
                      {project.name}
                    </h3>
                    <p className="text-[var(--teal-primary)] font-medium mb-2">
                      {project.type}
                    </p>
                    <p className="text-gray-600">
                      {project.industry}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    {project.link !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.location.hash = project.link}
                        className="text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] hover:bg-[var(--teal-primary)]/10"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                    {project.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.website, '_blank')}
                        className="border-[var(--teal-primary)] text-[var(--teal-primary)] hover:bg-[var(--teal-primary)] hover:text-white transition-all duration-300"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-center">
              More detailed case studies available for select projects. 
              <Button 
                variant="link" 
                onClick={() => window.location.hash = 'contact'}
                className="text-[var(--teal-primary)] hover:text-[var(--teal-secondary)] p-0 ml-1"
              >
                Contact us
              </Button> 
              {" "}for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}