'use client';

import { useEffect } from 'react';

interface ShopifyBuyButtonProps {
  productId: string;
  containerId: string;
}

// This component loads Shopify Buy Button SDK and renders a buy button
// You'll need to replace SHOPIFY_DOMAIN and STOREFRONT_ACCESS_TOKEN with your actual values
export function ShopifyBuyButton({ productId, containerId }: ShopifyBuyButtonProps) {
  useEffect(() => {
    // Check if ShopifyBuy is already loaded
    if (typeof window !== 'undefined') {
      const scriptId = 'shopify-buy-button-script';
      
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        script.async = true;
        script.onload = () => initializeButton();
        document.head.appendChild(script);
      } else {
        initializeButton();
      }
    }

    function initializeButton() {
      // @ts-expect-error - ShopifyBuy is loaded from external script
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        // @ts-expect-error - ShopifyBuy is loaded from external script
        const client = window.ShopifyBuy.buildClient({
          domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'your-store.myshopify.com',
          storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || 'your-token',
        });

        // @ts-expect-error - ShopifyBuy is loaded from external script
        window.ShopifyBuy.UI.onReady(client).then((ui: unknown) => {
          // @ts-expect-error - ShopifyBuy UI type
          ui.createComponent('product', {
            id: productId,
            node: document.getElementById(containerId),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0',
                      'margin-bottom': '0px',
                    },
                  },
                  button: {
                    'font-family': 'Inter, sans-serif',
                    'font-size': '16px',
                    'padding-top': '16px',
                    'padding-bottom': '16px',
                    ':hover': {
                      'background-color': '#eab308',
                    },
                    'background-color': '#d69e2e',
                    ':focus': {
                      'background-color': '#eab308',
                    },
                    'border-radius': '12px',
                    'font-weight': 'bold',
                    color: '#1a365d',
                  },
                },
                contents: {
                  img: false,
                  title: false,
                  price: false,
                },
                text: {
                  button: 'Buy Now',
                },
              },
              cart: {
                styles: {
                  button: {
                    'font-family': 'Inter, sans-serif',
                    'font-size': '16px',
                    'padding-top': '16px',
                    'padding-bottom': '16px',
                    ':hover': {
                      'background-color': '#eab308',
                    },
                    'background-color': '#d69e2e',
                    ':focus': {
                      'background-color': '#eab308',
                    },
                    'border-radius': '12px',
                    'font-weight': 'bold',
                    color: '#1a365d',
                  },
                },
                text: {
                  total: 'Subtotal',
                  button: 'Checkout',
                },
              },
            },
          });
        });
      }
    }
  }, [productId, containerId]);

  return null;
}

// Placeholder component for when Shopify isn't configured yet
export function BuyButtonPlaceholder({ 
  price, 
  productName 
}: { 
  price: number; 
  productName: string;
}) {
  const handleClick = () => {
    // For now, show an alert. Replace with actual Shopify integration
    alert(`Ready to purchase ${productName} for $${price}!\n\nShopify integration will be connected shortly.`);
  };

  return (
    <button 
      onClick={handleClick}
      className="w-full bg-brand-gold text-brand-navy py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors btn-pulse flex items-center justify-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Buy Now - ${price}
    </button>
  );
}
