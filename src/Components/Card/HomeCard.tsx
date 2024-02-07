import img from "../../../public/images/card/rnext-thumb.png";
import { FiVideo } from "react-icons/fi";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import CourseAvailabilityTimer from "../../utils/Timer";

const HomeCard = () => {
  const data = [
    {
      name: "100 Days of Python",
      description:
        "Python is a popular programming language in the world. It is used for web development, data analysis, artificial intelligence, and scientific",
      duration: 10,
      price: 1000,
      image: "../../../public/images/card/card1.jpg",
    },
    {
      name: "React Full Stack",
      description:
        "React is a popular library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
      duration: 5,
      price: 500,
      image: "../../../public/images/card/card2.jpg",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="relative  flex flex-col border-[.5px] border-bgPrimary p-4 bg-bgPrimary/20 rounded-[10px] w-full hover:scale-105 transition duration-700 ease-in-out"
            key={index}
          >
            {/* timer---- */}
            <div className=" absolute top-[3%] left-[3%] from-rgbFrom to-rgbTo font-bold bg-gradient-to-r px-3 py-2 rounded-[5px] z-10 shadow-2xl">
              <CourseAvailabilityTimer
                courseStartDate={
                  new Date(
                    new Date().getTime() + item.duration * 24 * 60 * 60 * 1000
                  )
                }
              />
            </div>
            {/* timer---- */}
            {/* Add your code here */}
            {/* ---image--- */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className=" relative min-h-[300px] w-[100%]">
                <img
                  src={item.image}
                  alt=""
                  className="absolute top-0 left-0 bottom-0 right-0 p-0 border-none m-auto block w-0 h-0 min-h-[100%] min-w-[100%] max-w-[100%] max-h-[100%] object-fill rounded-[10px]"
                />
              </div>
              {/* ---image--- */}
              {/* -------text for course */}
              <p className="mt-4 !text-center lg:text-left text-textSecondary">
                {item.description}
              </p>
              {/* -------text for course */}
              <div className="mt-6 flex flex-col justify-center gap-4 lg:max-0 lg:flex-row"></div>
              <div className="w-full space-y-4 text-center">
                <div className=" flex justify-center gap-x-4">
                  {/* -------flex---- */}
                  <button className="text-textSecondary flex border-[.5px] border-bgPrimary rounded-[30px] px-[20px] py-[10px] gap-x-3 hover:bg-bgPrimary/80 transition duration-700 ease-in-out bg-gradient-to-r from-rgbFrom to-rgbTo font-bold items-center">
                    <CiClock2 className="text-2xl" />
                    {item.price > 0 ? `${item.price} Tk` : "Free"}
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
                  <div className="flex space-x-1 text-[11px] text-textSecondary items-center">
                    <AiTwotoneExclamationCircle className="text-[20px]" />
                    <p>
                      If you do not use a Bangladeshi mobile number at the time
                      of enrollment, the course fee will be {item.price + 100}{" "}
                      Tk
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
