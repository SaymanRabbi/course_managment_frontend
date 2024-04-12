import { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import { format } from "timeago.js";
import { getMessages, getUser, sendMessageserver } from "../../api/ChatRequest";
interface ChatBoxProps {
  chat: any;
  currentUser: any;
  sendMessages: any;
  setSendMessages: any;
  recivedMessages: any;
  onlineUsers?: any;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  chat,
  currentUser,
  setSendMessages,
  recivedMessages,
}) => {
  const [userData, setUserData] = useState<any>();
  const [messages, setMessages] = useState<any[]>([]);
  const scrollRef = useRef<any>();
  const [newMessage, setNewMessage] = useState<any>("");

  useEffect(() => {
    if (recivedMessages !== null && recivedMessages.chatId === chat?._id) {
      setMessages((prev) => [...prev, recivedMessages]);
    }
  }, [recivedMessages]);
  //   fething data
  useEffect(() => {
    const userId = chat?.members?.find((id: any) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat?._id);

        setMessages(data);
      } catch (error) {}
    };
    if (chat !== null) fetchMessages();
  }, [chat]);
  const handelChange = (newMessage: any) => {
    setNewMessage(newMessage);
  };
  const sendMessage = async (e: any) => {
    if (newMessage === "") return alert("Please type a message");
    e.preventDefault();
    const messages = {
      chatId: chat?._id,
      senderId: currentUser,
      text: newMessage,
    };
    try {
      const { data } = await sendMessageserver(messages);

      setMessages((prev) => [...prev, data]);
      setNewMessage("");
      e.target.value = "";
    } catch (error) {
      console.log(error);
    }
    const reciverId = chat?.members?.find((id: any) => id !== currentUser);
    setSendMessages({ reciverId, ...messages });
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return chat ? (
    <div>
      <div className=" flex mb-2">
        <img
          src={userData?.ProfileImage}
          alt=""
          className=" object-cover bg-cover w-[45px] h-[45px] rounded-full"
        />
        <div className=" ml-2 text-white">
          <h1 className=" font-bold text-[14px] text-white">
            {userData?.name}
          </h1>
          <p className=" text-sm  text-[12px]">{userData?.role}</p>
        </div>
      </div>
      <hr className=" bg-gray-300 mb-2" />
      <div className=" min-h-[470px] overflow-y-auto px-2 max-h-[570px] h-[100%]">
        {messages?.map((message: any) => (
          <div
            className={` p-4 ${
              message.senderId !== currentUser
                ? "bg-orange-400 text-white w-[45%] min-h-[50px] rounded-r-[10px] rounded-bl-[15px] mb-4 font-bold"
                : "p-4  bg-sky-400 text-white w-[45%] min-h-[50px] rounded-l-[10px] rounded-tr-[15px] mb-4 ml-auto font-bold"
            } `}
          >
            {message.senderId !== currentUser ? (
              <>
                <p>{message?.text}</p>
                <p className=" text-[10px] text-end">
                  {format(message?.createdAt)}{" "}
                </p>
              </>
            ) : (
              <>
                <p>{message?.text}</p>
                <p className=" text-[10px] text-end">
                  {format(message?.createdAt)}{" "}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      {/* ------chat sender---- */}
      <div className=" flex justify-between items-center">
        <InputEmoji
          value={newMessage}
          onChange={(text) => handelChange(text)}
          cleanOnEnter
          onEnter={(text) => console.log(text)}
          placeholder="Type a message"
        />
        <button
          className="bg-gradient-to-r from-rgbFrom to-rgbTo text-white px-4 py-2 rounded-md bg-gray-900 "
          onClick={(e) => sendMessage(e)}
        >
          Send
        </button>
      </div>
      {/* ------chat sender---- */}
    </div>
  ) : (
    <div className=" flex justify-center items-center h-[400px]">
      <h1 className=" text-2xl font-bold text-white">
        Select a chat to start messaging
      </h1>
    </div>
  );
};

export default ChatBox;
