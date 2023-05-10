import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Paragraph } from '@/components/typography/Paragraph';

import { UserCardMiniProps } from './UserCardMini.props';

export const UserCardMini: FC<UserCardMiniProps> = ({
  className,
  firstName,
  lastName,
  id,
  image,
  direction = 'horizontal',
  variant = 'dark',
}) => {
  return (
    <div
      className={cn(
        'relative flex rounded-lg p-4 shadow-card hover:shadow-card_hover xl:p-8',
        className,
        {
          ['items-end justify-center']: direction == 'horizontal',
          ['flex-col items-center']: direction == 'vertical',
        },
      )}
    >
      <div className="relative h-10 w-10">
        <Image src={image} alt={`${firstName} ${lastName} avatar`} fill />
      </div>
      <Link
        href={`/user/${id}`}
        className="before:absolute before:inset-x-0 before:inset-y-0  before:content-['']"
      >
        <Paragraph variant={variant} size="small">
          {firstName} {lastName}
        </Paragraph>
      </Link>
    </div>
  );
};
