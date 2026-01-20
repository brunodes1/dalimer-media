export interface Product {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  long_description: string;
  price: number;
  compareAtPrice: number;
  tags: string[];
  color_gradient: string;
  shopifyProductId: string;
  coverImage: string;
}

export const products: Product[] = [
  {
    id: "dm-01",
    slug: "don-quixote",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    description: "The original novel that invented modern fiction - a hilarious and heartbreaking tale of dreams vs reality.",
    long_description: "Cervantes' masterpiece follows an aging gentleman who loses his sanity from reading too many chivalric romances and sets out to revive knight-errantry. With his loyal squire Sancho Panza, Don Quixote's adventures satirize romantic idealism while celebrating the power of imagination and dreams.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Spanish Literature", "Satire", "Adventure"],
    color_gradient: "from-amber-700 to-amber-900",
    shopifyProductId: "15463048937545",
    coverImage: "/covers/don-quixote.png",
  },
  {
    id: "dm-02",
    slug: "tale-of-two-cities",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description: "Love, sacrifice, and revolution in the shadow of the guillotine.",
    long_description: "Set against the backdrop of the French Revolution, Dickens weaves a tale of resurrection and sacrifice. From the storming of the Bastille to the Reign of Terror, this epic follows characters whose fates intertwine across London and Paris in one of literature's greatest stories of redemption.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Historical Fiction", "Romance", "Revolution"],
    color_gradient: "from-red-800 to-gray-900",
    shopifyProductId: "15463049691209",
    coverImage: "/covers/tale-of-two-cities.png",
  },
  {
    id: "dm-03",
    slug: "alice-in-wonderland",
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    description: "Fall down the rabbit hole into a world where nothing is quite what it seems.",
    long_description: "Lewis Carroll's beloved tale follows young Alice as she tumbles into a fantastical underground world filled with peculiar creatures and nonsensical logic. From the Mad Hatter's tea party to the Queen of Hearts' croquet game, this timeless story delights readers with its wit, wordplay, and imagination.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Fantasy", "Children's Literature", "British"],
    color_gradient: "from-sky-400 to-purple-600",
    shopifyProductId: "15463050510409",
    coverImage: "/covers/alice-in-wonderland.png",
  },
  {
    id: "dm-04",
    slug: "count-of-monte-cristo",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    description: "The ultimate tale of betrayal, imprisonment, and elaborate revenge.",
    long_description: "Wrongfully imprisoned for fourteen years, Edmond Dantès escapes and discovers a vast treasure. Reinventing himself as the mysterious Count of Monte Cristo, he methodically destroys those who betrayed him. This epic adventure explores justice, mercy, and the consequences of vengeance.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Adventure", "French Literature", "Revenge"],
    color_gradient: "from-emerald-700 to-slate-900",
    shopifyProductId: "15463052607561",
    coverImage: "/covers/count-of-monte-cristo.png",
  },
  {
    id: "dm-05",
    slug: "anne-of-green-gables",
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    description: "An imaginative orphan transforms a quiet farm and the hearts of everyone she meets.",
    long_description: "When Matthew and Marilla Cuthbert accidentally adopt talkative, red-haired Anne Shirley instead of a boy, their lives change forever. Set on Prince Edward Island, this heartwarming story follows Anne's adventures, mishaps, and growth from an imaginative orphan to a beloved young woman.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Coming of Age", "Canadian Literature", "Family"],
    color_gradient: "from-green-600 to-amber-700",
    shopifyProductId: "15463066107977",
    coverImage: "/covers/anne-of-green-gables.png",
  },
  {
    id: "dm-06",
    slug: "black-beauty",
    title: "Black Beauty",
    author: "Anna Sewell",
    description: "The autobiography of a horse that changed how we treat animals forever.",
    long_description: "Narrated by the horse himself, Black Beauty's life journey from a happy colt to a London cab horse exposes the cruelty and kindness humans show to animals. This groundbreaking novel sparked real reform in animal welfare and remains a powerful plea for compassion toward all creatures.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Animals", "Social Commentary", "Victorian"],
    color_gradient: "from-stone-800 to-stone-950",
    shopifyProductId: "15463068041289",
    coverImage: "/covers/black-beauty.png",
  },
  {
    id: "dm-07",
    slug: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "The witty battle of wills between Elizabeth Bennet and Mr. Darcy.",
    long_description: "In Regency England, the spirited Elizabeth Bennet clashes with the proud Mr. Darcy, leading to one of literature's greatest love stories. Austen's sharp social commentary and brilliant dialogue create an unforgettable exploration of class, marriage, and the journey from prejudice to understanding.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Romance", "British Literature", "Social Commentary"],
    color_gradient: "from-teal-700 to-emerald-900",
    shopifyProductId: "15463068893257",
    coverImage: "/covers/pride-and-prejudice.png",
  },
  {
    id: "dm-08",
    slug: "frankenstein",
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "The original science fiction horror that asks: what makes us human?",
    long_description: "Victor Frankenstein's obsession with creating life leads to a creature rejected by society and consumed by loneliness. Mary Shelley's Gothic masterpiece explores ambition, responsibility, and the consequences of playing God—themes that resonate even more powerfully in our age of AI and genetic engineering.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Gothic", "Science Fiction", "Horror"],
    color_gradient: "from-gray-700 to-green-900",
    shopifyProductId: "15463071088713",
    coverImage: "/covers/frankenstein.png",
  },
  {
    id: "dm-09",
    slug: "jane-eyre",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description: "A plain governess, a brooding master, and a secret that changes everything.",
    long_description: "Orphaned Jane Eyre survives a cruel childhood to become governess at mysterious Thornfield Hall, where she falls for the enigmatic Mr. Rochester. This revolutionary novel gave voice to female independence and passion, creating a heroine who refuses to compromise her integrity for love.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Gothic", "Romance", "Feminist"],
    color_gradient: "from-rose-800 to-slate-800",
    shopifyProductId: "15463077314633",
    coverImage: "/covers/jane-eyre.png",
  },
  {
    id: "dm-10",
    slug: "dracula",
    title: "Dracula",
    author: "Bram Stoker",
    description: "The immortal vampire tale that defined the horror genre.",
    long_description: "When young solicitor Jonathan Harker visits Count Dracula's Transylvanian castle, he unleashes an ancient evil upon Victorian England. Told through letters, diaries, and newspaper clippings, Stoker's masterpiece established vampire mythology and continues to terrify readers over a century later.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Gothic", "Horror", "Victorian"],
    color_gradient: "from-red-900 to-black",
    shopifyProductId: "15463084949577",
    coverImage: "/covers/dracula.png",
  },
  {
    id: "dm-11",
    slug: "art-of-war",
    title: "The Art of War",
    author: "Sun Tzu",
    description: "Ancient wisdom on strategy that shapes business and leadership today.",
    long_description: "Written over 2,500 years ago, Sun Tzu's treatise on military strategy transcends warfare to offer timeless principles for competition, leadership, and conflict resolution. From 'know your enemy' to 'supreme excellence is winning without fighting,' these teachings guide modern executives, coaches, and strategists worldwide.",
    price: 14.99,
    compareAtPrice: 19.99,
    tags: ["Classic", "Philosophy", "Strategy", "Leadership"],
    color_gradient: "from-amber-600 to-red-800",
    shopifyProductId: "15463086391369",
    coverImage: "/covers/art-of-war.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
