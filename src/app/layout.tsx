import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DM Intermedia - Classic Literature Reimagined",
  description: "Experience timeless stories through AI-powered podcasts, visual guides, and comprehensive study materials. Perfect for modern learners.",
  keywords: ["classic literature", "audiobooks", "study guides", "AI podcasts", "book summaries"],
  openGraph: {
    title: "DM Intermedia - Classic Literature Reimagined",
    description: "Experience timeless stories through AI-powered podcasts, visual guides, and comprehensive study materials.",
    url: "https://www.dmintermedia.com",
    siteName: "DM Intermedia",
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PTB6QRRYR1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTB6QRRYR1');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-brand-navy text-white py-4 px-6 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="text-brand-gold">DM</span> INTERMEDIA
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/#titles" className="hover:text-brand-gold transition-colors">
                Browse Titles
              </Link>
              <Link href="/bundles" className="hover:text-brand-gold transition-colors">
                Bundles
              </Link>
              <Link 
                href="/#titles" 
                className="bg-brand-gold text-brand-navy px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </nav>
        
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
