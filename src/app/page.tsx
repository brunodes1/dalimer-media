import { products, bundles } from "@/lib/products";
import { Headphones, FileText, ImageIcon, CheckCircle, Sparkles, Zap, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern bg-gradient-to-br from-brand-cream to-brand-light py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-brand-gold/20 text-brand-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ New: AI-Powered Learning Experiences
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Classic Literature,{" "}
            <span className="gradient-text">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform the world&apos;s greatest books into engaging podcasts, visual guides, 
            and study materials. Learn in minutes what used to take hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#titles" 
              className="bg-brand-navy text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-navy/90 transition-colors btn-pulse"
            >
              Browse All Titles
            </a>
            <a 
              href="#bundles" 
              className="bg-white text-brand-navy px-8 py-4 rounded-xl font-semibold text-lg border-2 border-brand-navy hover:bg-brand-light transition-colors"
            >
              View Bundle Deals
            </a>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Every Package Includes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold mb-2">AI Podcast</h3>
              <p className="text-gray-600 text-sm">20-30 min engaging conversation that breaks down key themes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="font-semibold mb-2">Study Guide PDF</h3>
              <p className="text-gray-600 text-sm">Chapter summaries, key quotes, and analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-semibold mb-2">Visual Infographic</h3>
              <p className="text-gray-600 text-sm">Character maps, timelines, and concept visualizations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="font-semibold mb-2">FAQ Document</h3>
              <p className="text-gray-600 text-sm">Common questions answered with context</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="titles" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Collection
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            10 timeless classics transformed into modern learning experiences. 
            Each package is just $4.99.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/titles/${product.slug}`}
                className="product-card bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className={`h-32 bg-gradient-to-br ${product.color_gradient} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-serif font-bold opacity-30">
                    {product.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{product.title}</h3>
                    <span className="bg-brand-gold text-brand-navy text-sm font-bold px-2 py-1 rounded">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">by {product.author}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-brand-light text-brand-navy text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-16 px-6 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Bundle & Save
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Get more value with our bundle deals
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bundles.map((bundle) => (
              <div 
                key={bundle.id}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{bundle.title}</h3>
                    <p className="text-gray-300">{bundle.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-brand-gold">${bundle.price}</span>
                    <p className="text-green-400 text-sm font-semibold">{bundle.savings}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {bundle.id === "complete-collection" ? (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>All 10 title packages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>10+ hours of podcast content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>Complete PDF library</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>All infographics</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>Choose any 3 titles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>3+ hours of podcast content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                        <span>All included PDFs & guides</span>
                      </li>
                    </>
                  )}
                </ul>
                <button className="w-full bg-brand-gold text-brand-navy py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors">
                  Get {bundle.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-brand-light to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-brand-gold" />
            <Zap className="w-6 h-6 text-brand-gold" />
            <Sparkles className="w-6 h-6 text-brand-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Why Read When You Can Listen & Learn?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our AI-powered breakdowns transform dense classics into engaging conversations. 
            Perfect for commutes, workouts, or anytime learning.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
            <div>
              <p className="text-4xl font-bold text-brand-navy">20+</p>
              <p className="text-gray-600">Minutes per podcast</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy">10</p>
              <p className="text-gray-600">Classic titles</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-navy">$4.99</p>
              <p className="text-gray-600">Per package</p>
            </div>
          </div>
          <a 
            href="#titles"
            className="inline-block bg-brand-navy text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-navy/90 transition-colors"
          >
            Start Learning Today
          </a>
        </div>
      </section>
    </div>
  );
}
