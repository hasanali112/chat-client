/* eslint-disable no-console */
/* eslint-disable react/jsx-sort-props */
import { useState, ChangeEvent } from "react";
import { Button } from "@heroui/button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { useRegisterUserMutation } from "@/redux/features/auth/auth.api";
import { verifyToken } from "@/helper/jwtHelper";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/auth.slice";

const Register = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    for (const image of imageFile) {
      formData.append("image", image);
    }

    try {
      const res = await registerUser(formData).unwrap();
      const user = verifyToken(res.data.accessToken);

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in", { duration: 2000 });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFile((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFile((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gradient-to-r from-[#0b0608] to-[#121e2e] text-white min-h-screen pt-10 pb-10">
      <h1 className="text-3xl text-center font-semibold">Register</h1>
      <p className="text-center mt-2 mb-5 text-gray-300">
        Enter your valid credentials
      </p>

      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border border-gray-700 p-10 w-[35%] mx-auto rounded-xl shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full"
        >
          {/* Full Name */}
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name*
              </label>
              <input
                id="fullName"
                type="text"
                {...register("fullName", { required: true })}
                className="border border-gray-600 bg-white/5 rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your full name..."
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="userName" className="text-sm font-medium">
                Username*
              </label>
              <input
                id="userName"
                type="text"
                {...register("userName", { required: true })}
                className="border border-gray-600 bg-white/5 rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="johndoe123"
              />
            </div>
          </div>

          {/* Email and Password */}
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-medium">
                Email*
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="border border-gray-600 bg-white/5 rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-sm font-medium">
                Password*
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className="border border-gray-600 bg-white/5 rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            {/* Username */}

            {/* Image Upload */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="image" className="text-sm font-medium">
                Profile Image
              </label>
              <label htmlFor="image" className="cursor-pointer h-full">
                <div
                  className={`border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center h-[100px] hover:border-primary transition-all relative overflow-hidden`}
                >
                  <FiUpload className="text-2xl mb-2 text-gray-400" />
                  <span className="text-center">Click to upload</span>
                  <span className="text-xs text-gray-400 mt-1">
                    PNG, JPG (max. 5MB)
                  </span>

                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    accept="image/png, image/jpeg, image/jpg"
                    {...register("image")}
                    onChange={handleImageChange}
                  />
                </div>
              </label>
              <div className="flex gap-2 mt-2">
                {imagePreviews.length > 0 &&
                  imagePreviews.map((imageDataUrl, index) => (
                    <div
                      key={imageDataUrl}
                      className="border border-dashed rounded-md p-1 size-20 relative"
                    >
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-200"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                      <img
                        src={imageDataUrl}
                        alt="preview"
                        width={80}
                        height={80}
                        className="rounded-md h-full w-full object-center object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <Button
            className="mt-4 py-6 text-lg font-medium hover:scale-[1.02] transition-transform"
            color="primary"
            size="lg"
            type="submit"
            fullWidth
          >
            Create Account
          </Button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
