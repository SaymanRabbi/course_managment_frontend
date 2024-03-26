import toast from "react-hot-toast";
import { useUserStore } from "../../../Store/UserStore";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";

const NoticeBoard = () => {
  const { createNotification, success, isLoading } = useUserStore(
    (state) => state
  );
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const Notification = e.currentTarget.notice.value;
    try {
      await createNotification(Notification);
      if (success) {
        toast.success("Notification Created Successfully");
        e.target.reset();
      }
    } catch (error) {}
  };
  return (
    <DashboardCard title="Notice Board">
      <form
        className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]"
        onSubmit={handleSubmit}
      >
        <input
          className="primary_input"
          type="text"
          placeholder="Write Notification....."
          name="notice"
        />
        <Button
          className="bg-gradient-to-r from-rgbFrom to-rgbTo"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating Notification..." : "Create Notification"}
        </Button>
      </form>
    </DashboardCard>
  );
};

export default NoticeBoard;
