import { FC, useCallback, useMemo } from 'react';
import { PaginationButton } from './PaginationButton';
import { getPaginationButtons } from '../utils/getPaginationButtons';
import { PaginationControlButtons } from './PaginationControlButtons';

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
    return getPaginationButtons(startPage, endPage, page);
  }, [startPage, endPage, page]);

  return (
    <div className="container mb-10">
      <PaginationControlButtons
        handleDecreasePage={handleDecreasePage}
        handleIncreasePage={handleIncreasePage}
        page={page}
        startPage={startPage}
        endPage={endPage}
      >
        <div className="grid grid-cols-7 gap-[4px] md:gap-2 ">
          {paginationButtons.map((button) => (
            <PaginationButton
              key={button.key}
              button={button.button}
              isActive={button.isActive}
              pageNumber={button.key}
              onClick={() => handlePageClick(button.key)}
            />
          ))}
        </div>
      </PaginationControlButtons>
    </div>
  );
};
