import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

export default function DefaultLayout() {
  const { loading } = useContext(GlobalContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}
