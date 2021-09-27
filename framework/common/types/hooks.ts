export type MutationHookContext = {
  fetch: (input: any) => any;
};

export type MutationHook = {
  fetch: (input: any) => any;
  useHook(context: MutationHookContext): (input: any) => any;
};
