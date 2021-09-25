import { ApiConfig, Variables } from '@common/types/api';
import { getProductQuery, normalizeProduct } from '@framework/utils';
import { Product as ShopifyProduct } from '@framework/schema';

type FetchType = {
  productByHandle: ShopifyProduct;
};

const getProduct = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<any> => {
  const { config, variables } = options;
  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiURL,
    variables,
  });

  const { productByHandle } = data;

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProduct;
