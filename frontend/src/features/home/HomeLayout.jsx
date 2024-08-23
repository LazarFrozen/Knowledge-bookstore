import AboutCompay from "./AboutCompay";
import Carousel from "./Carousel";
import HomeDisplayedBooks from "./HomeDisplayedBooks";

function HomeLayout() {
  return (
    <>
      <Carousel />
      <div className="w-mainWidth flex flex-col items-center justify-center">
        <HomeDisplayedBooks />
        <AboutCompay />
      </div>
    </>
  );
}

export default HomeLayout;
