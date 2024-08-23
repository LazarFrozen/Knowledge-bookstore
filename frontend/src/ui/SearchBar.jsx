import { useState } from "react";
import { useSearchBook } from "../features/books/useSearchBook";
import SearchBook from "./SearchBook";
import BookNotFound from "./BookNotFound";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function SearchBar({ onClose, isSearchOpen, setIsSearchOpen }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { data, isLoading } = useSearchBook();
  const ref = useOutsideClick(() => {
    onClose();
  });

  if (isLoading) return null;

  const searchedBooks = data.filter((book) =>
    book.title.toLowerCase().includes(search),
  );

  function handleOnChange(value) {
    setSearch(value);
  }

  function handleBookClick(bookId) {
    setSearch("");
    navigate(`books/${bookId}`);
    onClose();
  }

  return (
    <>
      <input
        className="mt-4 w-searchWidth rounded-lg p-4 font-jost"
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => handleOnChange(e.target.value)}
        onClick={() => setIsSearchOpen(true)}
      />
      {isSearchOpen && (
        <div
          ref={ref}
          className="absolute top-[83px] z-10 max-h-96 overflow-y-auto"
        >
          {search.length >= 2 ? (
            searchedBooks.length > 0 ? (
              searchedBooks.map((search) => (
                <SearchBook
                  search={search}
                  key={search.id}
                  onClick={() => handleBookClick(search.id)}
                />
              ))
            ) : (
              <BookNotFound />
            )
          ) : null}
        </div>
      )}
    </>
  );
}

export default SearchBar;
