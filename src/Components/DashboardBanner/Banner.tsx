import { IoMdBook } from "react-icons/io";
import { LuAward } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import Button from "../Button/Button";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  name: string;
  ernolledCourses: number;
  certificate: number;
  buttonTitle: string;
  children?: ReactNode;
}
const Banner: React.FC<Props> = ({
  className,
  name,
  ernolledCourses,
  certificate,
  buttonTitle,
  children,
}) => {
  return (
    <div className={`grid grid-cols-12 ${className}`}>
      <div className=" col-span-12 max-w-[100%]">
        <div className=" p-[40px] flex justify-between items-center flex-wrap rounded-[10px] bg-gradient-to-r from-rgbFrom to-rgbTo">
          <div className=" flex items-center flex-wrap justify-center">
            {/* ------dashboard left img----- */}
            <div className=" w-[120px] h-[120px] mr-[20px]">
              <img
                src="https://i.ibb.co/4Z6nJvR/Group-1.png"
                alt=""
                className=" w-full h-full object-cover border-[2px] rounded-full p-[4px] border-gray-50"
              />
            </div>
            {/* ------dashboard left img----- */}
            {/* ------dashboard left content----- */}
            <div>
              <h4 className=" font-[900] text-textPrimary text-[20px] mb-3 text-center sm:text-start">
                {name}
              </h4>
              <ul className=" flex gap-4">
                <li className=" flex items-center gap-x-2 text-textSecondary">
                  <IoMdBook className=" text-lg" />
                  <span>{ernolledCourses} Courses Enroled</span>
                </li>
                <li className=" flex items-center gap-x-2 text-textSecondary">
                  <LuAward className=" text-lg" />
                  <span>{certificate} Certificate</span>
                </li>
              </ul>
            </div>
            {/* ------dashboard left content----- */}
          </div>
          <div className=" flex justify-center mt-2 mx-auto sm:mx-0">
            {/* button */}
            <Button className=" bg-bgPrimary text-textSecondary border-[1px] border-bgPrimary hover:bg-transparent hover:text-textSecondary !py-[12px] flex items-center gap-2">
              {buttonTitle}
              <IoArrowForwardOutline className=" text-lg" />
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Banner;
