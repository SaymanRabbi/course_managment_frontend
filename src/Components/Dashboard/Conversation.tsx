import React, { useEffect, useState } from "react";
import { getUser } from "../../api/ChatRequest";

interface ConversationProps {
  data: any;
  currentUser: any;
  chat?: any;
  onlineUsers: any;
}
const Conversation: React.FC<ConversationProps> = ({
  data,
  currentUser,
  onlineUsers,
}) => {
  const [userData, setUserData] = useState<any>();
  console.log(onlineUsers);
  useEffect(() => {
    const userId = data?.members?.find((id: any) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  return (
    <div className=" w-[100%] flex items-center pl-2 gap-x-2 cursor-pointer h-[50px]  rounded-md hover:bg-bgPrimary/20 mb-3">
      <img
        src={userData?.ProfileImage}
        alt=""
        className=" object-cover bg-cover w-[45px] h-[45px] rounded-full relative"
      />
      <span
        className={`w-[15px] h-[15px] ${
          onlineUsers ? "bg-green-400" : "bg-red-600"
        } rounded-full mt-[-35px] ml-[30px] absolute`}
      ></span>
      <div className=" text-white">
        <h1 className=" font-bold text-[14px]">{userData?.name}</h1>
        <p className=" text-sm  text-[12px]">{userData?.role}</p>
      </div>
    </div>
  );
};

export default Conversation;
