import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="navigation-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/">
            <div className="app-logo fs-1">CREATIVE ART PORTAL</div>
          </Link>
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
              <div className="d-flex gap-4 nav-item nav-link m-3 fs-3 links">
                {!isAuthenticated ? (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/gallery">Gallery</Link>
                  </>
                ) : (
                  <>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/protected/profile">Profile</Link>
                    <Link
                      to="login"
                      onClick={() => {
                        localStorage.removeItem("token");

                        dispatch(logout());
                      }}
                    >
                      Logout
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
