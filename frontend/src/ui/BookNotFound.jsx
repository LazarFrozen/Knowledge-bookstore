import { IoMdCloseCircleOutline } from "react-icons/io";

function BookNotFound() {
  return (
    <ul className="z-10 w-searchWidth border-b-2">
      <div className="flex bg-white shadow-xl">
        <div className="flex items-center p-2 text-5xl">
          <IoMdCloseCircleOutline className="text-red-500" />
        </div>
        <div className="mb-2 mt-1 flex h-16 items-center px-6">
          <h4 className="text-2xl font-semibold">Book not found</h4>
        </div>
      </div>
    </ul>
  );
}

export default BookNotFound;
