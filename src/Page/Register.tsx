// YourForm.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import FormContainer from "../Components/FormContainer/FormContainer";
interface FormData {
  username: string;
  password: string;
  email: string;
}
const Register: React.FC = () => {
  //  ------store user data
  const { createUser, clearMessages } = useUserStore((state) => state);
  const redirect = useNavigate();
  const { isLoading, success, messages, serverError, user } = useUserStore(
    (state) => state
  );
  //  ------store user data
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  // ------handel submit function-------
  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      const userData = {
        name: data.username,
        email: data.email,
        password: data.password,
      };
      createUser(userData);
    } catch (error) {}
  };
  useEffect(() => {
    setTimeout(() => {
      if (success) {
        reset();
        clearMessages();
        redirect("/login");
      }
      if (!success && messages !== undefined) {
        clearMessages();
      }
      if (!success && serverError) {
        clearMessages();
      }
    }, 3000);
  }, [success, messages, user]);

  // ------handel submit function-------
  return (
    <FormContainer title="Register">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-bgPrimary md:px-[50px] py-[40px] rounded-[20px] px-[20px]"
      >
        {/* ---name input----- */}
        <input
          type="text"
          placeholder="Username"
          className="primary_input"
          {...register("username", {
            required: "User Name is required",
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.username && (
          <p className=" text-error text-base">{errors.username.message}</p>
        )}
        {/* ----email input----- */}
        <input
          type="email"
          placeholder="Email"
          className="primary_input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email && (
          <p className=" text-error text-base">{errors.email.message}</p>
        )}
        {/* ----password input----- */}
        <input
          type="password"
          placeholder="Password"
          className="primary_input"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className=" text-error text-base">{errors.password.message}</p>
        )}
        {success && <Toast message={messages} type={true} />}
        {success === false && <Toast message={messages} type={false} />}
        {serverError && <Toast message={serverError} type={false} />}
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px]"
        >
          {isLoading ? "Loading..." : "Register"}
        </Button>
        <div className=" flex justify-center">
          <small className=" text-textSecondary font-[400]">
            Already have an account?
          </small>
          <Link
            to="/login"
            className=" capitalize ml-[8px] cursor-pointer text-[14px] text-link"
          >
            Login here
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default Register;
