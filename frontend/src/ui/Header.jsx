import HeaderMenu from "./HeaderMenu";
import MainNav from "./MainNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed z-10 flex w-full justify-evenly border-b-2 bg-primaryColor">
      <Logo />
      <MainNav />
      <HeaderMenu />
    </header>
  );
}

export default Header;
