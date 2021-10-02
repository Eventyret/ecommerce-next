import { useApiProvider } from '@common';
import { ApiHooks } from '@common/types/api';
import { MutationHook } from '@common/types/hooks';

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};

export const useMutationHook = (hook: MutationHook) => {
  const { fetch } = useApiProvider();

  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetch({
        input,
        fetch: fetch,
        options: hook.fetchOptions,
      });
    },
  });
};
