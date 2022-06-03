import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-pic mh-80">
      <Navbar />
      <div className="custom-size-app mx-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
