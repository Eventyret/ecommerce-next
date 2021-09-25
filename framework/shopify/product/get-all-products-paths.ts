import { ApiConfig } from '@common/types/api';
import { Product } from '@common/types/product';

type ReturnType = {
  products: Pick<Product, 'slug'>[];
};
const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  return {
    products: [
      { slug: 'cool-hat' },
      { slug: 'lightweight-jacket' },
      { slug: 't-shirt' },
    ],
  };
};
export default getAllProductsPaths;
