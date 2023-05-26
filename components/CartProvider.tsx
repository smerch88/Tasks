import { ShopItem } from '@/types';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type CartContextType = {
  items: ShopItem[];
  addItem: (arg0: ShopItem) => void;
  deleteItem: (id: number) => void;
};

type Methods = {
  addItem: (product: ShopItem) => void;
  deleteItem: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
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

  const methods: Methods = useMemo(() => {
    return {
      addItem: (product: ShopItem) => {
        const itemExists = items.some((item) => item.id === product.id);
        if (!itemExists) {
          setItems((prev) => [...prev, product]);
        }
      },
      deleteItem: (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      },
    };
  }, [items]);

  const memoizedContext = useMemo<CartContextType>(() => {
    return {
      items,
      ...methods,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <CartContext.Provider value={memoizedContext}>
      {children}
    </CartContext.Provider>
  );
};

export function useCreateCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      'useCreateLesson must be used within a CreateLessonProvider',
    );
  }

  return context;
}
