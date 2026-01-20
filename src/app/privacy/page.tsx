import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DM Intermedia - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-light py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-brand-navy mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 20, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              DM Intermedia, operated by Dalimer Outsourcing Inc., is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.dmintermedia.com) and purchase our digital products.
            </p>
            <p className="text-gray-700">
              By using our website, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you make a purchase, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing address</li>
              <li>Payment information (processed securely by Shopify Payments)</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Geographic location (country/region)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Process and deliver your digital product purchases</li>
              <li>Send order confirmations and download links</li>
              <li>Respond to customer service requests</li>
              <li>Improve our website and products</li>
              <li>Analyze usage patterns and trends</li>
              <li>Prevent fraudulent transactions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Analytics Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following analytics services to understand how visitors use our website:
            </p>
            
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect anonymous information about your visits. You can opt out by installing the Google Analytics Opt-out Browser Add-on.
            </p>

            <h3 className="text-xl font-semibold text-brand-navy mb-3">Vercel Analytics</h3>
            <p className="text-gray-700">
              We use Vercel Analytics to monitor website performance and user experience. This service collects anonymous performance metrics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Essential cookies:</strong> Required for website functionality and checkout</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We share your information with the following third-party service providers:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Shopify:</strong> E-commerce platform and payment processing</li>
              <li><strong>Google Analytics:</strong> Website analytics</li>
              <li><strong>Vercel:</strong> Website hosting and analytics</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These providers have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure payment processing through Shopify Payments (PCI DSS compliant)</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
            <p className="text-gray-700 mt-4">
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Transaction records are kept for a minimum of 7 years for tax and legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us at admin@dmintermedia.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. International Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your country of residence, including Canada and the United States, where our service providers operate. These countries may have different data protection laws. By using our services, you consent to such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-brand-light rounded-lg p-6">
              <p className="text-gray-700 font-semibold">Dalimer Outsourcing Inc. d/b/a DM Intermedia</p>
              <p className="text-gray-700">83 West St-Paul</p>
              <p className="text-gray-700">Montreal, Quebec, Canada</p>
              <p className="text-gray-700">H2Y 1Z1</p>
              <p className="text-gray-700 mt-4">
                Email: <a href="mailto:admin@dmintermedia.com" className="text-brand-gold hover:underline">admin@dmintermedia.com</a>
              </p>
            </div>
          </section>

          <section>
            <p className="text-gray-500 text-sm">
              © 2026 Dalimer Corporation. All Rights Reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
