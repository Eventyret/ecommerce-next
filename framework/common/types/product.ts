export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
}

export interface ProductImage {
  url: string;
  alt?: string;
}
