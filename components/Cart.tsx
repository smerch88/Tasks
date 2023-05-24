import { FC, useContext } from 'react';
import { CartContext, CartContextType } from './CartProvider';
import { ShopItem } from '@/types';

const Cart: FC = () => {
  const cartContext = useContext<CartContextType | null>(CartContext);

  const handleRemoveItem = (itemId: number) => {
    cartContext?.deleteItem(itemId);
  };

  const renderCartItem = (item: ShopItem) => {
    return (
      <li key={item.id}>
        <div>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
        </div>
        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
      </li>
    );
  };

  const itemCount = cartContext?.items.length || 0;
  const cartItems = cartContext?.items || [];

  return (
    <div>
      <button>View Cart ({itemCount})</button>
      {itemCount > 0 && (
        <ul>{cartItems.map((item) => renderCartItem(item))}</ul>
      )}
    </div>
  );
};

export { Cart };
