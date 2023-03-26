import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export default function Pagination({ page, setPage, count, skip, pageCount }) {
  // handle prev btn
  const handlePrevious = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  // handle next btn
  const handleNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-700 bg-gray-800 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <div
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-900 cursor-pointer "
          onClick={() => handlePrevious()}
        >
          Previous
        </div>
        <div
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-900 cursor-pointer"
          onClick={() => handleNext()}
        >
          Next
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">{`${skip + 1}`}</span> to{" "}
            <span className="font-medium">{`${Math.min(
              skip + 12,
              count
            )}`}</span>{" "}
            of <span className="font-medium">{count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <div
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-900 focus:z-20 focus:outline-offset-0 cursor-pointer "
              onClick={() => handlePrevious()}
            >
              <span className="sr-only">Previous</span>
              <BiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="relative z-10 inline-flex items-center bg-gray-900 border-y border-1 border-white px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
              {page}
            </div>
            <div
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-900 focus:z-20 focus:outline-offset-0 cursor-pointer"
              onClick={() => handleNext()}
            >
              <span className="sr-only">Next</span>
              <BiChevronRight className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
