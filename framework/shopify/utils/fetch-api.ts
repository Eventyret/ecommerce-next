type FetchAPIParms = {
  query: string;
};
type FetchAPIResult<T> = { data: T };

const fetchAPI = async <T>({ query }: FetchAPIParms): Promise<FetchAPIResult<T>> => {
  const url = `http://localhost:4000/graphql`;
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
