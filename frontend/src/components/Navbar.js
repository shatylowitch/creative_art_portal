import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="navigation-section">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" linkTo="/">
          CREATIVE ART PORTAL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav ms-auto">
            <div className="nav-link">
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
      </nav>
    </div>
  );
}

export default Navbar;
