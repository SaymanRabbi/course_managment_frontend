import DynamicHedding from "../DynamicHedding/DynamicHedding";
import { IoSearch } from "react-icons/io5";
import { Messages } from "../../dummyData/MessageData";

const Message = () => {

  return (
    <div>
      <DynamicHedding>
        <h4 className="text-2xl text-textPrimary">Message</h4>
      </DynamicHedding>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 border-[.5px] border-bgPrimary">
          <p className="bg-textPrimary p-3 rounded-md font-bold">Chats</p>
          <div className="flex justify-center">
            <div className="flex items-center rounded-full bg-bgPrimary/10 border-[.5px] border-bgPrimary mt-5 px-4 py-2 w-[90%]">
             <IoSearch size={25} className="text-textSecondary" />
              <input
                className="bg-bgPrimary/10 px-2 outline-none"
                type="search"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
          </div>
          {/* Message Contents */}
          <div className="h-[500px] overflow-y-scroll">
            {Messages.map((item)=>{
                return(
                    <div className="px-2 flex justify-between border-t border-bgPrimary mt-3">
                        <div className="flex items-center my-2 py-1 text-textPrimary gap-4">
                            <img className="h-12 rounded-full" src={item.img} alt="" />
                            <div>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-gray-500">{item.sms}</p>
                            </div>
                        </div>
                        <div className="my-4 py-1 text-gray-500">
                            <p>{item.time}</p>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
        <div className="col-span-8">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
