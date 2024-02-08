import { BiVideo } from "react-icons/bi";
import DynamicHedding from "../DynamicHedding/DynamicHedding";
import CourseSvg from "../../../public/images/svg/peep1.svg";
import { useEffect, useState } from "react";
import { DetailsContent } from "../../dummyData/DummyData";

const Details = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    // Function to update the width when the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div>
        <img className="h-32 mx-auto" src={CourseSvg} alt="" />
        <DynamicHedding>
          <h4 className="text-2xl lg:text-4xl font-bold text-textPrimary py-4 text-center">
            Our Curses at a glance
          </h4>
        </DynamicHedding>
        <p className="text-textPrimary text-center text-base">
          What will be in this course
        </p>
      </div>
      {/* Course Elements */}
      <div className="grid grid-cols-12 bg-bgPrimary/20 border-[.5px] border-bgPrimary rounded-[10px] my-4 p-4 mt-8">
        {DetailsContent.map((item) => {
          return (
            <div
              key={item.id}
              className={` border-bgPrimary p-8 overflow-hidden lg:col-span-4 md:col-span-6 col-span-12
              ${width >= 1024 && item.isborder ? "border-r" : " border-r-0"} 
              ${width >= 1024 && item.borderButtom ? "" : "border-b"}
              ${
                (width >= 768 && width <= 1024 && item.borderRight) === true
                  ? " border-l"
                  : ""
              }
              `}
            >
              <div className=" hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <BiVideo
                  size={50}
                  className="mx-auto bg-gradient-to-r text-[#384fde]"
                />
                <p className="font-bold text-textPrimary text-center">
                  {item.name}
                </p>
                <p className="text-textSecondary text-center text-sm mt-2 leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
