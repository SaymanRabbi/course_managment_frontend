// import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../Store/UserStore";
import Button from "../Button/Button";
// interface Props {}
const PerchesCourseCard = () => {
  const { courses } = useUserStore((state: any) => state);
  return (
    <Link
      to={`/dashboard/module/video/${courses[0]._id}`}
      className="p-[10px] rounded-[12px] shadow-lg bg-bgPrimary/10 md:col-span-12 col-span-12"
    >
      <div className=" flex flex-wrap m-[-8px] md:flex-row flex-col">
        {/* -----image---- */}

        <div className=" p-[8px] flex-grow-0 md:max-w-[41%] max-w-[100%] md:basis-[41%] basis-[100%] m-0">
          <img
            src={courses[0].image}
            alt=""
            className=" w-[100%] object-contain aspect-[3/2] rounded-[20px] h-auto"
          />
        </div>
        {/* -----image---- */}
        <div className=" p-[20px] flex-grow-0 md:max-w-[59%] max-w-[100%] md:basis-[59%] basis-[100%] m-0 text-textPrimary flex flex-col justify-center">
          {/* ----tittle--- */}
          <div className=" text-[20px] ">
            <h2 className=" font-[700]">{courses[0].title}</h2>
            <span className=" text-[14px] leading-2">
              {courses[0].description}
            </span>
          </div>
          {/* ----tittle--- */}
          {/* -----percentense */}
          <div className=" flex gap-x-6 mt-3 items-center">
            <div className="bg-gradient-to-r from-rgbFrom to-rgbTo w-[80%] h-[10px] rounded-[20px]"></div>
            <h2 className=" text-[18px] font-[700]">80%</h2>
          </div>
          {/* -----percentense */}
          {/* ----Button--- */}
          <div className=" w-[80%]">
            <Link to={`/dashboard/module/video/${courses[0]._id}`}>
              <Button className=" bg-gradient-to-r from-rgbFrom to-rgbTo text-textSecondary !py-2 w-full mt-4 ">
                Start Learning
              </Button>
            </Link>
          </div>
          {/* ----Button--- */}
        </div>
      </div>
    </Link>
  );
};

export default PerchesCourseCard;
