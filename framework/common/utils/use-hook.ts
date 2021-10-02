import { useApiProvider } from '@common';
import { ApiHooks } from '@common/types/api';
import { MutationHook } from '@common/types/hooks';

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};

export const useMutationHook = (context: MutationHook) => {
  const { fetch } = useApiProvider();
  return context.useHook({
    fetch: (input: any) => {
      return context.fetch({
        input,
        fetch,
      });
    },
  });
};
