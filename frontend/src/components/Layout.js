import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-pic">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
