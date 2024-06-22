import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <div className="bg-yellow-50">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainContainer;
