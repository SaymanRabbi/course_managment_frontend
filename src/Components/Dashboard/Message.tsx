import { useEffect, useMemo, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa6";
import { IoSearch, IoSend } from "react-icons/io5";
import { io } from "socket.io-client";
import { useUserStore } from "../../Store/UserStore";
import DynamicHedding from "../DynamicHedding/DynamicHedding";

const Message = () => {
  const {
    allusers,
    user,
    createConversation,
    getConverSationWithId,
    sendMessage,
    conversations,
    userMessages,
    getMessages,
    setMessages,
  } = useUserStore((state) => state);

  const [reciver, setReciver] = useState<any>({});

  const socket = useMemo(() => io("http://localhost:8080/"), []);
  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket?.id);
    });
    socket?.emit("addUser", user?._id);
    socket?.on("getUsers", (users: any) => {
      console.log(users);
    });
    socket?.on("getMessage", (data: any) => {
      console.log(data, "data");
      setMessages(data, user);
    });
  }, [socket]);
  useEffect(() => {
    getConverSationWithId(user?._id);
  }, []);
  const CreateConverSation = async (id: any) => {
    const data = {
      senderId: user?._id,
      receiverId: id,
    };
    createConversation(data);
  };
  const fetchMessages = async (id: any, user: any) => {
    localStorage.setItem("conversationId", id);
    getMessages(id);
    setReciver({
      reciver: user,
    });
  };
  const sendMessagefunc = async (e: any) => {
    socket?.emit("sendMessage", {
      senderId: user?._id,
      receiverId: reciver?.reciver?._id,
      text: e?.target?.message?.value,
      conversationId: localStorage.getItem("conversationId"),
    });
    e.preventDefault();
    const messagess = {
      senderId: user?._id,
      receiverId: conversations[0]?.user?._id,
      text: e?.target?.message?.value,
      conversationId: localStorage.getItem("conversationId"),
    };

    sendMessage(messagess);
    e.target.reset();
  };

  return (
    <div>
      {/* Title */}
      <DynamicHedding>
        <h4 className="text-2xl text-textPrimary">Message</h4>
      </DynamicHedding>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-6 lg:col-span-4 border-[.5px] border-bgPrimary rounded-t-[20px] rounded-bl-[20px]">
          <p className="bg-textPrimary p-3  font-bold rounded-t-md">Chats</p>
          <div className="flex justify-center">
            <div className="flex items-center rounded-full bg-bgPrimary/10 border-[.5px] border-bgPrimary mt-5 px-4 py-2 w-[90%]">
              <IoSearch size={25} className="text-textSecondary" />
              <input
                className="bg-bgPrimary/10 px-2 outline-none text-textPrimary"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
          </div>
          {/* Message Sidebar Contents */}
          <div className="h-[250px] overflow-y-scroll">
            {conversations?.length > 0 ? (
              conversations.map(({ conversationId, user }: any) => {
                return (
                  <div
                    key={user?._id}
                    className={`px-5 flex justify-between border-t border-bgPrimary mt-3 py-2 cursor-pointer`}
                    onClick={() => {
                      fetchMessages(conversationId, user);
                    }}
                  >
                    <div className="flex items-center my-2 text-textPrimary gap-4">
                      <img
                        className="h-[40px] rounded-full  w-[40px] bg-cover object-cover"
                        src={user?.ProfileImage}
                        alt=""
                      />
                      <div>
                        <p className="font-bold">{user?.name}</p>
                        <p>{user?.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-textPrimary mt-[20px]">
                No Chat Found
              </p>
            )}
          </div>
          {/* pepople */}
          <h2>
            <p className="bg-textPrimary p-3  font-bold rounded-t-md">People</p>
          </h2>
          <div className="h-[350px] overflow-y-scroll">
            {allusers.map((item: any) => {
              return item._id !== user?._id ? (
                <div
                  key={item._id}
                  className={`px-5 flex justify-between border-t border-bgPrimary mt-3 py-2 cursor-pointer `}
                  onClick={() => {
                    CreateConverSation(item._id);
                  }}
                >
                  <div className="flex items-center my-2 text-textPrimary gap-4">
                    <img
                      className="h-[40px] rounded-full  w-[40px] bg-cover object-cover"
                      src={item?.ProfileImage}
                      alt=""
                    />
                    <div>
                      <p className="font-bold">{item?.name}</p>
                      <p>{item?.role}</p>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
        {/* Main Message Contents */}
        <div className="col-span-6 lg:col-span-8 bg-bgPrimary/10 p-4 rounded-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="h-[40px] w-[40px] rounded-full object-cover"
                src={reciver?.reciver?.ProfileImage}
                alt=""
              />
              <div>
                <p className="font-bold text-textPrimary">
                  {reciver?.reciver?.name}
                </p>
                <p className="text-gray-500">{reciver?.reciver?.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="border border-bgPrimary p-2 rounded-full">
                <BiSolidPhoneCall size={20} />
              </div>
              <div className="border border-bgPrimary p-2 rounded-full">
                <FaVideo size={20} />
              </div>
            </div>
          </div>
          <div className="border-b border-bgPrimary mt-4"></div>
          {/* Message Start */}
          <div className=" min-h-[80%] max-h-[700px] overflow-y-scroll">
            {/* ----reciver---- */}
            <div className=" p-8 h-[100%]">
              {userMessages.length > 0 ? (
                userMessages?.map((item: any) =>
                  item?.user?._id === user?._id ? (
                    <div className=" max-w-[45%] bg-textPrimary min-h-[50px] rounded-l-md rounded-tr-md p-4 ml-auto mb-4">
                      <p className="text-black font-bold">{item?.message}</p>
                    </div>
                  ) : (
                    <div className=" max-w-[45%] bg-gray-600 min-h-[50px] rounded-r-md rounded-bl-md p-4 mb-4">
                      <p className="text-textPrimary font-bold flex items-center gap-x-2">
                        {item?.message}
                      </p>
                    </div>
                  )
                )
              ) : (
                <p className="text-center text-textPrimary mt-[20px]">
                  No conversation Found select user to start conversation
                </p>
              )}
            </div>
            {/* ----reciver---- */}
          </div>
          {/* Type Message */}
          {reciver?.reciver?.name && (
            <form
              className="flex items-center bg-[#17093E] rounded-full w-full mt-2"
              onSubmit={(e) => sendMessagefunc(e)}
            >
              <input
                type="text"
                className="w-full outline-none rounded-full bg-[#17093E] p-[12px] pl-[15px] text-textPrimary"
                placeholder="Type Message"
                name="message"
              />
              <button type="submit">
                <IoSend
                  size={20}
                  className="text-gray-500 mr-4 cursor-pointer"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
