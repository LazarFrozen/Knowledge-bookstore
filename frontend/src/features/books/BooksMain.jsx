import DisplayedBooks from "./DisplayedBooks";
import Pagination from "../../ui/Pagination";
import { useBook } from "./useBook";

function BooksMain() {
  const { numOfItems } = useBook();

  return (
    <div>
      <DisplayedBooks />
      <Pagination count={numOfItems} />
    </div>
  );
}

export default BooksMain;
