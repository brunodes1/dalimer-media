// Product data - matches Shopify store
// DM Intermedia Classic Literature Collection

export interface Product {
  id: string;
  slug: string;
  shopifyProductId: string;
  title: string;
  author: string;
  description: string;
  long_description: string;
  price: number;
  compareAtPrice: number;
  color_gradient: string;
  tags: string[];
  includes: string[];
}

export const SHOPIFY_CONFIG = {
  domain: 'jedbci-wm.myshopify.com',
  storefrontAccessToken: '82abae13d510e20cdafcd3ac827252e9',
};

export const products: Product[] = [
  {
    id: "don-quixote",
    slug: "don-quixote",
    shopifyProductId: "15463048937545",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description: "The first modern novel and greatest work of Spanish literature. Follow the adventures of a delusional knight and his faithful squire.",
    long_description: "Cervantes' masterpiece follows an aging gentleman who loses his sanity from reading too many chivalric romances and sets out to revive knight-errantry. With his loyal squire Sancho Panza, Don Quixote's adventures satirize romantic idealism while celebrating the power of imagination and dreams.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-amber-700 to-orange-900",
    tags: ["Classic", "Spanish Literature", "Satire", "Adventure"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "tale-of-two-cities",
    slug: "tale-of-two-cities",
    shopifyProductId: "15463049691209",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description: "The best-selling novel of all time. A story of love, sacrifice, and resurrection set during the French Revolution.",
    long_description: "Dickens' historical masterpiece weaves between London and Paris during the turbulent years of the French Revolution. Through unforgettable characters like Sydney Carton and Charles Darnay, it explores themes of resurrection, sacrifice, and the possibility of redemption in the darkest times.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-red-800 to-red-950",
    tags: ["Classic", "Historical Fiction", "British Literature", "Revolution"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "alice-in-wonderland",
    slug: "alice-in-wonderland",
    shopifyProductId: "15463050510409",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description: "Down the rabbit hole into a world of wonder, wordplay, and surreal wisdom that has captivated readers for generations.",
    long_description: "Lewis Carroll's mathematical mind created a wonderland of logic puzzles, linguistic playfulness, and philosophical depth disguised as a children's story. Follow Alice through a world where nothing is quite what it seems and every character speaks in riddles.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-sky-500 to-indigo-600",
    tags: ["Classic", "Fantasy", "Children's Literature", "Surreal"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "count-of-monte-cristo",
    slug: "count-of-monte-cristo",
    shopifyProductId: "15463052607561",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    description: "The ultimate tale of betrayal, imprisonment, and elaborate revenge. A wronged man's transformation into an instrument of fate.",
    long_description: "Dumas' epic adventure follows Edmond Dantès from wrongful imprisonment to his emergence as the wealthy Count of Monte Cristo. Armed with a vast fortune and burning desire for justice, he methodically confronts those who destroyed his life in this timeless exploration of vengeance and redemption.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-slate-700 to-slate-900",
    tags: ["Classic", "Adventure", "French Literature", "Revenge"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "anne-of-green-gables",
    slug: "anne-of-green-gables",
    shopifyProductId: "15463066107977",
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    description: "The beloved story of an imaginative orphan who transforms a quiet farm and everyone she meets with her irrepressible spirit.",
    long_description: "When Matthew and Marilla Cuthbert adopt red-haired, talkative Anne Shirley by mistake, their quiet lives at Green Gables are forever changed. Montgomery's beloved novel celebrates imagination, friendship, and finding where you belong.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-green-600 to-emerald-800",
    tags: ["Classic", "Coming-of-Age", "Canadian Literature", "Family"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "black-beauty",
    slug: "black-beauty",
    shopifyProductId: "15463068041289",
    title: "Black Beauty",
    author: "Anna Sewell",
    description: "The autobiography of a horse that changed how the world treats animals. A timeless story of kindness and compassion.",
    long_description: "Told from the perspective of a horse, Sewell's only novel follows Black Beauty through various owners—kind and cruel—in Victorian England. This groundbreaking work sparked animal welfare reforms and remains a powerful plea for compassion toward all creatures.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-stone-700 to-stone-900",
    tags: ["Classic", "Animals", "Victorian", "Social Commentary"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "pride-and-prejudice",
    slug: "pride-and-prejudice",
    shopifyProductId: "15463068893257",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "The original enemies-to-lovers romance that defined the genre. Wit, social commentary, and Mr. Darcy await.",
    long_description: "Jane Austen's masterpiece of wit, social commentary, and swoon-worthy romance has captivated readers for over 200 years. Follow Elizabeth Bennet as she navigates society, family, and her complicated feelings for the proud Mr. Darcy.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-pink-500 to-rose-700",
    tags: ["Classic", "Romance", "British Literature", "Social Commentary"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "frankenstein",
    slug: "frankenstein",
    shopifyProductId: "15463071088713",
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "A 19-year-old invented science fiction. The real story is darker and more profound than any movie adaptation.",
    long_description: "Mary Shelley's groundbreaking novel explores creation, responsibility, and what it means to be human. Victor Frankenstein's ambitious experiment and its tragic consequences raise questions about science and ethics that remain urgently relevant today.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-emerald-700 to-emerald-900",
    tags: ["Classic", "Gothic", "Horror", "Science Fiction"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "jane-eyre",
    slug: "jane-eyre",
    shopifyProductId: "15463077314633",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description: "The revolutionary tale of a woman who demanded equality in love. Gothic romance meets feminist manifesto.",
    long_description: "Charlotte Brontë's passionate masterpiece follows the orphaned Jane from a cruel childhood to her position as governess at mysterious Thornfield Hall. Her relationship with the brooding Mr. Rochester challenges every convention of Victorian society.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-purple-700 to-purple-900",
    tags: ["Classic", "Gothic", "Romance", "Feminist"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "dracula",
    slug: "dracula",
    shopifyProductId: "15463084949577",
    title: "Dracula",
    author: "Bram Stoker",
    description: "The novel that created the modern vampire. Every adaptation got something wrong—here's the terrifying original.",
    long_description: "Bram Stoker's epistolary masterpiece defined vampire mythology for generations. Through journals, letters, and newspaper clippings, experience the Count's invasion of England and the desperate band of heroes who must stop him.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-red-900 to-black",
    tags: ["Classic", "Gothic", "Horror", "Vampire"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  },
  {
    id: "art-of-war",
    slug: "art-of-war",
    shopifyProductId: "15463086391369",
    title: "The Art of War",
    author: "Sun Tzu",
    description: "The 2,500-year-old strategy manual that every business leader, coach, and entrepreneur still quotes today.",
    long_description: "Sun Tzu's ancient Chinese military treatise has become essential reading for anyone engaged in strategic competition. Its principles on leadership, planning, and winning without fighting apply to business, sports, and life itself.",
    price: 14.99,
    compareAtPrice: 19.99,
    color_gradient: "from-red-700 to-red-900",
    tags: ["Classic", "Strategy", "Leadership", "Philosophy"],
    includes: ["Audio Conversation", "Video Overview", "Infographic", "Detailed Report", "Slide Deck", "Original Text", "Cover Art", "Summary Guide"]
  }
];

export const bundles = [
  { 
    id: "three-pack", 
    title: "Choose Any 3 Titles", 
    price: 34.99, 
    savings: "Save $10", 
    description: "Pick your three favorite classics" 
  },
  { 
    id: "complete-collection", 
    title: "Complete Collection", 
    price: 99.99, 
    savings: "Save $65", 
    description: "All 11 titles - best value" 
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
