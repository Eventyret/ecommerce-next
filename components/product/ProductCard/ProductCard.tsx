import { Product } from '@common/types/product';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './ProductCard.module.css';

interface Props {
  product: Product;
  variant?: 'simple' | 'slim';
}
const placeHolderImage = '/product-image-placeholder.svg';
const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <a className={s.root}>
        {variant === 'slim' ? (
          <>Slim Product</>
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>
                  {product.name}
                  {product.price.value} {product.price.currencyCode}
                </span>
              </h3>
              <span className={s.productPrice}>£ 14</span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                src={product.images[0].url ?? placeHolderImage}
                alt={product.name ?? 'Product Image'}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
