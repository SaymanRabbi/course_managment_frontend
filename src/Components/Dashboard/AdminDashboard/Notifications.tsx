import { useEffect } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { useUserStore } from "../../../Store/UserStore";
import DashboardCard from "../DashboardCard";

const Notifications = () => {
  const { getNotification, Notification } = useUserStore((state) => state);

  useEffect(() => {
    const fetchNotification = async () => {
      await getNotification();
    };
    fetchNotification();
  }, []);
  return (
    <DashboardCard title="Recent Courses">
      <div className=" max-h-[500px] overflow-y-auto">
        {Notification.map((item: any) => {
          return (
            <div className="mt-6" key={item?._id}>
              <div className="flex items-center gap-4">
                <IoNotificationsSharp size={30} className="text-pink-700" />
                <div className="text-textPrimary mt-3 md:mt-0">
                  <div>
                    <p className="font-bold">{item?.message}</p>
                  </div>
                  <div className="flex items-center gap-10 mt-2">
                    <div className="md:flex items-center gap-2">
                      <p>{new Date(item?.createdAt)?.toLocaleDateString()}</p>
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
