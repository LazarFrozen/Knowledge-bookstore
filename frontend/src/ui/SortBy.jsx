import { useSearchParams } from "react-router-dom";
import SelectSorting from "./SelectSorting";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <SelectSorting options={options} value={sortBy} onChange={handleChange} />
  );
}

export default SortBy;
