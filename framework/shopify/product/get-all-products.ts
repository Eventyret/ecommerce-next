import { fetchAPI, normalizeProduct, getAllProductsQuery } from '../utils';
import { ProductConnection } from '../schema';
import { Product } from 'framework/common/types/product';
type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery });
  const products = data.products.edges.map(({ node: product }) => normalizeProduct(product)) ?? [];
  return products;
};
export default getAllProducts;
