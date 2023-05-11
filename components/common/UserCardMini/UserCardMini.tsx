import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import { UserCardMiniProps } from './UserCardMini.props';
import { Paragraph } from '@/components/typography/Paragraph/Paragraph';

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
      className={clsx(
        'relative flex rounded-lg p-4 shadow-card duration-300 hover:shadow-card_hover xl:p-8',
        className,
        direction == 'horizontal'
          ? 'items-end justify-center'
          : 'flex-col items-center',
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
