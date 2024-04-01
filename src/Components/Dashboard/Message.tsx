import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa6";
import { IoSearch, IoSend } from "react-icons/io5";
import { useUserStore } from "../../Store/UserStore";

import { useEffect, useState } from "react";
import DynamicHedding from "../DynamicHedding/DynamicHedding";

const Message = () => {
  const { allusers, user } = useUserStore((state) => state);
  const [loadUser, setLoadUser] = useState(allusers[0]);
  const [id, setId] = useState(allusers[0]?._id);
  useEffect(() => {
    setLoadUser(allusers.find((item: any) => item._id === id));
  }, [id, allusers]);
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
          <div className="h-[500px] overflow-y-scroll">
            {allusers.map((item: any) => {
              return item._id !== user?._id ? (
                <div
                  key={item._id}
                  className={`px-5 flex justify-between border-t border-bgPrimary mt-3 py-2 cursor-pointer ${
                    item._id === id
                      ? "bg-rgbFrom/70 text-white rounded-[10px]"
                      : ""
                  }`}
                  onClick={() => setId(item._id)}
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
                src={loadUser?.ProfileImage}
                alt=""
              />
              <div>
                <p className="font-bold text-textPrimary">{loadUser?.name}</p>
                <p className="text-gray-500">{loadUser?.role}</p>
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
          <div className=" min-h-[80%] overflow-y-scroll">
            {/* ----reciver---- */}
            <div className=" p-8">
              <div className=" max-w-[45%] bg-gray-600 min-h-[50px] rounded-l-md rounded-tr-md p-4 mb-4">
                <p className="text-textPrimary font-bold">
                  Lorem ipsum dolor sit amet consectetu
                </p>
              </div>
              <div className=" max-w-[45%] bg-textPrimary min-h-[50px] rounded-l-md rounded-tr-md p-4 ml-auto">
                <p className="text-black font-bold">Hello</p>
              </div>
            </div>
            {/* ----reciver---- */}
          </div>
          {/* Type Message */}
          <form className="flex items-center bg-[#17093E] rounded-full w-full mt-2">
            <input
              type="text"
              name=""
              id=""
              className="w-full outline-none rounded-full bg-[#17093E] p-[12px] pl-[15px] text-textPrimary"
              placeholder="Type Message"
            />
            <button>
              <IoSend size={20} className="text-gray-500 mr-4 cursor-pointer" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
