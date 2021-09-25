import { Layout } from '@components/common';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

// Fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'cool-hat' } },
      { params: { slug: 'lightweight-jacket' } },
      { params: { slug: 't-shirt' } },
    ],
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

export default function ProductSlug() {
  return <div>Hello World</div>;
}

ProductSlug.layout = Layout;
