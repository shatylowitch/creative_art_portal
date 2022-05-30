import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default Protected;
