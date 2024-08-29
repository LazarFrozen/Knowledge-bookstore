import { useNavigate } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex h-svh justify-center bg-primaryColor pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Error: page not found</h1>
        <img src="Knowledge-logo.png" alt="Logo" className="pt-5" />
        <PrimaryButton content="Home page" onClick={() => navigate("/home")} />
      </div>
    </section>
  );
}

export default PageNotFound;
