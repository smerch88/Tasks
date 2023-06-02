import { FC } from 'react';
import { Title } from './Title';
import { Paragraph } from './Paragraph';
import Cross from '@/public/images/cross.svg';
import { ShopItem } from '@/types';
import { Transition } from '@headlessui/react';

type CartItemProps = {
  item: ShopItem;
  handleRemoveItem: (id: number) => void;
};

export const CartItem: FC<CartItemProps> = ({ item, handleRemoveItem }) => {
  return (
    <>
      <li className="grid gap-2">
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Title tag="h3">{item.title}</Title>
          <div className="flex justify-between gap-4">
            <Paragraph>Price: ${item.price}</Paragraph>
            <button
              className="rounded-xl p-1 text-white_light duration-300 hover:animate-pulse hover:fill-red"
              onClick={() => handleRemoveItem(item.id)}
            >
              <Cross className="h-4 w-4" />
            </button>
          </div>
        </Transition>
      </li>
    </>
  );
};
