import { FC, useCallback, useMemo } from 'react';
import { PaginationButton } from './PaginationButton';
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
    const buttons = [];

    let isVisible; //определяет кнопки с цифрами, которые видны
    let isDots; //определяет кнопки с точками

    for (
      let i = startPage;
      i <= endPage;
      i++ // проходим циклом от 1 страницы до последней
    ) {
      const isActive = i === page; // кнопка является активной, если номер страницы из пропсов совпадает с её ключём
      if (page >= startPage + 4 && page <= endPage - 4) {
        //  случай когда нужно что бы справа и слева одновременно были кнопки с точками
        isVisible =
          (i <= page + 1 && i >= page - 1) || i === startPage || i === endPage;
        isDots = i === page + 2 || i === page - 2;
      } else if (page <= startPage + 3) {
        // логика для 4 первых страниц
        isVisible = i <= startPage + 4 || i === endPage || i === startPage;
        isDots = i === startPage + 5;
      } else if (page >= endPage - 3) {
        // логика для 4 последних страниц
        isVisible = i >= endPage - 4 || i === startPage || i === endPage;
        isDots = i === endPage - 5;
      }

      if (isDots) {
        buttons.push({
          key: i,
          button: false,
          isActive: isActive,
        });
      }

      if (isVisible) {
        buttons.push({
          key: i,
          button: true,
          isActive: isActive,
        });
      }
    }

    return buttons;
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
