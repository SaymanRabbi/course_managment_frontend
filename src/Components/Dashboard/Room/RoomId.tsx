import toast from "react-hot-toast";
import Button from "../../Button/Button";

import { useNavigate } from "react-router-dom";

const RoomId = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLFormElement).roomid.value;
    if (!value) {
      toast.error("Name is Required");
      return;
    }
    navigate(`/course_managment/room/${value}`);
  };
  return (
    <div className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px] lg:w-[50%] w-[80%] mx-auto mt-[150px]">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Your Name"
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
  );
};

export default RoomId;
