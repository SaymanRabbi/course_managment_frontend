// YourForm.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import UAParser from "ua-parser-js";
import FormContainer from "../Components/FormContainer/FormContainer";
import useAuth from "../hooks/useAuth";
interface FormData {
  password: string;
  email: string;
  deviceIdentifier: string;
}
const Login: React.FC = () => {
  const { setAuth } = useAuth();
  const parser = new UAParser().getResult();
  const redirect = useNavigate();
  //  ------store user data
  const { clearMessages, getUser } = useUserStore((state) => state);
  const { isLoading, success, messages, serverError, user, token } =
    useUserStore((state) => state);

  //  ------store user data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // ------handel submit function-------
  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
        deviceIdentifier:
          parser?.browser?.name ||
          parser?.os?.name ||
          parser?.device?.model ||
          "unknown",
      };
      getUser(userData);
    } catch (error) {}
  };
  useEffect(() => {
    setTimeout(() => {
      if (success) {
        setAuth({ token: token, user: user, role: user?.role });
        clearMessages();
        redirect("/");
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
    <FormContainer title="Login">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]"
      >
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
          <p className="text-error  text-base">{errors.email.message}</p>
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
          <p className="text-error text-base">{errors.password.message}</p>
        )}
        <p className=" flex justify-end mb-[10px] text-link">
          <Link to="/forgot_pass">Forgot Password?</Link>
        </p>
        {success && <Toast message={messages} type={true} />}
        {success === false && <Toast message={messages} type={false} />}
        {serverError && <Toast message={serverError} type={false} />}
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px]"
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
        <div className=" flex justify-center">
          <small className=" text-textSecondary font-[400]">
            Don't Have a Account?
          </small>
          <Link
            to="/register"
            className=" capitalize ml-[8px] cursor-pointer text-[14px] text-link"
          >
            Register here
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default Login;
