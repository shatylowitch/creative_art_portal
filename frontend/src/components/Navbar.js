import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <div className="nav">
        <div>LOGO</div>
        <div className="nav-items">
          <Link to="/protected/profile">Profile</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <Link
              to="/"
              onClick={() => {
                localStorage.removeItem("token");
                dispatch(logout());
              }}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
