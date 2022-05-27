import axios from "axios";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        formData
      );

      localStorage.setItem("token", data);

      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <div>Name is required</div>}
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <div>Email is required</div>}
        <label htmlFor="password">password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <div>Password is required</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
