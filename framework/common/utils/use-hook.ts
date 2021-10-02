import { useApiProvider } from '@common';
import { ApiHooks } from '@common/types/api';
import { MutationHook } from '@common/types/hooks';

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};

export const useMutationHook = (context: MutationHook) => {
  return context.useHook({
    fetch: (input: any) => {
      return context.fetch({
        input,
        fetch: async (input: any) => {
          return { data: JSON.stringify(input) + '_MODIFIED' };
        },
      });
    },
  });
};
