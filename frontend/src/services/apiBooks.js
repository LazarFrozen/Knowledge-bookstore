import { KEY } from "../utilities/constants";

// Loading books data (12 per page)
export async function getBooks({ page }) {
  const url = `${KEY}/bookses?page=${page - 1}&size=12`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    const data = result._embedded.bookses;

    const pageInfo = result.page;

    const numOfItems = pageInfo.totalElements;

    return { data, pageInfo, numOfItems };
  } catch (err) {
    throw new Error("Error:", err);
  }
}

// Loading all books data for search
export async function getSearch() {
  const url = `${KEY}/bookses?page=0&size=80`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();

    const data = result._embedded.bookses;

    return data;
  } catch (err) {
    throw new Error("Error:", err);
  }
}
