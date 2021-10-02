export type ApiFetchResults<T> = {
  data: T;
};

export type ApiFetchOptions = {
  query: string;
  variables?: Variables;
};

export type Variables = { [key: string]: string | undefined };

export interface ApiConfig {
  fetch<T>(options: ApiFetchOptions): Promise<ApiFetchResults<T>>;
}

export interface ApiHooks {
  cart: {
    useAddItem: any;
  };
}

export type ApiFetch<T = any> = (
  options: ApiFetchOptions
) => Promise<ApiFetchResults<T>>;

export interface ApiProviderContext {
  hooks: ApiHooks;
  fetch: ApiFetch;
}
