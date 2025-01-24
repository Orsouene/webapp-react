import { Outlet } from "react-router-dom";
// Importo il Header
import Header from "../Components/Header";
// Importo il footer
import Footer from "../Components/Footer";
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
