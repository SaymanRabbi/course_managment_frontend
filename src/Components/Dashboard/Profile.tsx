import { useUserStore } from "../../Store/UserStore";
import DashboardCard from "./DashboardCard";

import Loading from "../Loading/Loading";

const Profile = () => {
  const { user, isLoading } = useUserStore((state) => state);

  const userData = {
    name: `${user?.name} ${user?.lastname}` || "",
    email: user?.email || "Not Available",
    isVerified: user?.isVerified ? "Verified" : "Not Verified",
    role: user?.role || "Not Available",
    UserName: user?.UserName || "Not Available",
    displayName: user?.displayName || "Not Available",
    PhoneNumber: user?.PhoneNumber || "Not Available",
    ExpartIn: user?.ExpartIn || "Not Available",
    Biography: user?.Biography || "Not Available",
  };
  if (isLoading) return <Loading title="Loading.." />;
  return (
    <DashboardCard title="Profile">
      <>
        {Object.entries(userData).map((data, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-12 text-textPrimary py-2"
            >
              <div className="md:col-span-4 capitalize text-[18px] font-[500] col-span-12">
                <h2>{data[0]}</h2>
              </div>
              <div className="md:col-span-8 col-span-12">
                <h2>{data[1]}</h2>
              </div>
            </div>
          );
        })}
      </>
    </DashboardCard>
  );
};

export default Profile;
