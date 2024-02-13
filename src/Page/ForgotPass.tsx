// YourForm.tsx
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../Store/UserStore";
import Toast from "../Components/Toast";
import Button from "../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Components/FormContainer/FormContainer";
import { Link } from "react-router-dom";
interface FormData {
  email: string;
}
const ForgotPass: React.FC = () => {
  const redirect = useNavigate();
  //  ------store user data
  const { passwordReset, clearMessages } = useUserStore((state) => state);
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
      const email = data.email;
      passwordReset(email);
    } catch (error) {}
  };
  useEffect(() => {
    if (success) {
      reset();
    }
    setTimeout(() => {
      if (success && messages === "Code sent successfully") {
        clearMessages();
        redirect(`/forgotpasscode/${user?._id}`);
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
          <p className="text-error text-base">{errors.email.message}</p>
        )}
        <p className=" flex justify-end mb-[10px] text-link">
          <Link to="/login">Remember Password?</Link>
        </p>
        {/* ----password input----- */}
        {success && <Toast message={messages} type={true} />}
        {success === false && <Toast message={messages} type={false} />}
        {serverError && <Toast message={serverError} type={false} />}
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px]"
        >
          {isLoading ? "Loading..." : "Next"}
        </Button>
      </form>
    </FormContainer>
  );
};
export default ForgotPass;
