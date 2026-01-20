"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { Check, Package, Sparkles, ArrowRight } from "lucide-react";

type BundleType = "3-pack" | "5-pack" | "complete";

export default function BundlesPage() {
  const [selectedBundle, setSelectedBundle] = useState<BundleType>("5-pack");
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const bundleConfig = {
    "3-pack": { count: 3, price: 34.99, originalPrice: 44.97, savings: 10 },
    "5-pack": { count: 5, price: 54.99, originalPrice: 74.95, savings: 20 },
    "complete": { count: 11, price: 99.99, originalPrice: 164.89, savings: 65 },
  };

  const currentBundle = bundleConfig[selectedBundle];
  const maxSelections = currentBundle.count;
  const isComplete = selectedBundle === "complete";

  const toggleTitle = (slug: string) => {
    if (isComplete) return;
    
    if (selectedTitles.includes(slug)) {
      setSelectedTitles(selectedTitles.filter((s) => s !== slug));
    } else if (selectedTitles.length < maxSelections) {
      setSelectedTitles([...selectedTitles, slug]);
    }
  };

  const handleBundleChange = (bundle: BundleType) => {
    setSelectedBundle(bundle);
    if (bundle === "complete") {
      setSelectedTitles(products.map((p) => p.slug));
    } else {
      setSelectedTitles([]);
    }
  };

  const canPurchase = isComplete || selectedTitles.length === maxSelections;

  const handlePurchase = () => {
    // TODO: Integrate with Shopify Buy Button
    // For now, show alert with selection
    const titles = selectedTitles.map(slug => 
      products.find(p => p.slug === slug)?.title
    ).join(", ");
    alert(`Bundle: ${selectedBundle}\nTitles: ${titles}\n\nShopify integration coming soon!`);
  };

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
            Build Your Own Bundle
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your favorite classics and save. The more you bundle, the more you save.
          </p>
        </div>
      </section>

      {/* Bundle Selector */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Bundle Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* 3-Pack */}
            <button
              onClick={() => handleBundleChange("3-pack")}
              className={`p-6 rounded-2xl text-left transition-all ${
                selectedBundle === "3-pack"
                  ? "bg-white ring-2 ring-brand-gold shadow-lg"
                  : "bg-white/50 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-brand-gold" />
                <h3 className="text-xl font-bold">3-Pack</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-brand-navy">$34.99</span>
                <span className="text-lg text-gray-400 line-through">$44.97</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-2">Save $10</p>
              <p className="text-sm text-gray-600">Pick any 3 titles from our collection</p>
            </button>

            {/* 5-Pack */}
            <button
              onClick={() => handleBundleChange("5-pack")}
              className={`p-6 rounded-2xl text-left transition-all relative ${
                selectedBundle === "5-pack"
                  ? "bg-white ring-2 ring-brand-gold shadow-lg"
                  : "bg-white/50 hover:bg-white"
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-brand-gold" />
                <h3 className="text-xl font-bold">5-Pack</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-brand-navy">$54.99</span>
                <span className="text-lg text-gray-400 line-through">$74.95</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-2">Save $20</p>
              <p className="text-sm text-gray-600">Pick any 5 titles from our collection</p>
            </button>

            {/* Complete */}
            <button
              onClick={() => handleBundleChange("complete")}
              className={`p-6 rounded-2xl text-left transition-all ${
                selectedBundle === "complete"
                  ? "bg-white ring-2 ring-brand-gold shadow-lg"
                  : "bg-white/50 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-brand-gold" />
                <h3 className="text-xl font-bold">Complete Collection</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-brand-navy">$99.99</span>
                <span className="text-lg text-gray-400 line-through">$164.89</span>
              </div>
              <p className="text-sm text-green-600 font-semibold mb-2">Save $65</p>
              <p className="text-sm text-gray-600">Get all 11 titles - best value!</p>
            </button>
          </div>

          {/* Title Selection */}
          {!isComplete && (
            <div className="bg-white rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  Select Your {maxSelections} Titles
                </h2>
                <span className={`text-lg font-semibold ${
                  selectedTitles.length === maxSelections ? "text-green-600" : "text-gray-500"
                }`}>
                  {selectedTitles.length} / {maxSelections} selected
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => {
                  const isSelected = selectedTitles.includes(product.slug);
                  const isDisabled = !isSelected && selectedTitles.length >= maxSelections;

                  return (
                    <button
                      key={product.id}
                      onClick={() => toggleTitle(product.slug)}
                      disabled={isDisabled}
                      className={`relative rounded-xl overflow-hidden transition-all ${
                        isSelected
                          ? "ring-2 ring-brand-gold shadow-lg"
                          : isDisabled
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-md"
                      }`}
                    >
                      <div className="aspect-[3/4] relative bg-gray-50">
                        <Image
                          src={product.coverImage}
                          alt={product.title}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-brand-gold/20 flex items-center justify-center">
                            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                              <Check className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-white">
                        <p className="font-semibold text-sm truncate">{product.title}</p>
                        <p className="text-xs text-gray-500 truncate">{product.author}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Complete Collection Display */}
          {isComplete && (
            <div className="bg-white rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">All 11 Titles Included</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="text-center">
                    <div className="aspect-[3/4] relative bg-gray-50 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={product.coverImage}
                        alt={product.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 50vw, 16vw"
                      />
                      <div className="absolute top-2 right-2 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-xs font-semibold truncate">{product.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Purchase Summary */}
          <div className="bg-white rounded-2xl p-6 sticky bottom-4 shadow-lg border-2 border-brand-navy">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {selectedBundle === "3-pack" && "3-Pack Bundle"}
                  {selectedBundle === "5-pack" && "5-Pack Bundle"}
                  {selectedBundle === "complete" && "Complete Collection"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isComplete 
                    ? "All 11 titles • 88 total files"
                    : `${selectedTitles.length} of ${maxSelections} titles selected • ${selectedTitles.length * 8} files`
                  }
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500 line-through">${currentBundle.originalPrice}</p>
                  <p className="text-3xl font-bold text-brand-navy">${currentBundle.price}</p>
                  <p className="text-sm text-green-600 font-semibold">Save ${currentBundle.savings}</p>
                </div>
                
                <button
                  onClick={handlePurchase}
                  disabled={!canPurchase}
                  className={`px-8 py-4 rounded-xl font-bold transition-colors inline-flex items-center gap-2 ${
                    canPurchase
                      ? "bg-brand-gold text-brand-navy hover:bg-yellow-400"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {canPurchase ? (
                    <>
                      Buy Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  ) : (
                    `Select ${maxSelections - selectedTitles.length} more`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Each Title Includes 8 Files</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="p-4">
              <div className="text-2xl mb-2">🎧</div>
              <p className="font-semibold">Audio Conversation</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🎬</div>
              <p className="font-semibold">Video Overview</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📊</div>
              <p className="font-semibold">Infographic</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📄</div>
              <p className="font-semibold">Detailed Report</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📽️</div>
              <p className="font-semibold">Slide Deck</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📖</div>
              <p className="font-semibold">Original Text</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🖼️</div>
              <p className="font-semibold">Cover Art</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📋</div>
              <p className="font-semibold">Summary Guide</p>
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
