import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type PaginationControlButtonsProps = {
  handleDecreasePage: () => void;
  handleIncreasePage: () => void;
  page: number;
  startPage: number;
  endPage: number;
  children: ReactNode;
};

export const PaginationControlButtons: FC<PaginationControlButtonsProps> = ({
  handleDecreasePage,
  handleIncreasePage,
  page,
  startPage,
  endPage,
  children,
}) => {
  return (
    <div className="flex justify-center gap-[4px] md:gap-2">
      <button
        onClick={handleDecreasePage}
        className={clsx(
          'hidden w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:block md:max-w-[40px] smOnly:text-xs',
          page === startPage
            ? 'border-gray_light bg-gray_light'
            : 'border-primary bg-primary  hover:border-hover hover:bg-hover',
        )}
        disabled={page === startPage}
      >
        -
      </button>
      {children}
      <button
        onClick={handleIncreasePage}
        className={clsx(
          'hidden w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:block md:max-w-[40px] smOnly:text-xs',
          page === endPage
            ? 'border-gray_light bg-gray_light'
            : 'border-primary bg-primary  hover:border-hover hover:bg-hover',
        )}
        disabled={page === endPage}
      >
        +
      </button>
    </div>
  );
};
