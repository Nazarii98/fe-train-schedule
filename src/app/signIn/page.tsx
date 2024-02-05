"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { login } from "../actions/auth";
import { SignInInput } from "@/utils/types";
import { useRouter } from "next/navigation";
import { Watch } from "react-loader-spinner";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const dispatch = useTypedDispatch();
  const user = useTypedSelector((state) => state.user);

  const onSubmit = async (data: SignInInput) => {
    const user = await dispatch(login(data));
    if (user.role === "user") {
      router.push("/aboutUser");
    } else if (user.role === "admin") {
      router.push("/aboutAdmin");
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-around gap-4 p-4 rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2 overflow-y-auto">
      {user.isLoading ? (
        <div className="m-auto">
          <Watch
            visible={true}
            height="100%"
            width="160"
            radius="48"
            color="#c74822"
            ariaLabel="watch-loading"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="p-2 rounded-md border border-white w-full text-black"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-white block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="p-2 rounded-md border border-white w-full text-black"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-800 transition-all duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
