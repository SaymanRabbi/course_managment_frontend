import { popularInstructors } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";
import { MdReviews } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";

const PopularInstructor = () => {
  return (
    <DashboardCard title="Popular Instructors">
      <div>
        {popularInstructors.map((item) => {
          return (
            <div className="mt-8">
              <div className="md:flex items-center gap-4">
                <img className="h-12" src={item.img} alt="" />
                <div className="text-textPrimary">
                  <div>
                    <p className="font-bold">{item.name}</p>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="md:flex items-center gap-2">
                      <HiUsers />
                      <p>{item.students} students</p>
                    </div>
                    <div className="md:flex items-center gap-2">
                      <BiSolidVideos />
                      <p>{item.courses} courses</p>
                    </div>
                    <div className="md:flex items-center gap-2">
                      <MdReviews />
                      <p>{item.courses} reviews</p>
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

export default PopularInstructor;
