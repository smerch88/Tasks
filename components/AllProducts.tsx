import data from '@/data/goods.json';
import { Product } from '@/types';
import { FC } from 'react';
import { Section } from './Section';

type AllProductsProps = {
  addToCart: (item: Product) => void;
};

export const AllProducts: FC<AllProductsProps> = ({ addToCart }) => {
  return (
    <Section>
      <div className="container">
        <ul className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.goods.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between rounded-xl border-2 border-solid p-4 shadow-card duration-300 hover:shadow-card_hover"
            >
              <div className="">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
              </div>
              <button
                onClick={() => addToCart(item as Product)}
                className="w-full max-w-[120px] rounded-xl bg-dark text-white_light duration-300 hover:bg-primary"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
