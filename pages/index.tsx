import { getConfig } from '@framework/api/config';
import getAllProducts from 'framework/shopify/product/get-all-products';
import type { InferGetStaticPropsType } from 'next';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='root'>
      {products.slice(0, 3).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

Home.Layout = Layout;
