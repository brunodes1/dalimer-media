-- Dalimer Media Database Setup
-- Run this in Supabase SQL Editor (https://nxmojghmsafcvjuzniqd.supabase.co)

-- Drop existing tables if they exist (careful in production!)
DROP TABLE IF EXISTS downloads CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL DEFAULT 4.99,
  color_gradient VARCHAR(100) NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  includes TEXT[] NOT NULL DEFAULT '{}',
  podcast_url TEXT,
  pdf_url TEXT,
  shopify_product_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  product_ids UUID[] NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  stripe_session_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Downloads table (for tracking/expiring download links)
CREATE TABLE downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  download_token VARCHAR(255) UNIQUE NOT NULL,
  download_count INTEGER DEFAULT 0,
  max_downloads INTEGER DEFAULT 5,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Products are publicly readable
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

-- Orders are only viewable by the email owner (simplified - in production use auth)
CREATE POLICY "Orders viewable by email" ON orders
  FOR SELECT USING (true);

-- Downloads are publicly accessible (token-based security)
CREATE POLICY "Downloads accessible by token" ON downloads
  FOR SELECT USING (true);

-- Insert all 10 products
INSERT INTO products (slug, title, author, description, long_description, price, color_gradient, tags, includes) VALUES
(
  'bible-kjv',
  'The Bible (KJV)',
  'Various Authors',
  'The world''s most influential text, transformed into an engaging podcast conversation with comprehensive study materials.',
  'Experience the King James Version of the Bible like never before. Our AI-powered podcast breaks down key books, themes, and teachings into digestible conversations. Perfect for daily devotionals, Bible study groups, or personal spiritual growth.',
  4.99,
  'from-amber-600 to-amber-800',
  ARRAY['Faith', 'Spirituality', 'Self-Help'],
  ARRAY['20+ minute AI podcast conversation', 'Book-by-book study guide PDF', 'Key themes infographic', 'Discussion questions for groups', 'Quick reference FAQ']
),
(
  'meditations',
  'Meditations',
  'Marcus Aurelius',
  'The Roman Emperor''s private journal of Stoic philosophy - the original self-help book that every CEO reads.',
  'Written nearly 2,000 years ago, Marcus Aurelius''s personal notes to himself remain the most powerful guide to self-mastery ever written. Our podcast format makes ancient Stoic wisdom accessible and actionable for modern life.',
  4.99,
  'from-slate-600 to-slate-800',
  ARRAY['Philosophy', 'Stoicism', 'Self-Improvement'],
  ARRAY['25-minute AI podcast deep dive', 'Key Stoic principles PDF guide', 'Daily practices infographic', 'Modern applications worksheet', 'Quote collection with context']
),
(
  'art-of-war',
  'The Art of War',
  'Sun Tzu',
  'The 2,500-year-old strategy manual that every business leader, coach, and entrepreneur still quotes today.',
  'Sun Tzu''s ancient Chinese military treatise has become the foundational text for competitive strategy in business, sports, and life. Our podcast translates battlefield wisdom into practical principles for modern success.',
  4.99,
  'from-red-700 to-red-900',
  ARRAY['Strategy', 'Business', 'Leadership'],
  ARRAY['20-minute strategic breakdown podcast', 'Chapter-by-chapter analysis PDF', 'Business applications guide', 'Key principles infographic', 'Competitive strategy worksheet']
),
(
  'pride-and-prejudice',
  'Pride and Prejudice',
  'Jane Austen',
  'The original enemies-to-lovers romance that defined the genre. Mr. Darcy awaits.',
  'Jane Austen''s masterpiece of wit, social commentary, and swoon-worthy romance has captivated readers for over 200 years. Our podcast brings Elizabeth Bennet and Mr. Darcy''s story to life with fresh insights and analysis.',
  4.99,
  'from-pink-500 to-rose-700',
  ARRAY['Romance', 'Classic Literature', 'BookTok'],
  ARRAY['30-minute romantic journey podcast', 'Character analysis guide', 'Regency era context PDF', 'Relationship dynamics infographic', 'Discussion questions for book clubs']
),
(
  'frankenstein',
  'Frankenstein',
  'Mary Shelley',
  'A 19-year-old invented science fiction. The real story is darker and more profound than any movie.',
  'Mary Shelley''s groundbreaking novel explores creation, responsibility, and what it means to be human. Our podcast dives deep into the philosophical questions that made this the most downloaded book on Project Gutenberg.',
  4.99,
  'from-emerald-700 to-emerald-900',
  ARRAY['Horror', 'Science Fiction', 'Gothic'],
  ARRAY['25-minute podcast exploration', 'Themes and symbolism guide', 'Historical context PDF', 'Character relationship map', 'Science and ethics discussion guide']
),
(
  'dracula',
  'Dracula',
  'Bram Stoker',
  'The novel that created the vampire genre. Every adaptation got something wrong - here''s the original.',
  'Bram Stoker''s epistolary masterpiece defined vampire mythology for generations. Our podcast reveals the sophisticated horror, Victorian anxieties, and literary craftsmanship that movies can''t capture.',
  4.99,
  'from-purple-800 to-purple-950',
  ARRAY['Horror', 'Gothic', 'Vampire'],
  ARRAY['30-minute atmospheric podcast', 'Vampire lore origins guide', 'Victorian context PDF', 'Character timeline infographic', 'Horror elements analysis']
),
(
  'wizard-of-oz',
  'The Wonderful Wizard of Oz',
  'L. Frank Baum',
  'The American fairy tale that became a cultural phenomenon. The book has secrets the movie never showed.',
  'L. Frank Baum''s beloved fantasy introduced Dorothy, the Scarecrow, Tin Man, and Cowardly Lion to the world. Our podcast explores the deeper themes of home, courage, and self-discovery hidden within this classic tale.',
  4.99,
  'from-emerald-500 to-teal-600',
  ARRAY['Fantasy', 'Family', 'Classic'],
  ARRAY['20-minute magical journey podcast', 'Symbolism and allegory guide', 'Character development PDF', 'Yellow brick road infographic', 'Family discussion guide']
),
(
  'christmas-carol',
  'A Christmas Carol',
  'Charles Dickens',
  'Scrooge''s transformation invented the modern Christmas. A timeless story of redemption.',
  'Charles Dickens''s ghost story transformed how the Western world celebrates Christmas. Our podcast captures the warmth, terror, and ultimate hope of Scrooge''s journey from miser to benefactor.',
  4.99,
  'from-green-600 to-red-700',
  ARRAY['Holiday', 'Classic', 'Redemption'],
  ARRAY['25-minute festive podcast', 'Victorian Christmas context PDF', 'Character transformation guide', 'Themes infographic', 'Holiday reflection questions']
),
(
  'sherlock-holmes',
  'The Adventures of Sherlock Holmes',
  'Arthur Conan Doyle',
  'The world''s greatest detective in his original cases. Elementary, my dear listener.',
  'Arthur Conan Doyle''s brilliant detective stories established the mystery genre as we know it. Our podcast breaks down Holmes''s deductive methods and the ingenious plots that have captivated readers for over a century.',
  4.99,
  'from-stone-600 to-stone-800',
  ARRAY['Mystery', 'Detective', 'Classic'],
  ARRAY['30-minute case analysis podcast', 'Deduction methods guide', 'Case summaries PDF', 'Baker Street infographic', 'Mystery-solving worksheet']
),
(
  'alice-wonderland',
  'Alice''s Adventures in Wonderland',
  'Lewis Carroll',
  'Down the rabbit hole into a world of wonder, wordplay, and surreal wisdom.',
  'Lewis Carroll''s mathematical mind created a wonderland of logic puzzles, linguistic playfulness, and philosophical depth disguised as a children''s story. Our podcast reveals the genius hiding in plain sight.',
  4.99,
  'from-sky-500 to-indigo-600',
  ARRAY['Fantasy', 'Surreal', 'Classic'],
  ARRAY['25-minute curious podcast', 'Symbolism decoder PDF', 'Character guide with quotes', 'Wonderland map infographic', 'Logic puzzles worksheet']
);

-- Create storage bucket for product files (run this separately in Storage section)
-- Or use the Supabase dashboard: Storage > New Bucket > "products" > Public

-- Verify insertion
SELECT slug, title, price FROM products ORDER BY created_at;
