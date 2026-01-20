# Dalimer Media - Storefront

A Next.js 14 e-commerce storefront for selling transformed public domain literature packages.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will automatically detect Next.js and deploy
4. Add environment variables in Vercel dashboard (see below)

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Shopify Configuration
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-token

# Supabase (optional - for file hosting)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

## Shopify Setup

### Step 1: Create Shopify Store
1. Go to [shopify.com](https://shopify.com) and create a store
2. Choose the Starter plan ($5/month) for digital products

### Step 2: Add Products
Create these 10 products in Shopify with digital file delivery:

| Product Name | Price | SKU |
|-------------|-------|-----|
| The Bible (KJV) Package | $4.99 | bible-kjv |
| Meditations Package | $4.99 | meditations |
| The Art of War Package | $4.99 | art-of-war |
| Pride and Prejudice Package | $4.99 | pride-prejudice |
| Frankenstein Package | $4.99 | frankenstein |
| Dracula Package | $4.99 | dracula |
| Wizard of Oz Package | $4.99 | wizard-oz |
| A Christmas Carol Package | $4.99 | christmas-carol |
| Sherlock Holmes Package | $4.99 | sherlock-holmes |
| Alice in Wonderland Package | $4.99 | alice-wonderland |
| 3-Pack Bundle | $9.99 | three-pack |
| Complete Collection | $29.99 | complete-collection |

### Step 3: Enable Buy Button Channel
1. Go to Settings > Apps and sales channels
2. Click "Shopify App Store"
3. Search for "Buy Button" and install
4. Create buy buttons for each product
5. Copy the Product IDs

### Step 4: Create Storefront API Token
1. Go to Settings > Apps and sales channels
2. Click "Develop apps"
3. Create a new app
4. Enable Storefront API access
5. Copy the Storefront access token

### Step 5: Update Product IDs
Update `src/lib/products.ts` with your Shopify product IDs:

```typescript
{
  id: "bible-kjv",
  shopifyProductId: "gid://shopify/Product/1234567890",
  // ...
}
```

## File Hosting (Supabase)

For hosting the actual PDF and MP3 files:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a storage bucket called "products"
3. Upload your files with this structure:
   ```
   products/
   ├── bible-kjv/
   │   ├── podcast.mp3
   │   ├── study-guide.pdf
   │   └── infographic.pdf
   ├── meditations/
   │   └── ...
   ```
4. Set bucket to public or create signed URLs for downloads

## Content Production Checklist

For each title, create using NotebookLM:

- [ ] Upload source text from Project Gutenberg
- [ ] Generate Audio Overview (podcast)
- [ ] Generate Study Guide
- [ ] Generate FAQ
- [ ] Generate Timeline/Key Events
- [ ] Export and save files
- [ ] Upload to Supabase storage

## Project Structure

```
dalimer-media/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Main layout with nav/footer
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles
│   │   ├── about/
│   │   │   └── page.tsx    # About page
│   │   └── titles/
│   │       └── [slug]/
│   │           └── page.tsx # Individual product pages
│   ├── components/
│   │   └── ShopifyBuyButton.tsx
│   └── lib/
│       └── products.ts     # Product data
├── public/
│   └── images/             # Product images
├── .env.example
└── README.md
```

## Customization

### Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    navy: "#1A365D",
    gold: "#D69E2E",
    light: "#EDF2F7",
    cream: "#FFFBF0",
  },
}
```

### Adding New Products
Edit `src/lib/products.ts` and add new product objects following the existing pattern.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payments**: Shopify Buy Button
- **Hosting**: Vercel
- **File Storage**: Supabase (optional)

## License.

© 2026 Dalimer Media Inc. All rights reserved.

Transformative content is copyrighted by Dalimer Media.
Underlying public domain texts are not subject to this copyright.
