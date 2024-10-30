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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <button
        onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => setCurrentPage((prev: number) => prev + 1)}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </>
  );
};
