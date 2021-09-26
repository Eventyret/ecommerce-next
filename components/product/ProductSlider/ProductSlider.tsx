import React, { FC, Children, isValidElement, useState } from 'react';
import s from './ProductSlider.module.css';
import { useKeenSlider } from 'keen-slider/react';

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      s.details().relativeSlide;
    },
  });

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="h-full transition-opacity keen-slider"
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${
                child.props.className ? `${child.props.className}` : ''
              } keen-slider__slide`,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
