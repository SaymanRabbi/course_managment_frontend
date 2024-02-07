import img from "../../../public/images/card/rnext-thumb.png";
import { FiVideo } from "react-icons/fi";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";

const HomeCard = () => {
  const data = [
    {
      name: "React Next",
    },
    {
      name: "React Next",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="relative z-10 flex flex-col border-[.5px] border-bgPrimary p-4 bg-bgPrimary/20 rounded-[10px] w-full hover:scale-105 transition duration-700 ease-in-out">
            {/* Add your code here */}
            {/* ---image--- */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className=" relative min-h-[300px] w-[100%]">
                <img
                  src={img}
                  alt=""
                  className="absolute top-0 left-0 bottom-0 right-0 p-0 border-none m-auto block w-0 h-0 min-h-[100%] min-w-[100%] max-w-[100%] max-h-[100%] object-fill rounded-[10px]"
                />
              </div>
              {/* ---image--- */}
              {/* -------text for course */}
              <p className="mt-4 !text-center lg:text-left text-textSecondary">
                Basics and Essentials of React and NextJS from the documentation
                Apart from understanding the topics, this course is project
                based teaching Method to make you a proficient React front-end
                developer We believe it will help.
              </p>
              {/* -------text for course */}
              <div className="mt-6 flex flex-col justify-center gap-4 lg:max-0 lg:flex-row"></div>
              <div className="w-full space-y-4 text-center">
                <div className=" flex justify-center gap-x-4">
                  {/* -------flex---- */}
                  <button className="text-textSecondary flex border-[.5px] border-bgPrimary rounded-[30px] px-[20px] py-[10px] gap-x-3 hover:bg-bgPrimary/80 transition duration-700 ease-in-out bg-gradient-to-r from-rgbFrom to-rgbTo font-bold">
                    <CiClock2 className="text-2xl" />
                    1100 Taka
                    <span>|</span>
                    Enroll Now
                  </button>
                  {/* -------flex---- */}
                  <button className=" text-textSecondary flex border-[.5px] border-bgPrimary rounded-[30px] px-[20px] py-[10px] gap-x-3 hover:bg-bgPrimary/80 transition duration-700 ease-in-out">
                    <FiVideo className="text-2xl" />
                    Course Details
                  </button>
                </div>
                <div className="mt-3 flex w-full justify-center">
                  {/* show some text is that available or not */}
                  <div className="flex space-x-1 text-sm text-textSecondary items-center">
                    <AiTwotoneExclamationCircle className="text-[20px]" />
                    <p>
                      The time to enroll in the course has ended, you should
                      enroll now can't
                    </p>
                  </div>
                  {/* show some text is that available or not */}
                </div>
              </div>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
};

export default HomeCard;
