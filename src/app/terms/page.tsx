import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for DM Intermedia digital products and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-light py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-brand-navy mb-2">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 20, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the DM Intermedia website (www.dmintermedia.com) and purchasing our digital products, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-gray-700">
              DM Intermedia is a trade name of Dalimer Outsourcing Inc., a company incorporated in Quebec, Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              All transformative content, including but not limited to AI-generated audio conversations, video overviews, infographics, reports, slide decks, cover art, and summary guides, is the intellectual property of Dalimer Corporation and is protected by copyright law.
            </p>
            <p className="text-gray-700 mb-4">
              The original literary texts included in our products are sourced from the public domain (Project Gutenberg) and are not subject to our copyright claims.
            </p>
            <p className="text-gray-700">
              Our transformative content is licensed under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Digital Products and Delivery</h2>
            <p className="text-gray-700 mb-4">
              All products sold on DM Intermedia are digital downloads. Upon successful payment, you will receive immediate access to download your purchased files.
            </p>
            <p className="text-gray-700 mb-4">
              Each product package includes 8 digital files: Audio Conversation, Video Overview, Infographic, Detailed Report, Slide Deck, Original Text, Cover Art, and Summary Guide.
            </p>
            <p className="text-gray-700">
              You are responsible for downloading and storing your purchased files. We recommend backing up your downloads.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Permitted Use</h2>
            <p className="text-gray-700 mb-4">
              Upon purchase, you are granted a personal, non-transferable, non-exclusive license to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Download and store the digital files for personal use</li>
              <li>Use the materials for personal education and study</li>
              <li>Share within your immediate household</li>
            </ul>
            <p className="text-gray-700">
              You may NOT:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Redistribute, resell, or share files publicly</li>
              <li>Modify or create derivative works</li>
              <li>Use for commercial purposes without written permission</li>
              <li>Upload to file-sharing platforms or torrents</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Pricing and Payment</h2>
            <p className="text-gray-700 mb-4">
              All prices are displayed in US Dollars (USD). Payment is processed securely through Shopify Payments. We accept major credit cards and other payment methods as displayed at checkout.
            </p>
            <p className="text-gray-700">
              Prices are subject to change without notice. Any applicable taxes will be calculated and displayed at checkout based on your location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              Due to the digital nature of our products, all sales are final. Once a digital product has been downloaded, we cannot offer refunds.
            </p>
            <p className="text-gray-700">
              If you experience technical issues with your download, please contact us at admin@dmintermedia.com within 7 days of purchase and we will assist you in resolving the issue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. AI-Generated Content Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Our audio conversations, video overviews, and other supplementary materials are generated using artificial intelligence technology. While we strive for accuracy, these materials are intended for educational and entertainment purposes.
            </p>
            <p className="text-gray-700">
              We recommend consulting the original texts and additional scholarly sources for academic or professional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700">
              DM Intermedia, Dalimer Outsourcing Inc., and Dalimer Corporation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services constitutes acceptance of any modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions regarding these Terms and Conditions, please contact us:
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
              © 2026 Dalimer Corporation. All Rights Reserved. Transformative content licensed under CC BY-NC-ND 4.0.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
