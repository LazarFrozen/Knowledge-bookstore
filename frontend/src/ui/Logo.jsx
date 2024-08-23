import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/home">
      <img
        src="/Knowledge-logo.png"
        alt="Knowledge bookstore logo"
        className="h-32 w-32"
      />
    </NavLink>
  );
}

export default Logo;
