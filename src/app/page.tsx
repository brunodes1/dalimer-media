"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { Headphones, FileText, ImageIcon, Video, BookOpen, Presentation, FileType, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-slate-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Launch Special: 25% Off All Titles
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Classic Literature,<br />
            <span className="text-brand-gold">Reimagined</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Experience timeless stories through AI-powered podcasts, visual guides, 
            and comprehensive study materials. Perfect for modern learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#titles" 
              className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2"
            >
              Browse 11 Titles
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#how-it-works" 
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="how-it-works" className="py-16 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            8 Files Per Title
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every collection includes everything you need to truly understand and enjoy the classics
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Headphones, name: "Audio Conversation", desc: "AI podcast discussion" },
              { icon: Video, name: "Video Overview", desc: "Visual presentation" },
              { icon: ImageIcon, name: "Infographic", desc: "Key concepts visualized" },
              { icon: FileText, name: "Detailed Report", desc: "In-depth analysis" },
              { icon: Presentation, name: "Slide Deck", desc: "Presentation ready" },
              { icon: BookOpen, name: "Original Text", desc: "Complete source" },
              { icon: ImageIcon, name: "Cover Art", desc: "High-quality image" },
              { icon: FileType, name: "Summary Guide", desc: "Quick reference" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="titles" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Collection
          </h2>
          <p className="text-center text-gray-600 mb-12">
            11 carefully curated classics, each transformed into a complete learning package
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/titles/${product.slug}`}
                className="product-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                  <Image
                    src={product.coverImage}
                    alt={`${product.title} cover`}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-navy text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    ${product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-brand-light text-brand-navy text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-gold transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">by {product.author}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16 px-6 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Save More with Bundles
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your own collection and save up to 40%. 
            Perfect for educators, book clubs, or dedicated readers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">3-Pack</h3>
              <p className="text-3xl font-bold text-brand-gold mb-2">$34.99</p>
              <p className="text-sm text-gray-400 line-through">$44.97</p>
              <p className="text-sm text-gray-300 mt-2">Pick any 3 titles</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 ring-2 ring-brand-gold">
              <div className="text-xs font-bold text-brand-gold mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-2">5-Pack</h3>
              <p className="text-3xl font-bold text-brand-gold mb-2">$54.99</p>
              <p className="text-sm text-gray-400 line-through">$74.95</p>
              <p className="text-sm text-gray-300 mt-2">Pick any 5 titles</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2">Complete</h3>
              <p className="text-3xl font-bold text-brand-gold mb-2">$99.99</p>
              <p className="text-sm text-gray-400 line-through">$164.89</p>
              <p className="text-sm text-gray-300 mt-2">All 11 titles</p>
            </div>
          </div>
          <Link 
            href="/bundles"
            className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors inline-block"
          >
            View Bundle Options
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Choose DM Intermedia?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl mb-3">🎧</div>
              <h3 className="font-bold mb-2">AI-Enhanced Learning</h3>
              <p className="text-sm text-gray-600">
                Modern podcast discussions and visual guides for today&apos;s learners
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Instant Download</h3>
              <p className="text-sm text-gray-600">
                Get all 8 files immediately after purchase, ready to use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">DM Intermedia</h3>
              <p className="text-sm text-gray-400">
                Classic literature transformed for modern learners.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#titles" className="hover:text-white">Browse Titles</Link></li>
                <li><Link href="/bundles" className="hover:text-white">Bundles</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/license" className="hover:text-white">License Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Questions? Reach out at<br />
                <a href="mailto:sales@dmintermedia.com" className="text-brand-gold hover:underline">
                  sales@dmintermedia.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-4">
                <Link href="/contact" className="text-brand-gold hover:underline">
                  Contact Us →
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Dalimer Corporation. All Rights Reserved.</p>
            <p className="mt-2">Transformative content licensed under CC BY-NC-ND 4.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
