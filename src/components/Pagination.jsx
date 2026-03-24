import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ currentPage = 1, totalPages, onPageChange }) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="btn-ghost flex items-center gap-2 w-fit"
      >
        <BsChevronLeft className="text-base" />
        Previous
      </button>

      <span className="flex items-center justify-center py-2 rounded-md bg-primary-200/20 px-3 text-sm font-medium text-primary-200">
        {currentPage}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="btn-ghost flex items-center gap-2 w-fit"
      >
        Next
        <BsChevronRight className="text-base" />
      </button>
    </div>
  );
};

export default Pagination;
