"use client";

import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signUp } from "../../actions/auth";
import { SignUpInput } from "@/utils/types";
import { useRouter } from "next/navigation";
import { Watch } from "react-loader-spinner";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const user = useTypedSelector((state) => state.user);

  const dispatch = useTypedDispatch();
  const router = useRouter();

  const onSubmit = async (data: SignUpInput) => {
    console.log("Registration submitted:", data);
    const user = await dispatch(signUp(data));
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
            <label htmlFor="firstName" className="text-white block mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="p-2 rounded-md border border-white w-full text-black"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="text-white block mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="p-2 rounded-md border border-white w-full text-black"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

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
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default Registration;
