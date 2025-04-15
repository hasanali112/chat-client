/* eslint-disable no-console */
/* eslint-disable react/jsx-sort-props */
import { Button } from "@heroui/button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { verifyToken } from "@/helper/jwtHelper";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { setUser } from "@/redux/features/auth/auth.slice";
import { useAppDispatch } from "@/redux/hook";

const Login = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken);

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in", { duration: 2000 });
      if (res.data.accessToken) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
          <Button
            isLoading={isLoading}
            className="mt-5"
            color="primary"
            size="lg"
            type="submit"
          >
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
