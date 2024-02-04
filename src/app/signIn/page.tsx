"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const onSubmit = (data: any) => {
    console.log("Login submitted:", data);
  };

  return (
    <div className="flex flex-1 flex-col justify-around gap-4 p-4 rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2 overflow-y-auto">
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
    </div>
  );
};

export default SignIn;
