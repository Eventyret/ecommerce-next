import { ImageEdge, Product as ShopifyProduct } from '../schema';

export function normalizeProduct(productNode: ShopifyProduct): any {
  const { id, title: name, handle, vendor, description, images: imageConnection, ...rest } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };

  return product;
}

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));
