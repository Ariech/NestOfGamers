interface PaginationProps {
  currentPage: number;
  setCurrentPage: any;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <>
      <button
        onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={() => setCurrentPage((prev: number) => prev + 1)}>
        Next
      </button>
    </>
  );
};
