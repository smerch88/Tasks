import { ShopItem } from '@/types';
import { FC, useContext } from 'react';
import { Section } from './Section';
import { CartContext } from './CartProvider';
import Image from 'next/image';

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
        <ul className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between rounded-xl border-2 border-solid bg-white p-4 shadow-card duration-300 hover:shadow-card_hover"
            >
              <div className="relative mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
              </div>
              <button
                onClick={() => handleCartButtonClick(item)}
                className="w-full max-w-[120px] rounded-xl bg-dark text-white_light duration-300 hover:bg-primary"
              >
                {context?.items.find((cartItem) => cartItem.id === item.id)
                  ? 'Remove'
                  : 'Add to Cart'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
