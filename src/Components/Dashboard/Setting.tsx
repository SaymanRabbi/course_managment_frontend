import DashboardCard from "./DashboardCard";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import HotToast from "../../utils/HotToast";
import { useState } from "react";
interface FormData {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: number;
  occupation: string;
  displayName: string;
  biography: string;
}
const Setting = () => {
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
  const onSubmit = (data: FormData) => {
    setToast({
      message: "Your Profile has been Updated",
      type: "success",
      duration: 2000,
    });
    reset();
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
              {...register("firstName", {
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
            {errors.firstName && (
              <p className="text-error text-base">{errors.firstName.message}</p>
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
              {...register("lastName", {
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
            {errors.lastName && (
              <p className="text-error text-base">{errors.lastName.message}</p>
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
              {...register("userName", {
                required: "User Name was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "User Name should be a string",
                },
                minLength: {
                  value: 3,
                  message: "User Name should be 3 characters long",
                },
              })}
            />
            {errors.userName && (
              <p className="text-error text-base">{errors.userName.message}</p>
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
              {...register("phoneNumber", {
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
            {errors.phoneNumber && (
              <p className="text-error text-base">
                {errors.phoneNumber.message}
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
              {...register("occupation", {
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
            {errors.occupation && (
              <p className="text-error text-base">
                {errors.occupation.message}
              </p>
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
              {...register("biography", {
                required: "Biography was Required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Biography should be a string",
                },
                minLength: {
                  value: 20,
                  message: "Biography should be 20 characters long",
                },
              })}
            />
            {errors.biography && (
              <p className="text-error text-base">{errors.biography.message}</p>
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
