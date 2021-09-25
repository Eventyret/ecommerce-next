import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import getAllProductsPaths from '@framework/product/get-all-products-paths';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

// Fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};
// Provide product specific data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{product.slug}</div>;
}

ProductSlug.layout = Layout;
