import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const products = [1, 2, 3];
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
