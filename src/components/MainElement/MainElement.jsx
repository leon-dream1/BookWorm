import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const MainElement = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainElement;
