import DynamicHedding from "../DynamicHedding/DynamicHedding";
import { IoSearch } from "react-icons/io5";
import { Messages } from "../../dummyData/DummyData";
import teacher from "../../../public/images/message/teacher.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const Message = () => {
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
            {Messages.map((item) => {
              return (
                <div className="px-5 flex justify-between border-t border-bgPrimary mt-3 py-2 ">
                  <div className="flex items-center my-2 text-textPrimary gap-4">
                    <img className="h-10 rounded-full" src={item.img} alt="" />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-500">{item.sms}</p>
                    </div>
                  </div>
                  <div className="my-4 py-1 text-gray-500">
                    <p>{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Main Message Contents */}
        <div className="col-span-6 lg:col-span-8 bg-bgPrimary/10 p-4 rounded-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img className="h-12 rounded-full" src={teacher} alt="" />
              <div>
                <p className="font-bold text-textPrimary">Mr. Harby</p>
                <p className="text-gray-500">stay home, stay safe</p>
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
          <div className="h-[500px] overflow-y-scroll">
            <div className="flex-row">
              {/* Left Side User */}
              <div className="flex justify-start gap-2 pt-[30px] max-w-[415px] relative mr-auto gap-x-4">
                <img className="h-10 rounded-full" src={teacher} alt="" />
                <div>
                  <p className="bg-[#17093E] text-textPrimary rounded-md p-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <p className="text-gray-500 my-3">4:15 pm</p>
                  <p className="bg-[#17093E] text-textPrimary p-2 rounded-md my-1 ">
                    Lorem, ipsum dolor.
                  </p>
                  <p className="text-gray-500 my-3">4:15 pm</p>
                </div>
              </div>
              {/* Right Side User */}

              <div className=" flex max-w-[415px] relative ml-auto gap-x-4">
                <div>
                  <p className="bg-[#17093E] text-textPrimary text-right p-2 rounded-md ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <p className="text-gray-500 my-1">4:15 pm</p>
                  <p className="bg-[#17093E] text-textPrimary p-2 rounded-md my-1 w-[80%]">
                    Lorem, ipsum dolor.
                  </p>
                  <p className="text-gray-500 my-3">4:15 pm</p>
                </div>
                <img className="h-10 rounded-full" src={teacher} alt="" />
              </div>
            </div>
          </div>
          {/* Type Message */}
          <div className="flex items-center bg-[#17093E] rounded-full w-full">
            <input
              type="text"
              name=""
              id=""
              className="w-full outline-none rounded-full bg-[#17093E] p-[12px] pl-[15px] text-textPrimary"
              placeholder="Type Message"
            />
            <IoSend size={20} className="text-gray-500 mr-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
