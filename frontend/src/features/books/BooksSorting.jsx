import SortBy from "../../ui/SortBy";

function BooksSorting() {
  return (
    <SortBy
      options={[
        { value: "title-asc", label: "Sort by title (A-Z)" },
        { value: "title-desc", label: "Sort by title (Z-A)" },
        { value: "price-asc", label: "Sort by price (low first)" },
        { value: "price-desc", label: "Sort by price (high first)" },
      ]}
    />
  );
}

export default BooksSorting;
