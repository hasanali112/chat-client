/* eslint-disable react/jsx-sort-props */
import { Button } from "@heroui/button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gradient-to-r from-[#0b0608]  to-[#121e2e] text-white min-h-screen pt-20">
      <h1 className="text-3xl text-center ">Login</h1>
      <p className="text-center mt-2 mb-5">Enter your valid credentials</p>
      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border-t border-gray-700 p-10 w-[30%] mx-auto rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="border border-gray-600 bg-transparent rounded-2xl p-3 w-full outline-none"
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="border border-gray-600 bg-transparent rounded-2xl p-3 w-full outline-none"
              placeholder="Enter your email..."
            />
          </div>
          <Button className="mt-5" color="primary" size="lg" type="submit">
            Login
          </Button>
        </form>
        <p className="text-center mt-4">
          Have no account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
