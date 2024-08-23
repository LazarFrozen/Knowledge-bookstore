function SearchBook({ search, onClick }) {
  return (
    <ul
      className="z-10 w-searchWidth cursor-pointer border-b-2"
      onClick={onClick}
    >
      <div className="flex bg-white shadow-xl hover:bg-gray-200">
        <div className="p-2">
          <img src={search.image} alt="books" className="h-24 w-16" />
        </div>
        <div className="mt-2 h-16 px-6">
          <h3 className="font-extrabold">{search.title}</h3>
          <h4>{search.author}</h4>
        </div>
      </div>
    </ul>
  );
}

export default SearchBook;
