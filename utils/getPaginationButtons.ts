export const getPaginationButtons = (
  startPage: number,
  endPage: number,
  page: number,
) => {
  const buttons = [];

  let isVisible;
  let isDots;

  for (let i = startPage; i <= endPage; i++) {
    const isActive = i === page;

    if (page >= startPage + 4 && page <= endPage - 4) {
      isVisible =
        (i <= page + 1 && i >= page - 1) || i === startPage || i === endPage;
      isDots = i === page + 2 || i === page - 2;
    } else if (page <= startPage + 3) {
      isVisible = i <= startPage + 4 || i === endPage || i === startPage;
      isDots = i === startPage + 5;
    } else if (page >= endPage - 3) {
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
};
