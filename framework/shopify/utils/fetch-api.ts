import { ApiFetchOptions, ApiFetchResults } from '@common/types/api';

const fetchAPI = async <T>({ url, query }: ApiFetchOptions): Promise<ApiFetchResults<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const { data, errors } = await response.json();
  if (errors) throw new Error(errors[0].message ?? errors.message);
  return { data };
};

export default fetchAPI;
