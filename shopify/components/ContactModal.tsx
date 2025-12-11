import React, { useEffect, useState } from "react";

import {
  X,
  Send,
  Mail,
  User,
  MessageSquare,
  Calendar,
  Clock,
  Globe,
  Check,
} from "lucide-react";
import { Button } from "../ui/Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (type: "success" | "error", message: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  showToast,
}) => {
  const [scheduleCall, setScheduleCall] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    timezone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, date, time, timezone, message } = formData;

    const emailBodyContent = `
      <b>Full Name:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Date:</b> ${date}<br>
      <b>Time:</b> ${time}<br>
      <b>Timezone:</b> ${timezone}<br>
      <b>Message:</b> ${message}
    `;

    const jsondata = {
      token: "gUXMeJn%P8gRVxMH",
      emailSubjectLine: "Enquiry for business",
      emailBodyContent: emailBodyContent,
    };

    try {
      const response = await fetch(
        "https://es.technoboost.in/api/v1/mail-send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsondata),
        }
      );

      const result = await response.json();

      if (result.status === "NOT_FOUND") {
        showToast("error", "Something went wrong!");
      } else {
        showToast(
          "success",
          "Thank you for contacting us! We'll get back to you."
        );
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          timezone: "",
          message: "",
        });
        setScheduleCall(false);

        onClose();
      }
    } catch (error) {
      showToast("error", "Something went wrong!");
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl transform transition-all animate-float max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Let's Build Something Great
            </h3>
            <p className="text-gray-500">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Schedule Toggle */}
            <div
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-300 ${
                scheduleCall
                  ? "bg-brand-purple/5 border-brand-purple/30"
                  : "bg-gray-50 border-gray-100 hover:border-gray-200"
              }`}
              onClick={() => setScheduleCall(!scheduleCall)}
            >
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200 ${
                  scheduleCall
                    ? "bg-brand-purple border-brand-purple"
                    : "bg-white border-gray-300"
                }`}
              >
                {scheduleCall && (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                )}
              </div>
              <span
                className={`font-medium text-sm ${
                  scheduleCall ? "text-brand-purple" : "text-gray-700"
                }`}
              >
                I'd like to schedule a call
              </span>
            </div>

            {/* Scheduling Fields */}
            {scheduleCall && (
              <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">
                      Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-brand-purple" />
                      </div>
                      <input
                        type="date"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-sm text-gray-700"
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">
                      Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-4 w-4 text-brand-purple" />
                      </div>
                      <input
                        type="time"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-sm text-gray-700"
                        value={formData.time}
                        onChange={(e) =>
                          handleInputChange("time", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">
                    Timezone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-4 w-4 text-brand-purple" />
                    </div>
                    <select
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all text-sm text-gray-700 bg-white"
                      value={formData.timezone}
                      onChange={(e) =>
                        handleInputChange("timezone", e.target.value)
                      }
                    >
                      <option value="">Select Timezone</option>
                      <option value="IST">India Standard Time (IST)</option>
                      <option value="EST">Eastern Standard Time (EST)</option>
                      <option value="PST">Pacific Standard Time (PST)</option>
                      <option value="UTC">
                        Coordinated Universal Time (UTC)
                      </option>
                      <option value="BST">British Summer Time (BST)</option>
                      <option value="AEST">
                        Australian Eastern Standard Time (AEST)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all resize-none"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                ></textarea>
              </div>
            </div>

            <Button size="lg" className="w-full gap-2 mt-2">
              {scheduleCall ? "Send & Schedule" : "Send Message"}{" "}
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
