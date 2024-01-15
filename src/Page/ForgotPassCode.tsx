import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import Button from "../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
interface FormData {
  code: string;
  _id: string;
  password: string;
}

const ForgotPassCode: React.FC = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  //  ------store user data
  const {
    isLoading,
    success,
    messages,
    serverError,
    user,
    confirmPasswordReset,
    clearMessages,
  } = useUserStore((state) => state);
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
      const formData = {
        code: data.code,
        _id: id,
        password: data.password,
      };
      confirmPasswordReset(formData);
      //   passwordReset(email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (success) {
      reset();
    }
    setTimeout(() => {
      if (success && messages === "Password updated successfully") {
        clearMessages();
        redirect(`/login`);
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
    <div
      className=" h-[100%] min-h-[87vh] bg-[url(../../../public/images/register/background.svg)] bg-no-repeat"
      style={{ backgroundPosition: "100% 15%" }}
    >
      <div className=" container pt-[200px] max-w-[1320px] mx-auto h-[100%]">
        <div className=" flex flex-wrap mx-[15px]">
          <div className=" grid grid-cols-12 w-[100%] pt-[40px]">
            <div className=" md:col-span-8 col-span-12 lg:col-span-6">
              <h2 className=" pb-[20px] font-[700] text-[64px] leading-[82px] capitalize text-[#b5acff]">
                Forgot Password
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-bgPrimary md:px-[50px] py-[40px] rounded-[20px] px-[20px]"
              >
                {/* ----Code input----- */}
                <input
                  type="text"
                  placeholder="Code"
                  className="primary_input"
                  {...register("code", {
                    required: "Code is required",
                    minLength: {
                      value: 6,
                      message: "Code must have at least 6 characters",
                    },
                  })}
                />
                {errors.code && (
                  <p className="text-error text-base">{errors.code.message}</p>
                )}
                {/* ----password input----- */}
                <input
                  type="password"
                  placeholder="New password"
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
                  <p className=" text-error text-base">
                    {errors.password.message}
                  </p>
                )}
                {success && <Toast message={messages} type={true} />}
                {success === false && <Toast message={messages} type={false} />}
                {serverError && <Toast message={serverError} type={false} />}
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="bg-gradient-to-r from-[#384fde] to-[#985cf0] mb-[15px]"
                >
                  {isLoading ? "Loading..." : "Next"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassCode;
