import fetchAPI from '../utils/fetch-api';
import getAllProductsQuery from '../utils/queries/get-all-products';

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchAPI({ query: getAllProductsQuery });
  return products.data;
};
export default getAllProducts;
