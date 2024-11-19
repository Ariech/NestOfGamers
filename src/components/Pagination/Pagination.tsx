import { useEffect } from "react";
import { PaginationProps } from "../../interfaces/interfaces";

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

  if (!hasPreviousPage && !hasNextPage && gamesData.results.length === 0) {
    return (
      <div className="flex justify-center items-center mt-24">
        <p className="text-4xl font-bold text-textPrimary">No games found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      {
        <button
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
          aria-label="Previous Page"
          disabled={!hasPreviousPage}
        >
          <img
            src="/assets/arrow-sm-left-svgrepo-com.svg"
            alt="Previous page"
            className={`w-24 h-24 filter invert ${
              hasPreviousPage
                ? "opacity-100 hover:opacity-80"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
        </button>
      }

      <span className="text-xl font-bold">{currentPage}</span>

      {
        <button
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
          aria-label="Next Page"
          disabled={!hasNextPage}
        >
          <img
            src="/assets/arrow-sm-right-svgrepo-com.svg"
            alt="Next page"
            className={`w-24 h-24 filter invert ${
              hasNextPage
                ? "opacity-100 hover:opacity-80"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
        </button>
      }
    </div>
  );
};
