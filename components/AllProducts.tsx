import { ShopItem } from '@/types';
import { FC, useContext } from 'react';
import { CartContext } from './CartProvider';
import { Product } from './Product';
import { Section } from './Section';

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
    <Section>
      <div className="container">
        <ul className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </Section>
  );
};
