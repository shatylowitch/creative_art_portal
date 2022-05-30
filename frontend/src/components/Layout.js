import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";
import Navbar from "./Navbar";

function Layout() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default Layout;
