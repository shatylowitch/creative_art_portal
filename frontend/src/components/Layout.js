import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="nav">
        <div>LOGO</div>
        <div className="nav-items">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default Layout;
