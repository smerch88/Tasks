import { AllProducts } from '@/components/AllProducts';
import { Cart } from '@/components/Cart';
import { Header } from '@/components/Header';
import { Product } from '@/types';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';

const WebShop: FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCart(updatedCart);
    } else {
      const updatedItem = { ...item, quantity: 1 };
      setCart([...cart, updatedItem]);
    }
  };

  const removeFromCart = (item: Product) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>WebShop</title>
      </Head>
      <Header />
      <AllProducts addToCart={addToCart} />
      <Cart
        cart={cart}
        totalQuantity={totalQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default WebShop;
