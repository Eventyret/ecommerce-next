import fetchAPI from '../utils/fetch-api';
import getAllProductsQuery from '../utils/queries/get-all-products';
import { ProductConnection } from '../schema';
import { normalizeProduct } from '../utils/normalize';
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
