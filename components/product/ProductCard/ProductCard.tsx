import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  product: Product;
}
const placeHolderImage = '/product-image-placeholder.svg';
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>£ 14</span>
        </div>
        {product.images && (
          <Image
            src={product.images[0].url ?? placeHolderImage}
            alt={product.name ?? 'Product Image'}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
