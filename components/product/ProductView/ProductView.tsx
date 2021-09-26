import cn from 'classnames';
import { FC } from 'react';
import s from './ProductView.module.css';
import { Container } from '@components/ui';
import Image from 'next/image';
import { Product } from '@common/types/product';
import { ProductSlider } from '@components/product';

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className={cn(s.root, 'fit', 'mb-6')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image, i) => (
              <div className={s.imageContainer} key={i}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="font-medium uppercase">Color</h2>
              <div className="flex flex-row py-4">Variant Options Here!</div>
            </div>
            <div className="w-full max-w-xl text-lg break-words pb-14">
              {product.description}
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              className={s.button}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
