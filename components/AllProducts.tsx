import { ShopItem } from '@/types';
import { FC, useContext } from 'react';
import { Section } from './Section';
import { CartContext } from './CartProvider';
import Image from 'next/image';
import { Paragraph } from './Paragraph';
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
    <Section>
      <div className="container">
        <ul className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          {data &&
            data.map((item) => (
              <li
                key={item.id}
                className="flex flex-col justify-between rounded-xl border-2 border-solid bg-white p-4 shadow-card duration-300 hover:shadow-card_hover"
              >
                <div className="mb-4 grid gap-4">
                  <div className="relative mx-auto h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Title tag="h3">{item.title}</Title>
                  <Paragraph size="small" className="line-clamp-2">
                    {item.description}
                  </Paragraph>
                </div>
                <div>
                  <Paragraph>Price: ${item.price}</Paragraph>
                  <button
                    onClick={() => handleCartButtonClick(item)}
                    className="w-full max-w-[120px] rounded-xl bg-dark text-white_light duration-300 hover:bg-primary"
                  >
                    {context?.items.find((cartItem) => cartItem.id === item.id)
                      ? 'Remove'
                      : 'Add to Cart'}
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
};
