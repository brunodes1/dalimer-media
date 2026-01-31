import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DM Intermedia | Coming Soon",
  description: "DM Intermedia - Classic Literature, Modern Learning. Premium educational content packages coming soon.",
};

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 bg-brand-navy text-white flex flex-col items-center justify-center p-8 text-center z-[100]">
      <main className="max-w-xl w-full">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-wide mb-2">
          DM <span className="text-brand-gold">Intermedia</span>
        </h1>
        <p className="text-lg md:text-xl font-medium uppercase tracking-[0.3em] text-brand-gold mb-10">
          Coming Soon
        </p>
        
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-10"></div>
        
        <p className="font-serif text-xl md:text-2xl font-semibold mb-4">
          Classic Literature, Modern Learning
        </p>
        <p className="text-base leading-relaxed text-white/85 mb-12">
          Premium educational content packages that transform timeless literary works 
          into engaging multimedia experiences for todays learners.
        </p>
        
        <p className="text-sm text-white/70">
          Questions? Contact us at{" "}
          <a 
            href="mailto:admin@dmintermedia.com" 
            className="text-brand-gold font-medium hover:opacity-80 hover:underline transition-opacity"
          >
            admin@dmintermedia.com
          </a>
        </p>
      </main>
      
      <footer className="mt-16 text-xs text-white/50">
        <p>DM Intermedia is a trademark of Dalimer Corporation, used under license by Dalimer Outsourcing Inc.</p>
      </footer>
    </div>
  );
}
