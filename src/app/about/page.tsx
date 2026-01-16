import { BookOpen, Headphones, Lightbulb, Zap } from "lucide-react";

export const metadata = {
  title: "About - Dalimer Media",
  description: "Learn about Dalimer Media and our mission to make classic literature accessible through modern formats.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-cream to-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-brand-gold">Dalimer</span> Media
          </h1>
          <p className="text-xl text-gray-600">
            We transform the world&apos;s greatest literature into modern learning experiences.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Classic literature contains timeless wisdom, but dense 19th-century prose can be a barrier 
            to modern readers. We believe everyone deserves access to the ideas that shaped civilization.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Using cutting-edge AI technology, we transform public domain masterworks into engaging 
            podcasts, visual guides, and study materials. Our goal is to make learning from the 
            classics as easy as listening to your favorite podcast.
          </p>
          <p className="text-lg text-gray-700">
            Whether you&apos;re a student, lifelong learner, or simply curious about the books 
            everyone references but few have read — we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational Format</h3>
              <p className="text-gray-600">
                Our AI podcasts aren&apos;t dry audiobooks. They&apos;re engaging conversations that 
                break down complex ideas into digestible discussions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Packages</h3>
              <p className="text-gray-600">
                Every title includes audio, study guides, infographics, and FAQs. 
                Everything you need to truly understand and remember the material.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Insights</h3>
              <p className="text-gray-600">
                We connect ancient wisdom to modern applications. Learn how Stoicism 
                applies to your career or how Sun Tzu informs business strategy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Access</h3>
              <p className="text-gray-600">
                Download immediately after purchase. Start learning on your commute, 
                during your workout, or wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our collection of 10 classic titles, each transformed into a 
            complete learning package.
          </p>
          <a 
            href="/#titles"
            className="inline-block bg-brand-navy text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-brand-navy/90 transition-colors"
          >
            Explore All Titles
          </a>
        </div>
      </section>
    </div>
  );
}
