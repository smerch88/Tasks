import clsx from 'clsx';
import { FC } from 'react';
import { PaginationProps } from './Pagination.props';

export const Pagination: FC<PaginationProps> = ({
  setPage,
  endPage,
  startPage,
  page,
}) => {
  const handleDecreasePage = () => {
    const newPage = Math.max(page - 1, 0);
    setPage(newPage);
  };

  const handleIncreasePage = () => {
    const newPage = Math.min(page + 1, endPage);
    setPage(newPage);
  };

  const handlePageClick = (pageNumber: number) => {
    const newPage = pageNumber;
    setPage(newPage);
  };

  const pageButtons = [];

  let isVisible: boolean;
  let isDots: boolean;

  for (let i = startPage; i <= endPage; ++i) {
    const isActive = i === page + 1;
    if (page > 2 && page < endPage - 3) {
      isVisible =
        (i <= page + 2 && i >= page) || i === startPage || i === endPage;
      isDots = i === page + 3 || i === page - 1;
    } else if (page < endPage - 3) {
      isVisible = i <= 5 || i === endPage || i === startPage || i <= 5;
      isDots = i === 6;
    } else if (page >= endPage - 4) {
      isVisible = i >= 6 || i === startPage || i === endPage;
      isDots = i === endPage - 5;
    } else {
      isVisible = false;
      isDots = false;
    }

    {
      isDots &&
        pageButtons.push(
          <button
            className={clsx(
              'w-[36px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 hover:border-hover hover:bg-hover md:w-[40px] smOnly:text-xs',
              isActive ? 'border-hover bg-hover' : 'border-primary bg-primary',
            )}
            key={i}
            disabled={isActive}
          >
            ...
          </button>,
        );
    }
    {
      isVisible &&
        pageButtons.push(
          <button
            className={clsx(
              'w-[36px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 hover:border-hover hover:bg-hover md:w-[40px] smOnly:text-xs',
              isActive ? 'border-hover bg-hover' : 'border-primary bg-primary',
            )}
            key={i}
            onClick={() => handlePageClick(i - 1)}
            disabled={isActive}
          >
            {i}
          </button>,
        );
    }
  }

  return (
    <div className="container mt-auto">
      <div className="flex justify-center gap-[4px] md:gap-2">
        <button
          onClick={handleDecreasePage}
          className={clsx(
            'hidden w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:block md:max-w-[40px] smOnly:text-xs',
            page === startPage - 1
              ? 'border-gray_light bg-gray_light'
              : 'border-primary bg-primary  hover:border-hover hover:bg-hover',
          )}
          disabled={page === startPage - 1}
        >
          -
        </button>
        <div className="grid grid-cols-7 gap-[4px] md:gap-2 ">
          {pageButtons}
        </div>
        <button
          onClick={handleIncreasePage}
          className={clsx(
            'hidden w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:block md:max-w-[40px] smOnly:text-xs',
            page === endPage - 1
              ? 'border-gray_light bg-gray_light'
              : 'border-primary bg-primary  hover:border-hover hover:bg-hover',
          )}
          disabled={page === endPage - 1}
        >
          +
        </button>
      </div>
    </div>
  );
};
