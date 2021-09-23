type FetchAPIParms = {
  query: string;
};

const fetchAPI = async ({ query }: FetchAPIParms) => {
  const url = `http://localhost:4000/graphql`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  return { data };
};

export default fetchAPI;
