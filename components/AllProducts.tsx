import { ShopItem } from '@/types';
import { FC, useContext } from 'react';
import { CartContext } from './CartProvider';
import { Product } from './Product';
import { Section } from './Section';
import { BackgroundEffect } from './BackgroundEffect';
import { Title } from './Title';

type AllProductsProps = {
  data: ShopItem[];
};

export const AllProducts: FC<AllProductsProps> = ({ data }) => {
  const context = useContext(CartContext);

  const handleCartButtonClick = (item: ShopItem) => {
    const itemInCart = context?.items.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (itemInCart) {
      context?.deleteItem(item.id);
    } else {
      context?.addItem(item);
    }
  };

  return (
    <Section className="relative overflow-hidden">
      <div className="container">
        <Title
          tag="h1"
          className="mb-8 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-5xl font-black text-transparent"
        >
          Wellcome to Rainbow Shop
        </Title>
        <ul className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <Product
                  item={item}
                  handleCartButtonClick={handleCartButtonClick}
                />
              </li>
            ))}
        </ul>
      </div>
      <BackgroundEffect />
    </Section>
  );
};
