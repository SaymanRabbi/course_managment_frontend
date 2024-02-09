import { ProfileData } from "../../dummyData/DummyData";
import Button from "../Button/Button";
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
      <Button
        className=" text-white w-full mt-4 !py-4 bg-gradient-to-r from-rgbTo to-rgbFrom
        
      "
      >
        Edit Profile
      </Button>
    </DashboardCard>
  );
};

export default Profile;
