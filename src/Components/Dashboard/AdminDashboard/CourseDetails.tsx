import DashboardCard from "../DashboardCard";
import detailsimg from "../../../../public/images/notice/notice.png";
import DynamicHedding from "../../DynamicHedding/DynamicHedding";
import { GiBuyCard } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { IoStar } from "react-icons/io5";

const CourseDetails = () => {
  return (
    <DashboardCard title="Course Details">
      <div>
        <img className="w-full h-96" src={detailsimg} alt="" />
        <div>
          <DynamicHedding>
            <h2 className="mt-2 font-bold text-3xl text-textPrimary">
              Complete Web Development Course
            </h2>
          </DynamicHedding>
          <div className="text-textPrimary flex items-center gap-8">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti ipsa eum ratione laudantium corporis atque eligendi dignissimos error. Eligendi, optio placeat. Quos dicta dolore ea ratione? Sunt, ex dolorum.</p>
        </div>
      </div>
    </DashboardCard>
  );
};

export default CourseDetails;
