import { ApiFetch } from './api';

export type MutationHookContext = {
  fetch: (input: any) => any;
};

export type FetchHookContext = {
  input: any;
  fetch: ApiFetch;
};

export type MutationHook = {
  fetch: (context: FetchHookContext) => any;
  useHook(context: MutationHookContext): (input: any) => any;
};
