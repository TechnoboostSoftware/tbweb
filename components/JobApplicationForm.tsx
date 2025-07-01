import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Upload, X, FileText, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface JobApplicationFormProps {
  children: React.ReactNode;
  position?: string;
}

export function JobApplicationForm({ children, position }: JobApplicationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: ""
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Word document");
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !selectedFile) {
      toast.error("Please fill in all required fields and upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Application submitted successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: ""
      });
      setSelectedFile(null);
      setIsOpen(false);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[var(--dark-primary)]">
            Apply for Position
            {position && (
              <span className="block text-lg text-[var(--teal-primary)] mt-1">
                {position}
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below to submit your application. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Resume/CV *
            </Label>
            
            {!selectedFile ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[var(--teal-primary)] transition-colors duration-200">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Label htmlFor="resume" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload your resume
                  </p>
                  <p className="text-xs text-gray-400">
                    PDF, DOC, or DOCX up to 5MB
                  </p>
                </Label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 bg-[var(--teal-primary)]/5 border border-[var(--teal-primary)]/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[var(--teal-primary)]" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-gray-400 hover:text-red-500 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter" className="text-sm font-medium text-gray-700 mb-2 block">
              Cover Letter (Optional)
            </Label>
            <Textarea
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter", e.target.value)}
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              className="w-full min-h-[100px] resize-none"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)] hover:from-[var(--teal-secondary)] hover:to-[var(--teal-primary)] text-white py-3 rounded-lg font-medium transition-all duration-300"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Submit Application</span>
              </div>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this application, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}