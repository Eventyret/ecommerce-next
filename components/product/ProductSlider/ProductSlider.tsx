import React, { FC, Children, isValidElement, useState } from 'react';
import s from './ProductSlider.module.css';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

const ProductSlider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="h-full transition-opacity keen-slider"
      >
        <button
          onClick={slider?.prev}
          className={cn(s.leftControl, s.control)}
        ></button>
        <button
          onClick={slider?.next}
          className={cn(s.rightControl, s.control)}
        ></button>

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
