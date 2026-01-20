import { products } from "@/lib/products";
import { Headphones, FileText, ImageIcon, ArrowLeft, Video, BookOpen, Presentation, Image, FileType, Package, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { ShopifyBuyButton } from "@/components/ShopifyBuyButton";

export const metadata = {
  title: "Complete Collection - All 11 Titles | DM Intermedia",
  description: "Get all 11 classic literature packages and save $65. Includes 88 files: audio conversations, video overviews, infographics, reports, and more.",
  openGraph: {
    title: "Complete Collection - All 11 Classic Literature Packages",
    description: "Get all 11 classic literature packages and save $65. Includes 88 files total.",
  },
};

export default function CompleteCollectionPage() {
  const packageIcons = [
    { name: "Audio Conversation", icon: Headphones, desc: "Podcast-style discussion" },
    { name: "Video Overview", icon: Video, desc: "Visual presentation" },
    { name: "Infographic", icon: Image, desc: "Visual summary" },
    { name: "Detailed Report", icon: FileText, desc: "In-depth analysis" },
    { name: "Slide Deck", icon: Presentation, desc: "Presentation slides" },
    { name: "Original Text", icon: BookOpen, desc: "Complete source text" },
    { name: "Cover Art", icon: ImageIcon, desc: "High-quality artwork" },
    { name: "Summary Guide", icon: FileType, desc: "Quick reference" },
  ];

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-brand-light py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/bundles" 
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Bundles
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-brand-navy to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Best Value - Save $65
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              All 11 classic literature packages in one bundle. 88 total files including audio, video, infographics, and study materials.
            </p>
          </div>

          {/* All Book Covers Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2 md:gap-3 mb-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="aspect-[3/4] relative bg-white/10 rounded-lg overflow-hidden">
                  <NextImage
                    src={product.coverImage}
                    alt={product.title}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16vw, 9vw"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-navy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-brand-navy rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Details */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-10 h-10 text-brand-gold" />
                  <div>
                    <h2 className="text-2xl font-bold">Complete Collection</h2>
                    <p className="text-gray-500">All 11 titles included</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span><strong>88 files</strong> total (8 per title)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span><strong>Instant download</strong> after purchase</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span><strong>Lifetime access</strong> to all materials</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span><strong>$65 savings</strong> vs. buying individually</span>
                  </li>
                </ul>
              </div>
              
              {/* Right: Price & Buy */}
              <div className="text-center md:text-right">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Complete Package</p>
                  <div className="flex items-baseline justify-center md:justify-end gap-2">
                    <span className="text-5xl font-bold text-brand-navy">$99.99</span>
                    <span className="text-xl text-gray-400 line-through">$164.89</span>
                  </div>
                  <p className="text-green-600 font-semibold mt-1">Save $65 (40% off)</p>
                </div>
                
                {/* Shopify Buy Button */}
                <div className="mb-4">
                  <ShopifyBuyButton 
                    shopifyProductId="15463088193609"
                    buttonText="Buy Complete Collection - $99.99"
                  />
                </div>
                
                <p className="text-sm text-gray-500">
                  ✓ Secure checkout via Shopify
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Per Title */}
      <section className="py-12 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">What&apos;s Included</h2>
          <p className="text-gray-600 text-center mb-8">Each of the 11 titles comes with these 8 files</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {packageIcons.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 p-4 bg-white rounded-xl">
            <p className="text-lg">
              <span className="font-bold text-brand-navy">11 titles</span> × <span className="font-bold text-brand-navy">8 files each</span> = <span className="font-bold text-brand-gold text-xl">88 total files</span>
            </p>
          </div>
        </div>
      </section>

      {/* All Titles List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">All 11 Titles Included</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/titles/${product.slug}`}
                className="flex gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-20 h-28 relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                  <NextImage
                    src={product.coverImage}
                    alt={product.title}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold group-hover:text-brand-gold transition-colors truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{product.author}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-brand-light px-2 py-0.5 rounded-full">
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

      {/* CTA Section */}
      <section className="py-12 px-6 bg-brand-navy text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore the Classics?</h2>
          <p className="text-gray-300 mb-6">
            Get instant access to all 11 titles and 88 files for just $99.99
          </p>
          <ShopifyBuyButton 
            shopifyProductId="15463088193609"
            buttonText="Get Complete Collection - $99.99"
          />
          <p className="text-sm text-gray-400 mt-4">
            Or <Link href="/bundles" className="text-brand-gold hover:underline">build your own bundle</Link> starting at $34.99
          </p>
        </div>
      </section>
    </div>
  );
}
