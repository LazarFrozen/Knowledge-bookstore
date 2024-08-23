import { useSearchBook } from "../books/useSearchBook";
import BookItem from "../books/BookItem";
import Spinner from "../../ui/Spinner";

function HomeDisplayedBooks() {
  const { data, isLoading } = useSearchBook();

  if (isLoading) return <Spinner />;

  const selectedBooks = data.slice(22, 26);

  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">New &ndash; just arrived!</h1>
      <div className="mt-20 grid grid-cols-4 gap-5">
        {selectedBooks.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default HomeDisplayedBooks;
