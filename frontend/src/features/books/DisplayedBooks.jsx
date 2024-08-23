import BookItem from "./BookItem";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import { useBook } from "./useBook";
import BooksSorting from "./BooksSorting";
import { useSearchParams } from "react-router-dom";

function DisplayedBooks() {
  const { data, isLoading } = useBook();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedBooks = data.sort((a, b) =>
    typeof a[field] === "number" && typeof b[field] === "number"
      ? (a[field] - b[field]) * modifier
      : typeof a[field] === "string" && typeof b[field] === "string"
        ? a[field].localeCompare(b[field]) * modifier
        : 0,
  );

  return (
    <div className="mb-10 mt-20 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        <Heading heading="Books" />
        <BooksSorting />
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {sortedBooks.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default DisplayedBooks;
