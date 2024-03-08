import { GiBuyCard } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import { useUserStore } from "../../../Store/UserStore";
import DynamicHedding from "../../DynamicHedding/DynamicHedding";
import ButtonPages from "./ButtonPages";

const CourseDetails = () => {
  const { courses } = useUserStore((state: any) => state);
  return (
    <div className=" mt-[130px] md:w-[70%] mx-auto px-[20px]">
      <img
        className="min-h-[100%] min-w-[100%] max-w-[100%] max-h-[430px]  rounded-[10px] object-cover"
        src={courses[0].image}
        alt=""
      />
      <div>
        <DynamicHedding>
          <h2 className="mt-2 font-bold text-3xl text-textPrimary">
            {courses[0].title}
          </h2>
        </DynamicHedding>
        <div className="text-textPrimary md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <GiBuyCard className="" />
            <p>700 students</p>
          </div>
          <div className="flex items-center gap-2">
            <GrUserManager />
            <p>John Doe</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-rgbTo">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <div>(46)</div>
          </div>
        </div>
      </div>
      <div className="text-textPrimary mt-4">
        <p>{courses[0].description}</p>
      </div>
      <ButtonPages />
    </div>
  );
};

export default CourseDetails;
