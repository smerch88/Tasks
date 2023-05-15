import clsx from 'clsx';
import { FC, useMemo, useCallback } from 'react';

type PaginationProps = {
  setPage: (page: number) => void;
  endPage: number;
  startPage: number;
  page: number;
};

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

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      const newPage = pageNumber;
      setPage(newPage);
    },
    [setPage],
  );

  const paginationButtons = useMemo(() => {
    const buttons = [];

    let isVisible; //определяет кнопки с цифрами, которые видны
    let isDots; //определяет кнопки с точками

    for (
      let i = startPage;
      i <= endPage;
      i++ // проходим циклом от 1 страницы до последней
    ) {
      const realPage = page + 1;
      const isActive = i === realPage; // кнопка является активной, если номер страницы из пропсов совпадает с её ключём, +1 смещен номер из-за того что в изначальной логике запроса есть умножение на 10 номера страницы, который следовательно не может быть 0
      if (realPage >= startPage + 4 && realPage <= endPage - 4) {
        //  случай когда нужно что бы справа и слева одновременно были кнопки с точками
        isVisible =
          (i <= realPage + 1 && i >= realPage - 1) ||
          i === startPage ||
          i === endPage;
        isDots = i === realPage + 2 || i === realPage - 2;
      } else if (realPage <= startPage + 3) {
        // логика для 4 первых страниц
        isVisible = i <= startPage + 4 || i === endPage || i === startPage;
        isDots = i === startPage + 5;
      } else if (realPage >= endPage - 3) {
        // логика для 4 последних страниц
        isVisible = i >= endPage - 4 || i === startPage || i === endPage;
        isDots = i === endPage - 5;
      }

      if (isDots) {
        buttons.push(
          <div
            className={clsx(
              'w-[36px] rounded-sm border-2 border-solid p-2 text-center text-white_light duration-300 hover:border-hover hover:bg-hover md:w-[40px] smOnly:text-xs',
              isActive ? 'border-hover bg-hover' : 'border-primary bg-primary',
            )}
            key={i}
          >
            ...
          </div>,
        );
      }

      if (isVisible) {
        buttons.push(
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

    return buttons;
  }, [startPage, endPage, page, handlePageClick]);

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
          {paginationButtons}
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
