const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination text-center mb-10">
      <button
        className="btn btn-outline btn-warning me-10"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="page-info me-10">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-outline btn-warning btn-secondary"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
