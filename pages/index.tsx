import type { InferGetStaticPropsType } from 'next';
import getAllProducts from './framework/shopify/product/get-all-products';

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const message: string = 'Hello World';
  return <div>{products}</div>;
}
