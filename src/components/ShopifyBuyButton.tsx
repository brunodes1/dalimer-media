'use client';

import { useEffect, useRef } from 'react';
import { SHOPIFY_CONFIG } from '@/lib/products';

interface ShopifyBuyButtonProps {
  shopifyProductId: string;
  buttonText?: string;
}

declare global {
  interface Window {
    ShopifyBuy: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => unknown;
      UI: {
        onReady: (client: unknown) => Promise<{
          createComponent: (type: string, config: unknown) => void;
        }>;
      };
    };
  }
}

export function ShopifyBuyButton({ shopifyProductId, buttonText = "Add to Cart" }: ShopifyBuyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    
    const scriptId = 'shopify-buy-button-script';
    
    function initializeButton() {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI || !containerRef.current) {
        return;
      }

      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_CONFIG.domain,
        storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: shopifyProductId,
          node: containerRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0px"
                  },
                  "text-align": "center"
                },
                button: {
                  "font-family": "Inter, system-ui, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "font-weight": "bold",
                  "border-radius": "12px",
                  "background-color": "#1056a7",
                  "color": "#ffffff",
                  ":hover": {
                    "background-color": "#0e4d96"
                  },
                  ":focus": {
                    "background-color": "#0e4d96"
                  }
                },
                price: {
                  "font-size": "18px",
                  "font-weight": "bold"
                },
                compareAt: {
                  "font-size": "14px"
                }
              },
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
              },
              text: {
                button: buttonText
              }
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Inter, system-ui, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "font-weight": "bold",
                  "border-radius": "12px",
                  "background-color": "#1056a7",
                  "color": "#ffffff",
                  ":hover": {
                    "background-color": "#0e4d96"
                  },
                  ":focus": {
                    "background-color": "#0e4d96"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              }
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#1056a7",
                  ":hover": {
                    "background-color": "#0e4d96"
                  },
                  ":focus": {
                    "background-color": "#0e4d96"
                  }
                }
              }
            }
          }
        });
        initializedRef.current = true;
      });
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.async = true;
      script.onload = initializeButton;
      document.head.appendChild(script);
    } else if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      initializeButton();
    } else {
      const checkInterval = setInterval(() => {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          clearInterval(checkInterval);
          initializeButton();
        }
      }, 100);
      
      setTimeout(() => clearInterval(checkInterval), 10000);
    }
  }, [shopifyProductId, buttonText]);

  return (
    <div 
      ref={containerRef} 
      className="shopify-buy-button-container w-full"
    />
  );
}
