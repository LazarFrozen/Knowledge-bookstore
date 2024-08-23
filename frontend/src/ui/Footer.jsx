import FooterMenu from "./FooterMenu";
import Logo from "./Logo";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primaryColor flex justify-center border-t-2">
      <div className="flex flex-col items-center justify-center">
        <FooterMenu />
        <div className="flex items-center justify-center">
          <Logo />
          <p>
            &#169; Copyright &ndash; All right reserved by Knowledge bookstore{" "}
            {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
