import DashboardCard from "./DashboardCard";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import HotToast from "../../utils/HotToast";
import { useState } from "react";
import { useUserStore } from "../../Store/UserStore";
interface FormData {
  name: string;
  lastname: string;
  UserName: string;
  PhoneNumber: number;
  ExpartIn: string;
  displayName: string;
  Biography: "string";
}
const Setting = () => {
  const { user, updateUserProfile, success, clearMessages } = useUserStore(
    (state) => state
  );
  console.log(user);
  const [toast, setToast] = useState({
    message: "",
    type: null as "success" | "error" | "warning" | "loading" | null,
    duration: 0,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    console.log(data);
    await updateUserProfile(localStorage.getItem("token"), data);
    if (success) {
      setToast({ message: "Profile Updated", type: "success", duration: 5000 });
      reset();
      clearMessages();
    }
  };
  return (
    <DashboardCard title="Settings">
      {/* -----toast----- */}
      {toast.type && (
        <HotToast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
        />
      )}
      {/* -----toast----- */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* -----input filed ---- */}
        <div className=" grid grid-cols-12 gap-4">
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="firstName" className="text-textPrimary">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="profile_input"
              placeholder="First Name"
              {...register("name", {
                required: "First Name was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "First Name should be a string",
                },
                minLength: {
                  value: 2,
                  message: "First Name should be 2 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="text-error text-base">{errors.name.message}</p>
            )}
          </div>
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="lastName" className="text-textPrimary">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="profile_input"
              placeholder="Last Name"
              {...register("lastname", {
                required: "Last Name was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Last Name should be a string",
                },
                minLength: {
                  value: 3,
                  message: "Last Name should be 3 characters long",
                },
              })}
            />
            {errors.lastname && (
              <p className="text-error text-base">{errors.lastname.message}</p>
            )}
          </div>
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="userName" className="text-textPrimary">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="profile_input"
              placeholder="User Name"
              {...register("UserName", {
                required: "User Name was Required",
                pattern: {
                  value: /^(?=.*[A-Za-z])[A-Za-z0-9]+$/,
                  message:
                    "User Name should contain at least one letter and can include letters and numbers",
                },
                minLength: {
                  value: 3,
                  message: "User Name should be 3 characters long",
                },
              })}
            />
            {errors.UserName && (
              <p className="text-error text-base">{errors.UserName.message}</p>
            )}
          </div>
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="phone" className="text-textPrimary">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className="profile_input"
              placeholder="Phone Number"
              {...register("PhoneNumber", {
                required: "Phone Number was Required",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Phone Number should be a number",
                },
                minLength: {
                  value: 11,
                  message: "Phone Number should be 11 characters long",
                },
              })}
            />
            {errors.PhoneNumber && (
              <p className="text-error text-base">
                {errors.PhoneNumber.message}
              </p>
            )}
          </div>
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="skill" className="text-textPrimary">
              Skill/Occupation
            </label>
            <input
              type="text"
              id="skill"
              className="profile_input"
              placeholder="Skill/Occupation"
              {...register("ExpartIn", {
                required: "Occupation was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Occupation should be a string",
                },
                minLength: {
                  value: 5,
                  message: "Occupation should be 5 characters long",
                },
              })}
            />
            {errors.ExpartIn && (
              <p className="text-error text-base">{errors.ExpartIn.message}</p>
            )}
          </div>
          <div className="md:col-span-6 col-span-12">
            <label htmlFor="display" className="text-textPrimary">
              Display Name Publicly As
            </label>
            <input
              type="text"
              id="display"
              className="profile_input"
              placeholder="Display Name Publicly As"
              {...register("displayName", {
                required: "Display Name was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Display Name should be a string",
                },
                minLength: {
                  value: 5,
                  message: "Display Name should be 5 characters long",
                },
              })}
            />
            {errors.displayName && (
              <p className="text-error text-base">
                {errors.displayName.message}
              </p>
            )}
          </div>
          <div className="col-span-12">
            <label htmlFor="bio" className="text-textPrimary">
              Biography
            </label>
            <textarea
              id="bio"
              className="profile_input resize-none"
              placeholder="Display Name Publicly As"
              cols={30}
              rows={8}
              {...register("Biography", {
                required: "Biography was Required",
                minLength: {
                  value: 20,
                  message: "Biography should be 20 characters long",
                },
              })}
            />
            {errors.Biography && (
              <p className="text-error text-base">{errors.Biography.message}</p>
            )}
          </div>
        </div>
        {/* -----input filed ---- */}
        {/* ------button */}
        <div className="flex justify-end mt-8 w-[150px]">
          <Button
            className=" !py-3 bg-gradient-to-r from-rgbFrom to-rgbTo"
            type="submit"
          >
            Save
          </Button>
        </div>
        {/* ------button */}
      </form>
    </DashboardCard>
  );
};

export default Setting;
