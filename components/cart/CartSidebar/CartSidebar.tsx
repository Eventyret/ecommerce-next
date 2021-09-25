import { FC } from 'react';
import Link from 'next/link';
import { Bag, Cross } from '@components/icons';
import cn from 'classnames';

const CartSidebar: FC = () => {
  const isEmpty = true;

  const rootClass = cn('h-full flex flex-col', {
    'bg-secondary text-secondary': isEmpty,
  });

  return (
    <div className={rootClass}>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="flex items-center h-7">
            <button
              onClick={() => alert('Closing Sidebar')}
              className="transition duration-150 ease-in-out hover:text-gray-500"
            >
              <Cross className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <span className="flex items-center justify-center w-16 h-16 p-12 border border-dashed rounded-full border-primary bg-secondary text-secondary">
            <Bag className="absolute" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p className="px-10 pt-2 text-center text-accents-3">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      ) : (
        <>
          <div className="flex-1 px-4 sm:px-6">
            <h2 className="inline-block pt-1 pb-4 text-base text-2xl font-bold leading-7 tracking-wide">
              My Cart
            </h2>
            <ul className="py-6 space-y-6 border-t sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-accents-3">
              Cart Items Here!
            </ul>
          </div>
          <div className="flex-shrink-0 px-4 py-5 sm:px-6">
            <div className="border-t border-accents-3">
              <ul className="py-3">
                <li className="flex justify-between py-1">
                  <span>Subtotal</span>
                  <span>20$</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Estimated Shipping</span>
                  <span className="font-bold tracking-wide">FREE</span>
                </li>
              </ul>
              <div className="flex justify-between py-3 mb-10 font-bold border-t border-accents-3">
                <span>Total</span>
                <span>120$</span>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Going to checkout!');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
