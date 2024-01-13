// YourForm.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import { Link } from "react-router-dom";
interface FormData {
  username: string;
  password: string;
  email: string;
}
const Register: React.FC = () => {
  //  ------store user data
  const { createUser, clearMessages } = useUserStore((state) => state);
  const { isLoading, success, messages, serverError } = useUserStore(
    (state) => state
  );
  // console.log(success,user);
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (success) {
      reset();
    }
    setTimeout(() => {
      clearMessages();
    }, 1000);
  }, [success, messages]);

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
                SignUp
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-[#0a0a2bbf] md:px-[50px] py-[40px] rounded-[20px] px-[20px]"
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
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
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
                {success && <Toast message={messages} type={true} />}
                {success === false && <Toast message={messages} type={false} />}
                {serverError && <Toast message={serverError} type={false} />}
                <button
                  disabled={isLoading}
                  type="submit"
                  className="primary_button bg-gradient-to-r from-[#384fde] to-[#985cf0]"
                >
                  {isLoading ? "Loading..." : "Register"}
                </button>
                <div className=" flex justify-center">
                  <small className=" text-[#eee0ff] font-[400]">
                    Already have an account?
                  </small>
                  <Link
                    to="/login"
                    className=" capitalize ml-[8px] cursor-pointer text-[14px] text-[#1976d2]"
                  >
                    Login here
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

export default Register;
