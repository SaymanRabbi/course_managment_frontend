// YourForm.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import UAParser from "ua-parser-js";
interface FormData {
  password: string;
  email: string;
  deviceIdentifier: string;
}
const Login: React.FC = () => {
  const parser = new UAParser().getResult();
  const redirect = useNavigate();
  //  ------store user data
  const { clearMessages, getUser } = useUserStore((state) => state);
  const { isLoading, success, messages, serverError, user } = useUserStore(
    (state) => state
  );
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        clearMessages();
        redirect("/");
      }, 3000);
    }
  }, [success, messages, user]);
  // ------handel submit function-------
  return (
    <div
      className=" h-[100%] min-h-[87vh] bg-[url(../../../public/images/register/background.svg)] bg-no-repeat bg-[#010313]"
      style={{ backgroundPosition: "100% 15%" }}
    >
      <div className=" container pt-[200px] max-w-[1320px] mx-auto h-[100%]">
        <div className=" flex flex-wrap mx-[15px]">
          <div className=" grid grid-cols-12 w-[100%] pt-[40px]">
            <div className=" md:col-span-8 col-span-12 lg:col-span-6">
              <h2 className=" pb-[20px] font-[700] text-[64px] leading-[82px] capitalize text-[#b5acff]">
                SignIn
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-[#0a0a2bbf] md:px-[50px] py-[40px] rounded-[20px] px-[20px]"
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
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <p className=" flex justify-end mb-[10px] text-[#1976d2]">
                  <Link to="/forgot_pass">Forgot Password?</Link>
                </p>

                {success && <Toast message={messages} type={true} />}
                {success === false && <Toast message={messages} type={false} />}
                {serverError && <Toast message={serverError} type={false} />}
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="bg-gradient-to-r from-[#384fde] to-[#985cf0] mb-[15px]"
                >
                  {isLoading ? "Loading..." : "Login"}
                </Button>
                <div className=" flex justify-center">
                  <small className=" text-[#eee0ff] font-[400]">
                    Don't Have a Account?
                  </small>
                  <Link
                    to="/register"
                    className=" capitalize ml-[8px] cursor-pointer text-[14px] text-[#1976d2]"
                  >
                    Register here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
