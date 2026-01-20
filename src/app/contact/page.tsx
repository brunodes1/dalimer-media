import { Metadata } from "next";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DM Intermedia. Contact us for support, sales inquiries, or general questions.",
};

export default function ContactPage() {
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
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
              
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
                    <p className="text-gray-500 text-sm mt-1">For general questions and support</p>
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
                    <p className="text-gray-500 text-sm mt-1">For bulk orders, licensing, and partnerships</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">Response Time</h3>
                    <p className="text-gray-700">Within 24-48 business hours</p>
                    <p className="text-gray-500 text-sm mt-1">Monday - Friday, 9am - 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Common Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-brand-navy">How do I download my purchase?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    After payment, you&apos;ll receive an email with download links. Check your spam folder if you don&apos;t see it.
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-brand-navy">What file formats are included?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Each package includes MP3 audio, MP4 video, PDF reports, PowerPoint slides, and image files.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">Can I get a refund?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Due to the digital nature of our products, all sales are final. Contact us if you have download issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            {/* Canada Office */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy">Canada Office</h2>
                  <p className="text-gray-500">North American Operations</p>
                </div>
              </div>
              
              <div className="bg-brand-light rounded-xl p-6">
                <p className="font-semibold text-brand-navy">Dalimer Media</p>
                <p className="text-gray-700">83 West St-Paul</p>
                <p className="text-gray-700">Montreal, Quebec, Canada</p>
                <p className="text-gray-700">H2Y 1Z1</p>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                <p>Operating as: Dalimer Outsourcing Inc.</p>
                <p>d/b/a DM Intermedia, Dalimer Media</p>
              </div>
            </div>

            {/* Ireland Office */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy">Ireland Office</h2>
                  <p className="text-gray-500">European Operations</p>
                </div>
              </div>
              
              <div className="bg-brand-light rounded-xl p-6">
                <p className="font-semibold text-brand-navy">Dalimer Media Limited</p>
                <p className="text-gray-700">Ground Floor</p>
                <p className="text-gray-700">71 Lower Baggot Street</p>
                <p className="text-gray-700">Dublin, Ireland</p>
                <p className="text-gray-700">D02 P593</p>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Intellectual Property</h3>
              <p className="text-gray-300 text-sm">
                All transformative content © 2026 Dalimer Corporation. All Rights Reserved. 
                Original public domain texts sourced from Project Gutenberg.
                Transformative content licensed under CC BY-NC-ND 4.0.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
