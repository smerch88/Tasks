import { createContext, PropsWithChildren, useState, useEffect } from 'react';
import { ShopItem } from '@/types';

export type CartContextType = {
  items: ShopItem[];
  addItem: (arg0: ShopItem) => void;
  deleteItem: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (product: ShopItem) => {
    const itemExists = items.some((item) => item.id === product.id);
    if (!itemExists) {
      setItems((prev) => [...prev, product]);
    }
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
