import { recentCourses } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";
import { FiUser } from "react-icons/fi";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

const RecentCourses = () => {
  return (
    <DashboardCard title="Recent Courses">
      <div>
        {recentCourses.map((item) => {
          return (
            <div className="mt-6">
              <div className="md:flex items-center gap-4">
                <img className="w-full md:w-40 md:h-24 rounded-md" src={item.img} alt="" />
                <div className="text-textPrimary mt-3 md:mt-0">
                  <div>
                    <p className="font-bold">{item.courseName}</p>
                  </div>
                  <div className="flex items-center gap-10 mt-2">
                    <div className="md:flex items-center gap-2">
                      <FiUser />
                      <p>{item.insName}</p>
                    </div>
                    <div className="md:flex items-center gap-2">
                      <MdOutlineMenuBook />
                      <p>{item.Lesson} Lessons</p>
                    </div>
                    <div className="md:flex items-center gap-2">
                      <MdOutlineAccessTime />
                      <p>{item.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gray-700 mt-2"></div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
};

export default RecentCourses;
