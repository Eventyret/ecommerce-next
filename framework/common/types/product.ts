export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
}

export interface ProductPrice {
  value: number;
  currencyCode: 'USD' | 'EUR' | 'GBP' | string;
}

export interface ProductImage {
  url: string;
  alt?: string;
}
