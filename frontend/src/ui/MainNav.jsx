import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";

function MainNav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeSearchModal = () => setIsSearchOpen(false);

  return (
    <nav className="flex w-auto flex-col items-center justify-center pl-44">
      <SearchBar
        onClose={closeSearchModal}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <ul className="mt-2 flex w-searchWidth items-center justify-center">
        <li className="navLinks">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="navLinks">
          <NavLink to="/books">Books</NavLink>
        </li>
        <li className="navLinks">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
