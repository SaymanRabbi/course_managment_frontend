// import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/card/card1.jpg";
import Button from "../Button/Button";
// interface Props {}
const PerchesCourseCard = () => {
  return (
    <div className="p-[18px] rounded-[12px] shadow-lg bg-bgPrimary/10 md:col-span-12 col-span-12">
      <div className=" flex flex-wrap m-[-8px] md:flex-row flex-col">
        {/* -----image---- */}

        <div className=" p-[8px] flex-grow-0 md:max-w-[41%] max-w-[100%] md:basis-[41%] basis-[100%] m-0">
          <img
            src={img}
            alt=""
            className=" w-[100%] object-contain aspect-[3/2] rounded-[20px] "
          />
        </div>
        {/* -----image---- */}
        <div className=" p-[20px] flex-grow-0 md:max-w-[59%] max-w-[100%] md:basis-[59%] basis-[100%] m-0 text-textPrimary flex flex-col justify-center">
          {/* ----tittle--- */}
          <div className=" text-[20px] font-[700]">
            <h2>Python 100 Days</h2>
            <h2>Sayman Rabbi</h2>
          </div>
          {/* ----tittle--- */}
          {/* -----percentense */}
          <div className=" flex gap-x-6 mt-3 items-center">
            <div className="bg-gradient-to-r from-rgbFrom to-rgbTo w-[80%] h-[10px] rounded-[20px]"></div>
            <h2 className=" text-[18px] font-[700]">80%</h2>
          </div>
          {/* -----percentense */}
          {/* ----Button--- */}
          <div className=" flex gap-x-4">
            <Link to={`/dashboard/module/video/${10}`}>
              <Button className=" bg-gradient-to-r from-rgbFrom to-rgbTo text-textSecondary !py-3 w-full mt-4 ">
                Start Learning
              </Button>
            </Link>
            <Link to={`/dashboard/module/video/${10}`}>
              <Button className=" bg-bgPrimary/20 text-textSecondary !py-3 w-full mt-4">
                Outline
              </Button>
            </Link>
          </div>
          {/* ----Button--- */}
        </div>
      </div>
    </div>
  );
};

export default PerchesCourseCard;
