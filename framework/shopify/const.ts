export const API_URL =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify-local'
    ? process.env.NEXT_PUBLIC_LOCAL_STORE_DOMAIN
    : process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify-local'
    ? 'shopify_local-checkoutId'
    : 'shopify_checkoutId';
