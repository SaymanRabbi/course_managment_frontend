import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { useUserStore } from "../../Store/UserStore";
import { CreateCoversation, userChats } from "../../api/ChatRequest";
import ChatBox from "./ChatBox";
import Conversation from "./Conversation";
import DashboardCard from "./DashboardCard";
const Message = () => {
  const { user, getAllUsers, allusers } = useUserStore((state) => state);
  const socket = useRef(
    io("ws://localhost:8800", {
      transports: ["websocket"],
    })
  );
  const [chats, setChats] = useState<any[]>([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      await getAllUsers();
      try {
        const { data } = await userChats(user?._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user?._id]);

  // Connect to Socket.io
  // Connect to Socket.io
  useEffect(() => {
    socket.current.emit("new-user-add", user?._id);
    socket.current.on("get-users", (users: any) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data: any) => {
      setReceivedMessage(data);
    });
  }, [Message]);
  const chekOnline = (chat: any) => {
    const ChatMember = chat?.members?.find((id: any) => id !== user?._id);
    console.log(ChatMember);
    const Online = onlineUsers?.find((id: any) => {
      return id?.userId === ChatMember;
    });
    return Online ? true : false;
  };
  const CreateCoverSations = async (chat: any) => {
    try {
      const datas = {
        senderId: user?._id,
        receiverId: chat?._id,
      };
      const { data } = await CreateCoversation(datas);
      if (data?.members?.length > 0) {
        setChats((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DashboardCard title="Chat">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* conversation */}
        <div className=" col-span-5 lg:col-span-4 border-[.5px] border-bgPrimary rounded-t-[20px] rounded-bl-[20px] p-3 ">
          <div className=" h-[300px] overflow-y-auto">
            {chats.map((chat: any) => (
              <div
                key={chat?._id}
                onClick={() => setCurrentChat(chat)}
                className="mb-2 overflow-y-auto"
              >
                <Conversation
                  data={chat}
                  currentUser={user?._id}
                  chat={currentChat}
                  onlineUsers={chekOnline(chat)}
                />
              </div>
            ))}
          </div>
          <div className=" text-white  px-2">
            <h2 className="text-[20px] mb-3">All user</h2>
            <div>
              {allusers?.map((users: any) =>
                users?._id !== user?._id &&
                chats?.find((chat: any) =>
                  chat?.members?.includes(users?._id)
                ) === undefined ? (
                  <div
                    key={users?._id}
                    className="flex items-center gap-3 mb-3 bg-gray-300/10 p-1 rounded-md px-2 cursor-pointer"
                    onClick={() => CreateCoverSations(users)}
                  >
                    <img
                      src={users?.ProfileImage}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                      <p>{users?.name}</p>
                      <span>{users?.role}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        {/* conversation */}
        <div className=" col-span-7 lg:col-span-8 bg-bgPrimary/10 p-4 rounded-[20px]">
          {/* show chats */}
          <ChatBox
            chat={currentChat}
            currentUser={user?._id}
            sendMessages={sendMessage}
            setSendMessages={setSendMessage}
            recivedMessages={receivedMessage}
          />

          {/* show chats */}
        </div>
      </div>
    </DashboardCard>
  );
};

export default Message;
