import { ProfileData } from "../../dummyData/DummyData";
import DashboardCard from "./DashboardCard";

const Profile = () => {
  return (
    <DashboardCard title="Profile">
      <>
        {Object.entries(ProfileData[0]).map((data, index) => {
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
