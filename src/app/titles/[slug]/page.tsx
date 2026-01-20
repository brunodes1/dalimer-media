import { products, getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { Headphones, FileText, ImageIcon, ArrowLeft, Video, BookOpen, Presentation, Image, FileType } from "lucide-react";
import Link from "next/link";
import { ShopifyBuyButton } from "@/components/ShopifyBuyButton";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} - DM Intermedia`,
    description: product.description,
    openGraph: {
      title: `${product.title} - Complete Digital Collection`,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

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
            href="/#titles" 
            className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Titles
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image/Visual */}
            <div>
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${product.color_gradient} flex items-center justify-center shadow-2xl`}>
                <div className="text-center text-white">
                  <span className="text-8xl font-serif font-bold opacity-40">
                    {product.title.charAt(0)}
                  </span>
                  <p className="text-xl font-semibold mt-4 opacity-80">{product.title}</p>
                </div>
              </div>
              
              {/* Audio Preview Placeholder */}
              <div className="mt-6 bg-brand-light rounded-xl p-4">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Headphones className="w-4 h-4" />
                  Audio Preview
                </p>
                <div className="bg-white rounded-lg p-4 text-center text-gray-500">
                  <p className="text-sm">🎧 Sample audio coming soon</p>
                  <p className="text-xs mt-1">Full 20-30 min podcast included with purchase</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-brand-gold/20 text-brand-navy text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
              <p className="text-xl text-gray-500 mb-6">by {product.author}</p>
              
              <p className="text-lg text-gray-700 mb-8">
                {product.long_description}
              </p>

              {/* Price & Buy */}
              <div className="bg-white border-2 border-brand-navy rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Complete Package</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-bold text-brand-navy">${product.price}</p>
                      <p className="text-lg text-gray-400 line-through">${product.compareAtPrice}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold">Instant Download</p>
                    <p className="text-sm text-gray-500">8 files included</p>
                  </div>
                </div>
                
                {/* Shopify Buy Button */}
                <div className="mb-4">
                  <ShopifyBuyButton 
                    shopifyProductId={product.shopifyProductId}
                    buttonText={`Buy Now - $${product.price}`}
                  />
                </div>
                
                {/* Trust Signals */}
                <div className="flex justify-center gap-6 text-sm text-gray-500 mt-4">
                  <span>✓ Instant access</span>
                  <span>✓ Secure payment</span>
                  <span>✓ 8 file formats</span>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="font-bold text-lg mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {packageIcons.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Your Complete Learning Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-bold mb-2">AI Podcast</h3>
              <p className="text-gray-600 text-sm">
                Engaging conversation format that makes complex ideas accessible and entertaining
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-bold mb-2">Study Guide</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive PDF with summaries, key themes, and discussion questions
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-bold mb-2">Visual Guide</h3>
              <p className="text-gray-600 text-sm">
                Infographic with character maps, timelines, or concept visualizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link 
                key={related.id}
                href={`/titles/${related.slug}`}
                className="product-card bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className={`h-24 bg-gradient-to-br ${related.color_gradient}`} />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{related.title}</h3>
                      <p className="text-sm text-gray-500">{related.author}</p>
                    </div>
                    <span className="bg-brand-gold text-brand-navy text-sm font-bold px-2 py-1 rounded">
                      ${related.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
