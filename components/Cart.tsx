import { FC, useContext, useState } from 'react';
import { CartContext, CartContextType } from './CartProvider';
import { Title } from './Title';
import { Paragraph } from './Paragraph';

export const Cart: FC = () => {
  const cartContext = useContext<CartContextType | null>(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleRemoveItem = (itemId: number) => {
    cartContext?.deleteItem(itemId);
  };

  const itemCount = cartContext?.items.length || 0;
  const cartItems = cartContext?.items || [];

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="ml-4 md:top-20 md:ml-20">
      <button
        onClick={toggleCartVisibility}
        className="rounded-xl text-white_light duration-300 hover:animate-bounce"
      >
        <img src="/images/cart.png" alt="cart" className="h-10 w-10" />
      </button>
      <div className="inline-block h-10 w-10 rounded-[50%] bg-red p-2 text-center text-white transition-all">
        {itemCount}
      </div>
      {isCartVisible && itemCount > 0 && (
        <ul className="absolute right-10 top-14 z-10 grid w-40 gap-4 rounded-md bg-white p-4 shadow-card md:top-28">
          {cartItems.map((item) => (
            <li key={item.id} className="grid gap-2">
              <div>
                <Title tag="h3">{item.title}</Title>
                <Paragraph>Price: ${item.price}</Paragraph>
              </div>
              <button
                className="w-full max-w-[120px] rounded-xl bg-red text-white_light duration-300 hover:bg-secondary"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
