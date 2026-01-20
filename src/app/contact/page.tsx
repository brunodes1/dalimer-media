"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to your CRM (Pipedrive) or email service
    // For now, we'll simulate a submission and use mailto as fallback
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Open mailto as fallback
    const mailtoLink = `mailto:sales@dmintermedia.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-brand-light py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question about our products or need support? We&apos;re here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                    >
                      <option value="">Select a topic...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Download Issue">Download Issue</option>
                      <option value="Bulk Order / Licensing">Bulk Order / Licensing</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-brand-gold text-brand-navy hover:bg-yellow-400"
                    }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">Response Time</h3>
                  <p className="text-gray-600">Within 24-48 business hours</p>
                  <p className="text-gray-500 text-sm">Monday - Friday, 9am - 5pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information & Offices */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Direct Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">General Inquiries</h3>
                    <a href="mailto:admin@dmintermedia.com" className="text-brand-gold hover:underline">
                      admin@dmintermedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Sales &amp; Partnerships</h3>
                    <a href="mailto:sales@dmintermedia.com" className="text-brand-gold hover:underline">
                      sales@dmintermedia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Canada Office */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">Canada Office</h2>
                  <p className="text-gray-500 text-sm">North American Operations</p>
                </div>
              </div>
              
              <div className="bg-brand-light rounded-xl p-4">
                <p className="font-semibold text-brand-navy">Dalimer Media</p>
                <p className="text-gray-700 text-sm">83 West St-Paul</p>
                <p className="text-gray-700 text-sm">Montreal, Quebec, Canada</p>
                <p className="text-gray-700 text-sm">H2Y 1Z1</p>
              </div>
            </div>

            {/* Ireland Office */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">Ireland Office</h2>
                  <p className="text-gray-500 text-sm">European Operations</p>
                </div>
              </div>
              
              <div className="bg-brand-light rounded-xl p-4">
                <p className="font-semibold text-brand-navy">Dalimer Media Limited</p>
                <p className="text-gray-700 text-sm">Ground Floor</p>
                <p className="text-gray-700 text-sm">71 Lower Baggot Street</p>
                <p className="text-gray-700 text-sm">Dublin, Ireland</p>
                <p className="text-gray-700 text-sm">D02 P593</p>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Intellectual Property</h3>
              <p className="text-gray-300 text-sm">
                All transformative content © 2026 Dalimer Corporation. All Rights Reserved. 
                Transformative content licensed under CC BY-NC-ND 4.0.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
