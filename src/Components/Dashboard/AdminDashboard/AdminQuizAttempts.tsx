import { FiUser } from "react-icons/fi";
import { quizAdmin } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";

const AdminQuizAttempts = () => {
  return (
    <DashboardCard title="Recent Courses">
      <div>
        {quizAdmin.map((item) => {
          return (
            <div className="mt-6">
              <div className="md:flex items-center gap-4">
                <img
                  className="w-full md:w-40 md:h-24 rounded-md"
                  src={item.img}
                  alt=""
                />
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
                      <p>{item.purchase} Students</p>
                    </div>
                    <div className="">
                      <button className="flex items-center gap-2 bg-pink-700 px-9 py-2 rounded-md">
                        <span>Details</span>
                      </button>
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

export default AdminQuizAttempts;
