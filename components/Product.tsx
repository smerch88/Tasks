import { FC, useContext, useState } from 'react';
import Image from 'next/image';
import { Paragraph } from '@/components/Paragraph';
import { ShopItem } from '@/types';
import { Title } from './Title';
import { CartContext } from './CartProvider';
import { useDebounceValue } from '@/hooks/useDebounceValue';
import { Button } from '@/components/Button';

type ProductProps = {
  item: ShopItem;
  handleCartButtonClick: (item: ShopItem) => void;
};

export const Product: FC<ProductProps> = ({ item, handleCartButtonClick }) => {
  const context = useContext(CartContext);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

  const debouncedIsTitleHovered = useDebounceValue(isTitleHovered, 300);
  const debouncedIsDescriptionHovered = useDebounceValue(
    isDescriptionHovered,
    300,
  );

  const openTitle = () => {
    setIsTitleHovered(true);
  };

  const CloseTitle = () => {
    setIsTitleHovered(false);
  };

  const openDescription = () => {
    setIsDescriptionHovered(true);
  };

  const closeDescription = () => {
    setIsDescriptionHovered(false);
  };

  return (
    <div className="flex flex-col justify-between rounded-xl border-2 border-solid border-white bg-white p-4 shadow-card duration-300 hover:shadow-card_hover">
      <div className="mb-4 grid gap-4">
        <div className="relative mx-auto h-40 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition-all duration-500 hover:scale-105"
          />
        </div>
        <div
          className="relative"
          onMouseEnter={openTitle}
          onMouseLeave={CloseTitle}
        >
          <Title tag="h3" className="line-clamp-1 cursor-help">
            {item.title}
          </Title>
          {debouncedIsTitleHovered && (
            <div onClick={CloseTitle}>
              <Paragraph
                size="small"
                className="bot-0 absolute z-10 w-full bg-dark p-2 text-white"
              >
                {item.title}
              </Paragraph>
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={openDescription}
          onMouseLeave={closeDescription}
        >
          <Paragraph size="small" className="line-clamp-2 cursor-help">
            {item.description}
          </Paragraph>
          {debouncedIsDescriptionHovered && (
            <div onClick={closeDescription}>
              <Paragraph
                size="small"
                className="bot-0 absolute z-10 w-full bg-dark p-2 text-white"
              >
                {item.description}
              </Paragraph>
            </div>
          )}
        </div>
      </div>
      <div>
        <Paragraph>Price: ${item.price}</Paragraph>
        <Button
          onClick={() => handleCartButtonClick(item)}
          variant={
            context?.items.find((cartItem) => cartItem.id === item.id)
              ? 'remove'
              : 'add'
          }
        >
          {context?.items.find((cartItem) => cartItem.id === item.id)
            ? 'Remove'
            : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};
