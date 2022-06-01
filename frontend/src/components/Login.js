import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { login } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        formData
      );
      const user = jwt_decode(data);
      dispatch(login({ token: data, user }));
      localStorage.setItem("token", data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="login-signup m-auto text-center login-page">
          <main className="w-100 m-auto">
            <form
              className="the-login-form d-flex flex-column gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
            </form>
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Login;
