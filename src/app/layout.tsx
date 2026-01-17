import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DM Intermedia - Classic Literature, Reimagined",
  description: "Transform timeless classics into engaging podcasts, study guides, videos, flashcards, and visual breakdowns. Learn faster, understand deeper.",
  keywords: "audiobooks, podcasts, classic literature, study guides, flashcards, infographics, Bible, Meditations, Art of War",
  openGraph: {
    title: "DM Intermedia - Classic Literature, Reimagined",
    description: "Transform timeless classics into engaging podcasts, videos, and study guides.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-brand-cream text-brand-navy">
        <nav className="bg-brand-navy text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-brand-gold">DM</span> INTERMEDIA
            </a>
            <div className="flex gap-6 items-center">
              <a href="/#titles" className="hover:text-brand-gold transition-colors">
                Browse Titles
              </a>
              <a href="/#bundles" className="hover:text-brand-gold transition-colors">
                Bundles
              </a>
              <a 
                href="/#titles" 
                className="bg-brand-gold text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        </nav>
        
        <main>{children}</main>
        
        <footer className="bg-brand-navy text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-brand-gold">DM</span> INTERMEDIA
                </h3>
                <p className="text-gray-300">
                  Transforming classic literature into modern learning experiences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/#titles" className="hover:text-brand-gold">All Titles</a></li>
                  <li><a href="/#bundles" className="hover:text-brand-gold">Bundle Deals</a></li>
                  <li><a href="/about" className="hover:text-brand-gold">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-brand-gold">TikTok</a></li>
                  <li><a href="#" className="hover:text-brand-gold">Instagram</a></li>
                  <li><a href="#" className="hover:text-brand-gold">YouTube</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2026 Dalimer Corporation. All Rights Reserved.</p>
              <p className="text-sm mt-2">
                Original transformative content © DM Intermedia. Underlying public domain texts are not subject to this copyright.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
