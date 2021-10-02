import { useAddItem } from '@common/cart';
import { MutationHook } from '@common/types/hooks';
import getCheckoutId from '@framework/utils/get-checkout-id';
import { checkoutLineItemsAddMutation } from '@framework/utils/mutations';

export default useAddItem;

export const handler: MutationHook = {
  fetchOptions: {
    query: checkoutLineItemsAddMutation,
  },
  fetch: async ({ fetch, options, input }) => {
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    };
    const response = await fetch({
      ...options,
      variables,
    });
    return response;
  },
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const response = await fetch(input);
      return {
        output: response,
      };
    };
  },
};
