import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import Button from "../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

import FormContainer from "../Components/FormContainer/FormContainer";
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
    <FormContainer title="Forgot Password">
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
          <p className=" text-error text-base">{errors.password.message}</p>
        )}
        {success && <Toast message={messages} type={true} />}
        {success === false && <Toast message={messages} type={false} />}
        {serverError && <Toast message={serverError} type={false} />}
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-rgbFrom to-rgbTomb-[15px]"
        >
          {isLoading ? "Loading..." : "Next"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default ForgotPassCode;
