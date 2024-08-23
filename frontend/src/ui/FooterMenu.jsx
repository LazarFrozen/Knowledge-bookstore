import { NavLink } from "react-router-dom";

function FooterMenu() {
  return (
    <div className="flex items-center gap-20 pt-4">
      <ul className="flex flex-col items-center gap-2">
        <li className="navLinks">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="navLinks">
          <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-center gap-2">
        <li className="navLinks">
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li className="navLinks">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterMenu;
