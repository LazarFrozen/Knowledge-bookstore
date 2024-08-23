import PaginationButton from "./PaginationButton";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utilities/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="mb-10 flex items-center justify-between">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={previousPage}
        text="Previous"
        icon={<MdNavigateBefore />}
      />
      <p className="text-xl">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>{" "}
      <PaginationButton
        disabled={currentPage === pageCount}
        onClick={nextPage}
        text="Next"
        icon={<MdNavigateNext />}
      />
    </div>
  );
}

export default Pagination;
