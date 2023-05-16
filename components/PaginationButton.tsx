import clsx from 'clsx';
import { FC } from 'react';

type PaginationButtonProps = {
  button: boolean;
  isActive: boolean;
  pageNumber: number;
  onClick: () => void;
};

export const PaginationButton: FC<PaginationButtonProps> = ({
  button,
  isActive,
  pageNumber,
  onClick,
}) => {
  const Tag = button ? 'button' : 'div';
  return (
    <Tag
      className={clsx(
        'w-[36px] rounded-sm border-2 border-solid p-2 text-center text-white_light duration-300 hover:border-hover hover:bg-hover md:w-[40px] smOnly:text-xs',
        isActive ? 'border-hover bg-hover' : 'border-primary bg-primary',
      )}
      {...(button ? { onClick } : {})}
    >
      {button ? pageNumber : '...'}
    </Tag>
  );
};
