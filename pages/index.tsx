import getAllProducts from 'framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';
import { getConfig } from '@framework/api/config';
export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}
