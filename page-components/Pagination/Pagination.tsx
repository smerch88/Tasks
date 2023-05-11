import { FC } from 'react';
import { PaginationProps } from './Pagination.props';
import clsx from 'clsx';

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

  for (let i = startPage; i <= endPage; ++i) {
    const isActive = i === page + 1;
    pageButtons.push(
      <button
        className={clsx(
          'w-full max-w-[40px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 hover:border-hover hover:bg-hover',
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

  return (
    <div className="container">
      <div className="flex justify-center gap-[4px] md:gap-2">
        <button
          onClick={handleDecreasePage}
          className={clsx(
            'w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:max-w-[40px]',
            page === startPage - 1
              ? 'border-gray_light bg-gray_light'
              : 'border-primary bg-primary  hover:border-hover hover:bg-hover',
          )}
          disabled={page === startPage - 1}
        >
          -
        </button>
        <div className="grid grid-cols-5 gap-[4px] md:gap-2 xl:grid-cols-10 ">
          {pageButtons}
        </div>
        <button
          onClick={handleIncreasePage}
          className={clsx(
            'w-full max-w-[28px] rounded-sm border-2 border-solid p-2 text-white_light duration-300 md:max-w-[40px]',
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
