import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="flex h-full justify-center bg-mainBgColor pt-[130px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
