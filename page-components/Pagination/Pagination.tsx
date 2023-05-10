import { FC } from 'react';
import { PaginationProps } from './Pagination.props';
import cn from 'classnames';

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
    const newPage = Math.min(page + 1, 9);
    setPage(newPage);
  };

  const handlePageClick = (pageNumber: number) => {
    const newPage = pageNumber;
    setPage(newPage);
  };

  const pageButtons = [];

  for (let i = startPage; i <= endPage; i++) {
    const isActive = i === page + 1;
    pageButtons.push(
      <button
        className={cn(
          'w-full max-w-[40px] rounded-sm border-2 border-solid border-primary bg-primary p-2 text-white_light duration-300 hover:border-hover hover:bg-hover',
          { 'border-hover bg-hover': isActive }, // Added 'text-bold' as a separate object property
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
      <div className="flex justify-center gap-2">
        <button
          onClick={handleDecreasePage}
          className="w-full max-w-[40px] rounded-sm border-2 border-solid border-primary bg-primary p-2 text-white_light duration-300 hover:border-hover hover:bg-hover"
        >
          -
        </button>
        <div className="grid grid-cols-5 gap-2 xl:grid-cols-10 ">
          {pageButtons}
        </div>
        <button
          onClick={handleIncreasePage}
          className="w-full max-w-[40px] rounded-sm border-2 border-solid border-primary bg-primary p-2 text-white_light duration-300 hover:border-hover hover:bg-hover"
        >
          +
        </button>
      </div>
    </div>
  );
};
