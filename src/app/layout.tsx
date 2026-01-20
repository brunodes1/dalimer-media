import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dmintermedia.com'),
  title: {
    default: "DM Intermedia - Classic Literature Reimagined",
    template: "%s | DM Intermedia",
  },
  description: "Experience timeless stories through AI-powered podcasts, visual guides, and comprehensive study materials. 11 classic literature titles transformed for modern learners.",
  keywords: [
    "classic literature",
    "audiobooks",
    "study guides",
    "AI podcasts",
    "book summaries",
    "Don Quixote",
    "Pride and Prejudice",
    "Frankenstein",
    "Dracula",
    "Jane Eyre",
    "Alice in Wonderland",
    "The Art of War",
    "A Tale of Two Cities",
    "The Count of Monte Cristo",
    "Anne of Green Gables",
    "Black Beauty",
    "digital learning",
    "educational content",
  ],
  authors: [{ name: "DM Intermedia" }],
  creator: "DM Intermedia",
  publisher: "DM Intermedia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dmintermedia.com",
    siteName: "DM Intermedia",
    title: "DM Intermedia - Classic Literature Reimagined",
    description: "Experience timeless stories through AI-powered podcasts, visual guides, and comprehensive study materials. Perfect for modern learners.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DM Intermedia - Classic Literature Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM Intermedia - Classic Literature Reimagined",
    description: "Experience timeless stories through AI-powered podcasts, visual guides, and comprehensive study materials.",
    images: ["/og-image.png"],
    creator: "@dmintermedia",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://www.dmintermedia.com",
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
        
        {/* Structured Data - Organization */}
        <Script
          id="structured-data-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DM Intermedia",
              url: "https://www.dmintermedia.com",
              logo: "https://www.dmintermedia.com/logo.png",
              description: "Classic literature transformed into modern learning experiences through AI-powered podcasts, visual guides, and study materials.",
              sameAs: [
                "https://www.tiktok.com/@dmintermedia",
                "https://www.instagram.com/dmintermedia",
                "https://www.youtube.com/@dmintermedia",
              ],
            }),
          }}
        />
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
