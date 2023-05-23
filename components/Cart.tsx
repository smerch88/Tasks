import { Product } from '@/types';
import { FC } from 'react';

type CartProps = {
  cart: Product[];
  totalQuantity: number;
  removeFromCart: (item: Product) => void;
};

export const Cart: FC<CartProps> = ({
  cart,
  totalQuantity,
  removeFromCart,
}) => {
  const handleRemoveClick = (item: Product) => {
    removeFromCart(item);
  };

  return (
    <>
      <div className="bg-cart absolute right-20 top-4 h-32 w-32 bg-cover bg-no-repeat	">
        <details className="absolute top-1/2 rounded-xl border-2 border-solid bg-white_light p-2 shadow-card duration-300 hover:shadow-card_hover">
          <summary>{totalQuantity}</summary>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="grid gap-2">
              {cart.map((item: Product) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price * item.quantity}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => handleRemoveClick(item)}
                    className="bg-red p-2 text-white hover:shadow-card_hover"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </details>
      </div>
    </>
  );
};
