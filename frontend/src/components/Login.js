import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { login } from "../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
    <div className="form-container">
      {!isAuthenticated ? (
        <div className="signup-container login-signup">
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="name">Name:</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <div>Name is required</div>} */}
            <label htmlFor="email">Email:</label>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <div>Email is required</div>}
            <label htmlFor="password">password:</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <div>Password is required</div>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <Navigate to="/" />
      )}
      </div>
    </>
  );
}

export default Login;
