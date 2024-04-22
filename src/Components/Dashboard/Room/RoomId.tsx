import toast from "react-hot-toast";
import { useUserStore } from "../../../Store/UserStore";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";
import { useNavigate } from "react-router-dom";

const RoomId = () => {
  const { user } = useUserStore((state) => state);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLFormElement).roomid.value;
    if (!value) {
      toast.error("Email is Required");
      return;
    }
    const match = user?.email === value;
    if (!match) {
      toast.error("Use Valid Email Address");
      return;
    }
    navigate(`/dashboard/room/${value}`);
  };
  return (
    <DashboardCard title="Create Room">
      <div className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Your Email"
            className="primary_input"
            name="roomid"
          />

          <Button
            className="bg-gradient-to-r from-rgbFrom to-rgbTo"
            type="submit"
          >
            Create Room
          </Button>
        </form>
      </div>
    </DashboardCard>
  );
};

export default RoomId;
