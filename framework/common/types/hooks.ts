import { ApiFetch, ApiFetchOptions } from './api';

export type MutationHookContext = {
  fetch: (input: any) => any;
};

export type FetchHookContext = {
  input?: any;
  fetch: ApiFetch;
  options: ApiFetchOptions;
};

export type MutationHook = {
  fetchOptions: ApiFetchOptions;
  fetch: (context: FetchHookContext) => any;
  useHook(context: MutationHookContext): (input: any) => any;
};
