import { notifications } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";
import { IoNotificationsSharp } from "react-icons/io5";

const Notifications = () => {
  return (
    <DashboardCard title="Recent Courses">
      <div>
        {notifications.map((item) => {
          return (
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <IoNotificationsSharp size={30} className="text-pink-700" />
                <div className="text-textPrimary mt-3 md:mt-0">
                  <div>
                    <p className="font-bold">{item.title}</p>
                  </div>
                  <div className="flex items-center gap-10 mt-2">
                    <div className="md:flex items-center gap-2">
                      <p>{item.time}</p>
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

export default Notifications;
