import { FC, useState } from 'react';
import { CartItem } from './CartItem';
import { useCreateCart } from './CartProvider';
import { Transition } from '@headlessui/react';

export const Cart: FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const context = useCreateCart();

  const handleRemoveItem = (itemId: number) => {
    context.deleteItem(itemId);
  };

  const itemCount = context.items.length;
  const cartItems = context.items;

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="ml-4 md:top-20 md:ml-20">
      <button
        onClick={toggleCartVisibility}
        className="rounded-xl text-white_light duration-300 hover:animate-spin"
      >
        <img src="/images/cart.png" alt="cart" className="h-10 w-10" />
      </button>
      <div className="inline-block h-10 w-10 rounded-[50%] bg-red p-2 text-center text-white transition-all">
        {itemCount}
      </div>
      {isCartVisible && itemCount > 0 && (
        <ul className="absolute right-10 top-14 z-20 grid w-60 gap-4 rounded-md bg-white p-4 shadow-card md:top-28">
          {cartItems.map((item) => (
            <CartItem
              item={item}
              handleRemoveItem={handleRemoveItem}
              key={item.id}
            />
          ))}
          <button className="mx-auto w-full max-w-[120px] rounded-xl bg-primary p-4 text-xl text-white_light duration-300 hover:bg-hover">
            Order
          </button>
        </ul>
      )}
    </div>
  );
};
