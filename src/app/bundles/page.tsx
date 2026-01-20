"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { Package, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

const bundles = [
  {
    id: "3-pack",
    name: "3-Pack Bundle",
    price: 34.99,
    originalPrice: 44.97,
    savings: 10,
    description: "Pick any 3 titles from our collection",
    url: "https://dm-intermedia.myshopify.com/a/bundles/3-pack-bundle-g8nr",
    badge: null,
  },
  {
    id: "5-pack",
    name: "5-Pack Bundle",
    price: 54.99,
    originalPrice: 74.95,
    savings: 20,
    description: "Pick any 5 titles from our collection",
    url: "https://dm-intermedia.myshopify.com/a/bundles/5-pack-bundle-g8nt",
    badge: "MOST POPULAR",
  },
  {
    id: "complete",
    name: "Complete Collection",
    price: 99.99,
    originalPrice: 164.89,
    savings: 65,
    description: "Get all 11 titles - best value!",
    url: "/products/complete-collection",
    badge: "BEST VALUE",
  },
];

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Save Up to 40%
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bundle & Save
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your favorite classics and save. The more you bundle, the more you save.
          </p>
        </div>
      </section>

      {/* Bundle Options */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {bundle.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                    {bundle.badge}
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold">{bundle.name}</h3>
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-brand-navy">${bundle.price}</span>
                  <span className="text-lg text-gray-400 line-through">${bundle.originalPrice}</span>
                </div>
                
                <p className="text-sm text-green-600 font-semibold mb-2">Save ${bundle.savings}</p>
                <p className="text-sm text-gray-600 mb-6">{bundle.description}</p>
                
                <a
                  href={bundle.url}
                  target={bundle.id !== "complete" ? "_blank" : "_self"}
                  rel={bundle.id !== "complete" ? "noopener noreferrer" : undefined}
                  className="w-full bg-brand-gold text-brand-navy py-3 px-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  {bundle.id === "complete" ? "Buy Now" : "Build Your Bundle"}
                  {bundle.id !== "complete" ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* All Titles Preview */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-2 text-center">Available Titles</h2>
            <p className="text-gray-600 text-center mb-6">Choose from these 11 classic literature packages</p>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/titles/${product.slug}`}
                  className="group text-center"
                >
                  <div className="aspect-[3/4] relative bg-gray-50 rounded-lg overflow-hidden mb-2 group-hover:shadow-md transition-shadow">
                    <Image
                      src={product.coverImage}
                      alt={product.title}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 9vw"
                    />
                  </div>
                  <p className="text-xs font-medium truncate group-hover:text-brand-gold transition-colors">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Each Title Includes 8 Files</h2>
          <p className="text-gray-600 mb-8">Everything you need to engage with these classics</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">🎧</div>
              <p className="font-semibold">Audio Conversation</p>
              <p className="text-xs text-gray-500">AI-powered discussion</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">🎬</div>
              <p className="font-semibold">Video Overview</p>
              <p className="text-xs text-gray-500">Visual summary</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">📊</div>
              <p className="font-semibold">Infographic</p>
              <p className="text-xs text-gray-500">Key themes visualized</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">📄</div>
              <p className="font-semibold">Detailed Report</p>
              <p className="text-xs text-gray-500">Deep analysis</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">📽️</div>
              <p className="font-semibold">Slide Deck</p>
              <p className="text-xs text-gray-500">Presentation ready</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">📖</div>
              <p className="font-semibold">Original Text</p>
              <p className="text-xs text-gray-500">Public domain classic</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">🖼️</div>
              <p className="font-semibold">Cover Art</p>
              <p className="text-xs text-gray-500">Original artwork</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl">
              <div className="text-2xl mb-2">📋</div>
              <p className="font-semibold">Summary Guide</p>
              <p className="text-xs text-gray-500">Quick reference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Titles */}
      <section className="py-12 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Want to buy individual titles?</p>
          <Link
            href="/#titles"
            className="text-brand-navy font-semibold hover:text-brand-gold transition-colors inline-flex items-center gap-2"
          >
            Browse All Titles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
