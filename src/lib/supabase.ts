import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nxmojghmsafcvjuzniqd.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54bW9qZ2htc2FmY3ZqdXpuaXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMzczNTEsImV4cCI6MjA3MDgxMzM1MX0.Jw787CKUuEjzyOyNu-XIQT6i_TQ1TwEB9M58zhi4aXc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
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
  created_at?: string;
}

export interface Order {
  id: string;
  email: string;
  product_ids: string[];
  total: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
  return data || [];
}

// Fetch single product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  
  return data;
}

// Get download URLs for a product
export function getProductDownloadUrls(slug: string) {
  const baseUrl = `${supabaseUrl}/storage/v1/object/public/products/${slug}`;
  return {
    podcast: `${baseUrl}/podcast.mp3`,
    studyGuide: `${baseUrl}/study-guide.pdf`,
    infographic: `${baseUrl}/infographic.pdf`,
    faq: `${baseUrl}/faq.pdf`,
  };
}
