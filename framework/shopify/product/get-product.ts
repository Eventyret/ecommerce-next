import { ApiConfig } from '@common/types/api';
import { getProductQuery } from '@framework/utils';

const getProduct = async (options: {
  config: ApiConfig;
  variables: any;
}): Promise<any> => {
  const { config, variables } = options;
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiURL,
    variables,
  });
  return {
    product: {
      name: 'MY super product',
      slug: 'my-super-product',
    },
  };
};

export default getProduct;
