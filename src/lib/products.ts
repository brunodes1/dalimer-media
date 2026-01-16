// Product data - matches Supabase schema
// Used for static generation and as fallback

export interface Product {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  long_description: string;
  price: number;
  color_gradient: string;
  tags: string[];
  includes: string[];
  podcast_url?: string;
  pdf_url?: string;
}

export const products: Product[] = [
  {
    id: "bible-kjv",
    slug: "bible-kjv",
    title: "The Bible (KJV)",
    author: "Various Authors",
    description: "The world's most influential text, transformed into an engaging podcast conversation with comprehensive study materials.",
    long_description: "Experience the King James Version of the Bible like never before. Our AI-powered podcast breaks down key books, themes, and teachings into digestible conversations. Perfect for daily devotionals, Bible study groups, or personal spiritual growth.",
    price: 4.99,
    color_gradient: "from-amber-600 to-amber-800",
    tags: ["Faith", "Spirituality", "Self-Help"],
    includes: ["20+ minute AI podcast conversation", "Book-by-book study guide PDF", "Key themes infographic", "Discussion questions for groups", "Quick reference FAQ"]
  },
  {
    id: "meditations",
    slug: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    description: "The Roman Emperor's private journal of Stoic philosophy - the original self-help book that every CEO reads.",
    long_description: "Written nearly 2,000 years ago, Marcus Aurelius's personal notes to himself remain the most powerful guide to self-mastery ever written. Our podcast format makes ancient Stoic wisdom accessible and actionable for modern life.",
    price: 4.99,
    color_gradient: "from-slate-600 to-slate-800",
    tags: ["Philosophy", "Stoicism", "Self-Improvement"],
    includes: ["25-minute AI podcast deep dive", "Key Stoic principles PDF guide", "Daily practices infographic", "Modern applications worksheet", "Quote collection with context"]
  },
  {
    id: "art-of-war",
    slug: "art-of-war",
    title: "The Art of War",
    author: "Sun Tzu",
    description: "The 2,500-year-old strategy manual that every business leader, coach, and entrepreneur still quotes today.",
    long_description: "Sun Tzu's ancient Chinese military treatise has become the foundational text for competitive strategy in business, sports, and life. Our podcast translates battlefield wisdom into practical principles for modern success.",
    price: 4.99,
    color_gradient: "from-red-700 to-red-900",
    tags: ["Strategy", "Business", "Leadership"],
    includes: ["20-minute strategic breakdown podcast", "Chapter-by-chapter analysis PDF", "Business applications guide", "Key principles infographic", "Competitive strategy worksheet"]
  },
  {
    id: "pride-and-prejudice",
    slug: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "The original enemies-to-lovers romance that defined the genre. Mr. Darcy awaits.",
    long_description: "Jane Austen's masterpiece of wit, social commentary, and swoon-worthy romance has captivated readers for over 200 years. Our podcast brings Elizabeth Bennet and Mr. Darcy's story to life with fresh insights and analysis.",
    price: 4.99,
    color_gradient: "from-pink-500 to-rose-700",
    tags: ["Romance", "Classic Literature", "BookTok"],
    includes: ["30-minute romantic journey podcast", "Character analysis guide", "Regency era context PDF", "Relationship dynamics infographic", "Discussion questions for book clubs"]
  },
  {
    id: "frankenstein",
    slug: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "A 19-year-old invented science fiction. The real story is darker and more profound than any movie.",
    long_description: "Mary Shelley's groundbreaking novel explores creation, responsibility, and what it means to be human. Our podcast dives deep into the philosophical questions that made this the most downloaded book on Project Gutenberg.",
    price: 4.99,
    color_gradient: "from-emerald-700 to-emerald-900",
    tags: ["Horror", "Science Fiction", "Gothic"],
    includes: ["25-minute podcast exploration", "Themes and symbolism guide", "Historical context PDF", "Character relationship map", "Science and ethics discussion guide"]
  },
  {
    id: "dracula",
    slug: "dracula",
    title: "Dracula",
    author: "Bram Stoker",
    description: "The novel that created the vampire genre. Every adaptation got something wrong - here's the original.",
    long_description: "Bram Stoker's epistolary masterpiece defined vampire mythology for generations. Our podcast reveals the sophisticated horror, Victorian anxieties, and literary craftsmanship that movies can't capture.",
    price: 4.99,
    color_gradient: "from-purple-800 to-purple-950",
    tags: ["Horror", "Gothic", "Vampire"],
    includes: ["30-minute atmospheric podcast", "Vampire lore origins guide", "Victorian context PDF", "Character timeline infographic", "Horror elements analysis"]
  },
  {
    id: "wizard-of-oz",
    slug: "wizard-of-oz",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    description: "The American fairy tale that became a cultural phenomenon. The book has secrets the movie never showed.",
    long_description: "L. Frank Baum's beloved fantasy introduced Dorothy, the Scarecrow, Tin Man, and Cowardly Lion to the world. Our podcast explores the deeper themes of home, courage, and self-discovery hidden within this classic tale.",
    price: 4.99,
    color_gradient: "from-emerald-500 to-teal-600",
    tags: ["Fantasy", "Family", "Classic"],
    includes: ["20-minute magical journey podcast", "Symbolism and allegory guide", "Character development PDF", "Yellow brick road infographic", "Family discussion guide"]
  },
  {
    id: "christmas-carol",
    slug: "christmas-carol",
    title: "A Christmas Carol",
    author: "Charles Dickens",
    description: "Scrooge's transformation invented the modern Christmas. A timeless story of redemption.",
    long_description: "Charles Dickens's ghost story transformed how the Western world celebrates Christmas. Our podcast captures the warmth, terror, and ultimate hope of Scrooge's journey from miser to benefactor.",
    price: 4.99,
    color_gradient: "from-green-600 to-red-700",
    tags: ["Holiday", "Classic", "Redemption"],
    includes: ["25-minute festive podcast", "Victorian Christmas context PDF", "Character transformation guide", "Themes infographic", "Holiday reflection questions"]
  },
  {
    id: "sherlock-holmes",
    slug: "sherlock-holmes",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description: "The world's greatest detective in his original cases. Elementary, my dear listener.",
    long_description: "Arthur Conan Doyle's brilliant detective stories established the mystery genre as we know it. Our podcast breaks down Holmes's deductive methods and the ingenious plots that have captivated readers for over a century.",
    price: 4.99,
    color_gradient: "from-stone-600 to-stone-800",
    tags: ["Mystery", "Detective", "Classic"],
    includes: ["30-minute case analysis podcast", "Deduction methods guide", "Case summaries PDF", "Baker Street infographic", "Mystery-solving worksheet"]
  },
  {
    id: "alice-wonderland",
    slug: "alice-wonderland",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description: "Down the rabbit hole into a world of wonder, wordplay, and surreal wisdom.",
    long_description: "Lewis Carroll's mathematical mind created a wonderland of logic puzzles, linguistic playfulness, and philosophical depth disguised as a children's story. Our podcast reveals the genius hiding in plain sight.",
    price: 4.99,
    color_gradient: "from-sky-500 to-indigo-600",
    tags: ["Fantasy", "Surreal", "Classic"],
    includes: ["25-minute curious podcast", "Symbolism decoder PDF", "Character guide with quotes", "Wonderland map infographic", "Logic puzzles worksheet"]
  }
];

export const bundles = [
  { id: "three-pack", title: "Choose Any 3 Titles", price: 9.99, savings: "Save $5", description: "Pick your three favorite classics" },
  { id: "complete-collection", title: "Complete Collection", price: 29.99, savings: "Save $20", description: "All 10 titles - best value" }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
