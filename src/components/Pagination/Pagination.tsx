import { useEffect } from "react";
import { GamesData } from "../../interfaces/interfaces";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: any;
  gamesData: GamesData;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  gamesData,
}: PaginationProps) => {
  const hasNextPage = gamesData && gamesData.next;
  const hasPreviousPage = currentPage > 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (!hasPreviousPage && !hasNextPage) {
    return (
      <div className="flex justify-center items-center mt-8">
        <p className="text-xl font-bold text-textPrimary">No games found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      {hasPreviousPage && (
        <button
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
          aria-label="Previous Page"
        >
          <img
            src="/assets/arrow-sm-left-svgrepo-com.svg"
            alt="Previous page"
            className="w-24 h-24 filter invert hover:opacity-80"
          />
        </button>
      )}

      <span className="text-xl font-bold">{currentPage}</span>

      {hasNextPage && (
        <button
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
          aria-label="Next Page"
        >
          <img
            src="/assets/arrow-sm-right-svgrepo-com.svg"
            alt="Previous page"
            className="w-24 h-24 filter invert hover:opacity-80"
          />
        </button>
      )}
    </div>
  );
};
